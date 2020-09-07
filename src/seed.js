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

  firebase.firestore().collection('photos').add({
    photoId: '1',
    userId: '4FgXbCN8vEXph46gw7w9en8n2xC3',
    imageSrc: '/images/users/karl/1.jpg',
    caption: 'A visit to one of my favourite places.',
    likes: [],
    comments: [],
    userLatitude: '40.7128°',
    userLongitude: '74.0060°',
    dateCreated: Date.now(),
  });
}
