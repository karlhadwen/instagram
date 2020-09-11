export function seedDatabase(firebase) {
  firebase
    .firestore()
    .collection('users')
    .add({
      userId: '4FgXbCN8vEXph46gw7w9en8n2xC3',
      username: 'karl',
      firstName: 'Karl',
      lastName: 'Hadwen',
      emailAddress: 'karlhadwen@gmail.com',
      following: ['4FgXbCN8vEXph46gw7w9en8n2xC3', '2'],
      dateCreated: Date.now(),
    });

  firebase
    .firestore()
    .collection('photos')
    .add({
      photoId: '1',
      userId: '4FgXbCN8vEXph46gw7w9en8n2xC3',
      imageSrc: '/images/users/karl/1.jpg',
      caption: 'A visit to one of my favourite places.',
      likes: [],
      comments: [
        {
          displayName: 'eric',
          comment: 'Love this place, looks like my animal farm!',
        },
        {
          displayName: 'arthur',
          comment: 'Would you mind if I used this picture?',
        },
        {
          displayName: 'blair',
          comment: 'Historic location!',
        },
        {
          displayName: 'george',
          comment: 'Love this place, what time did you shoot this?',
        },
      ],
      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now(),
    });
}
