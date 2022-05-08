import { AnswerType } from './Answer';

export type QuestionType = {
  id: string;
  imageSrc: string;
  cardText: string;
  titleText: string;
  descriptionText: string;
  youtubeVideos: string[];
  usefullLinks: string[];
  answers: AnswerType[];
  similarQuestions: string[];
  similarQuestionsOtherSex: string[];
  sex: string;
};

export const questionsMock: QuestionType[] = [
  {
    id: '6-yavnyh-priznakov-kak-vyyavit-izmenshchicu',
    imageSrc: 'https://jaay.ru/wp-content/uploads/2019/09/izmenyi-e1567779039134.jpg',
    cardText: 'Как выявить изменщицу?',
    titleText: '6 явных признаков как выявить изменщицу',
    descriptionText:
      'Примечание. Если у Вас совпали три или больше пунктов это уже серьезный повод задуматься над тем, а не ходит ли налево Ваша дама. Но нужно трезво оценивать ситуацию, если один  из пунктов у Вас совпал с тем что Вы наблюдаете, это еще ни о чем не говорит. Не впадайте в крайности. ',
    youtubeVideos: [
      'https://www.youtube.com/watch?v=7wg8Po-v4wU',
      'https://www.youtube.com/watch?v=jSdrpw5I7Xk',
      'https://www.youtube.com/watch?v=taCs9o4CINM',
      'https://www.youtube.com/watch?v=bqCMB952HLw',
      'https://www.youtube.com/watch?v=g8mKFxetCDQ&t=639s',
      'https://www.youtube.com/watch?v=4ewP8sTvS1g',
      'https://www.youtube.com/watch?v=zDh2LhiTjXw',
      'https://www.youtube.com/watch?v=4x7JjyB8ycM',
      'https://www.youtube.com/watch?v=GyHz8jH07J0',
    ],
    usefullLinks: [],
    similarQuestions: [],
    similarQuestionsOtherSex: [],
    sex: 'male',
    answers: [
      {
        id: 'answer1',
        titleText: 'Изменение в графике на работе.',
        descriptionText:
          'Задержки до позднего вечера. Или же наоборот, начала больше уточнять о твоем графике, а когда ты будешь дома, а во сколько приедешь из спортзала и так далее…',
        countUsefull: 15,
        countUseless: 5,
      },
      {
        id: 'answer2',
        titleText: 'Появились новые подружки',
        descriptionText: 'Из-за чего она с ними начала чаще проводить время или что еще лучше оставаться с ночевкой',
        countUsefull: 125,
        countUseless: 5,
      },
      {
        id: 'answer3',
        titleText: 'Внешность',
        descriptionText:
          'Она стала больше следить за своей внешностью, больше ухаживать за собой. И ты замечаешь что это не для тебя. Особенно можно обратить внимание на нижнее белье. Если раньше она не заморачивалась то сейчас она его носит всегда. Если девушка изменяет то она будет стараться выглядеть как модель 24/7',
        countUsefull: 134,
        countUseless: 53,
      },
      {
        id: 'answer4',
        titleText: 'Телефон',
        descriptionText:
          'Она стала с ним не разлучная. Появились пароли на телефоне, нигде его не оставляет. Она постоянно с кем то переписывается. Можете взять ее телефон чтобы позвонить и посмотреть ее реакцию.',
        countUsefull: 134,
        countUseless: 53,
      },
    ],
  },
  {
    id: 'q2',
    imageSrc:
      'https://instagram.fdnk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/136426335_393678841721188_7643321645262631125_n.jpg?_nc_ht=instagram.fdnk3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=I1PfqMJ1bvsAX86RKRT&tp=1&oh=be97f0f2ea5d0b127f243de2128eccf2&oe=6023EB1F',
    cardText: 'Вот это самый офигенный вопрос 2',
    titleText: 'Вот это самый офигенный вопрос 2',
    descriptionText: 'Описание вопроса 2',
    youtubeVideos: [],
    usefullLinks: [],
    similarQuestions: [],
    similarQuestionsOtherSex: [],
    sex: 'male',
    answers: [
      {
        id: 'answer1',
        titleText: 'Офигенный ответ 1',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 15,
        countUseless: 5,
      },
      {
        id: 'answer2',
        titleText: 'Офигенный ответ 2',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 125,
        countUseless: 5,
      },
      {
        id: 'answer3',
        titleText: 'Офигенный ответ 3',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 134,
        countUseless: 53,
      },
    ],
  },
  {
    id: 'q3',
    imageSrc:
      'https://instagram.fdnk3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/135673374_399429708009457_1402344351871011896_n.jpg?_nc_ht=instagram.fdnk3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=qVXo81agAFoAX-VBjgm&tp=1&oh=30959c58d5ac6804a192f78d323bde1e&oe=6022D44E',
    cardText: 'Вот это самый офигенный вопрос 2',
    titleText: 'Вот это самый офигенный вопрос 2',
    descriptionText: 'Описание вопроса 2',
    youtubeVideos: [],
    usefullLinks: [],
    similarQuestions: [],
    similarQuestionsOtherSex: [],
    sex: 'male',
    answers: [
      {
        id: 'answer1',
        titleText: 'Офигенный ответ 1',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 15,
        countUseless: 5,
      },
      {
        id: 'answer2',
        titleText: 'Офигенный ответ 2',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 125,
        countUseless: 5,
      },
      {
        id: 'answer3',
        titleText: 'Офигенный ответ 3',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 134,
        countUseless: 53,
      },
    ],
  },
  {
    id: 'q4',
    imageSrc:
      'https://instagram.fdnk3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/135811706_3744538375584755_6081858556111401483_n.jpg?_nc_ht=instagram.fdnk3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=uVPa5NfU2lQAX_3_NDP&tp=1&oh=eb399c5fe6114e69d5823751061f9f15&oe=6024CB58',
    cardText: 'Вот это самый офигенный вопрос 2',
    titleText: 'Вот это самый офигенный вопрос 2',
    descriptionText: 'Описание вопроса 2',
    youtubeVideos: [],
    usefullLinks: [],
    similarQuestions: [],
    similarQuestionsOtherSex: [],
    sex: 'male',
    answers: [
      {
        id: 'answer1',
        titleText: 'Офигенный ответ 1',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 15,
        countUseless: 5,
      },
      {
        id: 'answer2',
        titleText: 'Офигенный ответ 2',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 125,
        countUseless: 5,
      },
      {
        id: 'answer3',
        titleText: 'Офигенный ответ 3',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 134,
        countUseless: 53,
      },
    ],
  },
  {
    id: 'q5',
    imageSrc:
      'https://instagram.fdnk3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/135548448_396769214734079_2552714061837239211_n.jpg?_nc_ht=instagram.fdnk3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=l7krXpeWiQQAX80xLAG&tp=1&oh=75d057fb5be7faf8d994fdd8f0eeb2f2&oe=6021D28B',
    cardText: 'Вот это самый офигенный вопрос 2',
    titleText: 'Вот это самый офигенный вопрос 2',
    descriptionText: 'Описание вопроса 2',
    youtubeVideos: [],
    usefullLinks: [],
    similarQuestions: [],
    similarQuestionsOtherSex: [],
    sex: 'male',
    answers: [
      {
        id: 'answer1',
        titleText: 'Офигенный ответ 1',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 15,
        countUseless: 5,
      },
      {
        id: 'answer2',
        titleText: 'Офигенный ответ 2',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 125,
        countUseless: 5,
      },
      {
        id: 'answer3',
        titleText: 'Офигенный ответ 3',
        descriptionText: 'Hhkjhaj jhjkashf jahkjf hkjahadkjfh jkadhfkj',
        countUsefull: 134,
        countUseless: 53,
      },
    ],
  },
];
