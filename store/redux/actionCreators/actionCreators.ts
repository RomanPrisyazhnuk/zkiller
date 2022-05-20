import { toast } from 'react-semantic-toasts';
import * as Cookies from 'js-cookie';
import * as action from '../actionTypes/actionTypes';
import {
  requestLogin,
  requestLogout,
  requestUpdateUserData,
  requestUpdateUserToken,
  requestSendImage,
} from '../../../utils/apiHelpers';
import { createErrorToast, responseFormatter, writeCorrectUserData } from '../../../utils/helpers';
import { Dispatch, ActionCreator, Action } from 'redux';
import getApiClient from '../../../api';
import { getQuestions, getQuestion, updateAnswersCounts } from '../../../firebase/firebase';
import config from '../../../api/urls/url-config.json';
import { TArticlesByGenderAndCategory } from '../../../api/types';
import { ArticleType } from '../../../models/Article';
import { map } from '@firebase/util';
import { UnitType } from '../../../models/Unit';

export const gainMoney = (payload: number) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.GAIN_MONEY,
  });
};

export const lossMoney = (payload: number) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.LOSS_MONEY,
  });
};

export const gainUnit = (payload: UnitType) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.GAIN_UNIT,
  });
};
export const gainLevel = (payload: string) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.GAIN_LEVEL,
  });
};
export const lossUnit = (payload: UnitType) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.LOSS_UNIT,
  });
};

export const setAuthStoreUserData = (type: string, token: string) => (dispatch: any) => {
  return dispatch({
    type: action.AUTH_STORE_USER_DATA.ACTION,
    payload: {
      promise: requestLogin(type, token)
        .then((data: any) => {
          const UserData = writeCorrectUserData(data);
          Cookies.set('auth_token', data.token);
          Cookies.set('userData', UserData);
          return UserData;
        })
        .catch(() =>
          toast({
            type: 'error',
            icon: 'envelope',
            title: 'Error with authorization',
            description: 'Sorry for the inconvenience, we will fix it soon',
            animation: 'bounce',
            time: 5000,
          }),
        ),
    },
  });
};

export const setAuthUserDataFromCookies = (payload: object) => {
  return {
    payload,
    type: action.AUTH_STORE_USER_COOKIES,
  };
};

export function logOut(): action.LogOut {
  return {
    type: action.LOG_OUT,
  };
}

export const logOutStore = (token: number, id: number) => (dispatch: any) => {
  return dispatch({
    type: action.LOG_OUT_STORE.ACTION,
    payload: {
      promise: requestLogout(token, id).catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: 'Error with logout',
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        }),
      ),
    },
  });
};

// Questions

export const getQuestionsAction: ActionCreator<Action> = () => ({
  type: action.GET_QUESTIONS.ACTION,
  payload: {
    promise: getQuestions().catch(() => createErrorToast('Questions are unavailable now')),
  },
});

export const getQuestionAction: ActionCreator<Action> = (id: string) => ({
  type: action.GET_QUESTION.ACTION,
  payload: {
    promise: getQuestion(id).catch(() => createErrorToast('Current question is unavailable now')),
  },
});

// Articles
export const getArticlesAction: ActionCreator<Action> = () => ({
  type: action.GET_ARTICLES.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .articles.getArticles()
      .then((response: any) => {
        return responseFormatter(response);
      })
      .catch(() => createErrorToast('Articles are unavailable now')),
  },
});

export const getArticleAction: ActionCreator<Action> = (id: string) => ({
  type: action.GET_ARTICLE.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .articles.getArticle(id)
      .catch(() => createErrorToast('Current article is unavailable now')),
  },
});

export const getArticlesByUserAction: (id: string, seoId: string) => ActionCreator<Action> = (
  id: string,
  seoId: string,
) => (dispatch: Dispatch) => {
  return dispatch({
    type: action.GET_ARTICLES_BY_USER.ACTION,
    payload: {
      promise: getApiClient(config.production)
        .articles.getArticlesByUserId(id)
        .then((response: any) => {
          dispatch(setArticlesByUserAction(response, seoId));
          return responseFormatter(response);
        })
        .catch(() => createErrorToast('Articles are unavailable now')),
    },
  });
};

export const setArticlesByUserAction: ActionCreator<Action> = (response: any, seoId: string) => ({
  type: action.SET_ARTICLES_SEO_ID_BY_USER,
  payload: {
    seoId,
    articlesIds: map(response, (item: ArticleType) => item.seoId),
  },
});

export const getArticlesByGenderAndCategoryAction: ActionCreator<Action> = (data: TArticlesByGenderAndCategory) => ({
  type: action.GET_ARTICLES_BY_GENDER_AND_CATEGORY.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .articles.getArticlesByGenderAndCategory(data)
      .then((response: any) => {
        return responseFormatter(response);
      })
      .catch(() => createErrorToast('Articles are unavailable now')),
  },
});

