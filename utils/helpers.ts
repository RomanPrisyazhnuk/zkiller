import { toast } from 'react-semantic-toasts';
import reduce from 'lodash/reduce';
import { ArticleType } from '../models/Article';
import { CategoryType } from '../models/Category';
import { UserType } from '../models/User';

export const createAsyncActionType = (type: string) => ({
  ACTION: type,
  START: `${type}_START`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const writeCorrectUserData = (info: any) => ({
  id: info.data.user._id,
  name: info.data.user.alias,
  avatar: info.data.user.avatar,
  numberOfVictories: info.data.user.numberOfVictories,
  access_token: info.token,
  isLoading: false,
});

export const createErrorToast = (text: string) =>
  toast({
    type: 'error',
    icon: 'envelope',
    title: 'Error with logout',
    description: text,
    animation: 'bounce',
    time: 5000,
  });

export const responseFormatter = (array: UserType[] | ArticleType[] | CategoryType[]) =>
  reduce(array, (result, item: any) => ({ ...result, [item.seoId]: item }), {});
