export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'bmjpkU8bBWRse2JwKgzOGTv5tUI3',
      username: 'karl',
      firstName: 'Karl',
      emailAddress: 'karlhadwen@gmail.com',
      following: ['2'],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'raphael',
      firstName: 'Raphael',
      emailAddress: 'raphael@sanzio.com',
      following: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'marshal',
      firstName: 'Marshal',
      emailAddress: 'marshal@mathers.com',
      following: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'orwell',
      firstName: 'George',
      emailAddress: 'george@orwell.com',
      following: ['bmjpkU8bBWRse2JwKgzOGTv5tUI3'],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'marshal',
            comment: 'Love this place, looks like my animal farm!',
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?',
          },
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
