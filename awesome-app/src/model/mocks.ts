import { IUser } from './user';

export const USER_DATA: IUser[] = [
  {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Jan 23, 1965'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft',
    votes: 120,
    image:
      'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    comments: [
      {
        stars: 3,
        body: 'Love it',
        author: 'john@test',
      },
      {
        stars: 4,
        body: 'Like it',
        author: 'jenny@test',
      },
    ],
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('Aug 23, 1965'),
    income: 0,
    isWorking: false,
    company: 'Apple',
    votes: 190,
    image:
      'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
    comments: [
      {
        stars: 4,
        body: 'Like it',
        author: 'jenny@test',
      },
    ],
  },
  {
    firstName: 'Elon',
    lastName: 'musk',
    dob: new Date('Dec 21, 1965'),
    income: 40000,
    isWorking: true,
    company: 'Amazon',
    votes: 150,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    comments: [],
  },
];
