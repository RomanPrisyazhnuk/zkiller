import firebase from 'firebase/app';
import 'firebase/database';
import forEach from 'lodash/map';

const config = {
  apiKey: 'AIzaSyDeWaDvXQm1Jbkn9-h1hNe_QTfmG7xOXd0',
  authDomain: 'psychonica-3a0ea.firebaseapp.com',
  databaseURL: 'https://psychonica-3a0ea-default-rtdb.firebaseio.com',
  projectId: 'psychonica-3a0ea',
  storageBucket: 'psychonica-3a0ea.appspot.com',
  messagingSenderId: '247277760058',
  appId: '1:247277760058:web:460a22f4d03d17c8850f03',
  measurementId: 'G-1VSZWRG2XD',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

const databaseRef = firebase.database().ref();
export const questionsRef = databaseRef.child('Questions');
export const articlesRef = databaseRef.child('Articles');
export const authorsRef = databaseRef.child('Authors');
export default firebase;

export const getQuestions = () => {
  return new Promise((resolve) => {
    const newQuestions = {};
    questionsRef.on('value', (snapshot) => {
      const items = snapshot.val();
      forEach(items, (item) => {
        item.usefullLinks = [];
        item.similarQuestions = [];
        item.similarQuestionsOtherSex = [];
        // @ts-ignore
        newQuestions[item.id] = item;
      });
      resolve(newQuestions);
    });
  });
};

export const getQuestion = (id: string) => {
  const question = questionsRef.child(id);

  return new Promise((resolve) => {
    question.on('value', (snapshot) => {
      const item = snapshot.val();
      item.usefullLinks = [];
      item.similarQuestions = [];
      item.similarQuestionsOtherSex = [];
      resolve(item);
    });
  });
};

export const updateAnswersCounts = async (id: string) => {
  const question = questionsRef.child(id);

  const res = await question.update({ countUsefull: 1, countUseless: 1 });
  console.log(res);
};