export const getArticlesByGenderAction: ActionCreator<Action> = (gender: string) => ({
  type: action.GET_ARTICLES_BY_GENDER.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .articles.getArticlesByGender(gender)
      .then((response: any) => {
        return responseFormatter(response);
      })
      .catch(() => createErrorToast('Articles are unavailable now')),
  },
});

// update user

interface IDataProps {
  id: string;
  alias: string;
  avatar: any;
}

export const SetUpdateStoreUserData = (data: IDataProps) => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const authToken = Cookies.get('auth_token');
    return dispatch({
      type: action.UPDATE_STORE_USER_DATA.ACTION,
      payload: {
        promise: requestUpdateUserToken(authToken)
          .then((res: any) => {
            const authToken = res.token;
            Cookies.set('auth_token', authToken);
            if (data.avatar) {
              return requestSendImage(authToken, data.avatar);
            }
          })
          .then((res) => {
            return requestUpdateUserData({
              ...data,
              avatar: data.avatar ? res.image : state.user.userData.avatar,
            });
          })
          .then((data) => {
            const UserData = writeCorrectUserData(data);
            Cookies.set('userData', UserData);
            return UserData;
          })
          .catch(() =>
            toast({
              type: 'error',
              icon: 'envelope',
              title: 'Error with getting data',
              description: 'Sorry for the inconvenience, we will fix it soon',
              animation: 'bounce',
              time: 5000,
            }),
          ),
      },
    });
  };
};

// Gender

export const changeGender = (payload: string) => (dispatch: Dispatch) => {
  return dispatch({
    payload,
    type: action.CHANGE_GENDER,
  });
};

// Answer's counts
export const updateAnswersCountsAction: ActionCreator<Action> = (id: string) => ({
  type: action.UPDATE_ANSWERS_COUNTS.ACTION,
  payload: {
    promise: updateAnswersCounts(id).catch(() => createErrorToast('Current action is unavailable now')),
  },
});

// Author
export const getAuthorAction: ActionCreator<Action> = (id: string) => ({
  type: action.GET_AUTHOR.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .users.getAuthor(id)
      .catch(() => createErrorToast('Author are unavailable now')),
  },
});

export const getAuthorsAction: ActionCreator<Action> = () => ({
  type: action.GET_AUTHORS.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .users.getAuthors()
      .then((response: any) => {
        return responseFormatter(response);
      })
      .catch(() => createErrorToast('Authors are unavailable now')),
  },
});

export const getAuthorByIdAction: (id: string, articleSeoId: any) => ActionCreator<Action> = (
  id: string,
  articleSeoId: any,
) => (dispatch: Dispatch) => {
  return dispatch({
    type: action.GET_AUTHOR_BY_ID.ACTION,
    payload: {
      promise: getApiClient(config.production)
        .users.getAuthorById(id)
        .then((response: any) => {
          dispatch(setUserByArticlesAction(response, articleSeoId));
          return response;
        })
        .catch(() => createErrorToast('Authors are unavailable now')),
    },
  });
};

export const setUserByArticlesAction: ActionCreator<Action> = (response, articleSeoId) => ({
  type: action.SET_USER_SEO_ID_BY_ARTICLE,
  payload: {
    seoId: articleSeoId,
    userSeoId: response.seoId,
  },
});

export const getCategoriesAction: ActionCreator<Action> = () => ({
  type: action.GET_CATEGORIES.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .categories.getAllCategories()
      .then((response: any) => {
        return responseFormatter(response);
      })
      .catch(() => createErrorToast('Authors are unavailable now')),
  },
});

export const getCategoryAction: ActionCreator<Action> = (id: string) => ({
  type: action.GET_CATEGORY.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .categories.getCategoryById(id)
      .catch(() => createErrorToast('Authors are unavailable now')),
  },
});

export const getCategoryBySeoIdAction: ActionCreator<Action> = (seoId: string) => ({
  type: action.GET_CATEGORY_BY_SEO_ID.ACTION,
  payload: {
    promise: getApiClient(config.production)
      .categories.getCategoryBySeoId(seoId)
      .catch(() => createErrorToast('Authors are unavailable now')),
  },
});

export const getArticlesByCategoryAction: (id: string, seoId: string) => ActionCreator<Action> = (
  id: string,
  seoId: string,
) => (dispatch: Dispatch) => {
  return dispatch({
    type: action.GET_ARTICLES_BY_CATEGORY.ACTION,
    payload: {
      promise: getApiClient(config.production)
        .articles.getArticlesByCategory(id)
        .then((response: any) => {
          dispatch(setArticlesByCategoryAction(response, seoId));
          return responseFormatter(response);
        })
        .catch(() => createErrorToast('Articles are unavailable now')),
    },
  });
};

export const setArticlesByCategoryAction: ActionCreator<Action> = (response, seoId) => ({
  type: action.SET_ARTICLES_SEO_ID_BY_CATEGORY,
  payload: {
    seoId,
    articlesIds: map(response, (item: ArticleType) => item.seoId),
  },
});
