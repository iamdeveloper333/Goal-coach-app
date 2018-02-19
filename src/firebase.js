import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCPFtlarbhTojubJHZ9qx-C_WHF59J22qs",
    authDomain: "goalcoach-483a6.firebaseapp.com",
    databaseURL: "https://goalcoach-483a6.firebaseio.com",
    projectId: "goalcoach-483a6",
    storageBucket: "goalcoach-483a6.appspot.com",
    messagingSenderId: "922922786799"
  };
  export const firebaseApp= firebase.initializeApp(config);
  export const goalRef= firebase.database().ref('goals');
  export const completeGoalRef= firebase.database().ref('completegoals');

