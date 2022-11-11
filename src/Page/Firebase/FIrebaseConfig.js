const firebaseConfig = {
  // apiKey: "AIzaSyAVTKyu7yETCyOgAu0ALkU6Kdcxenw0opU",
  // authDomain: "sports-capturing.firebaseapp.com",
  // projectId: "sports-capturing",
  // storageBucket: "sports-capturing.appspot.com",
  // messagingSenderId: "908796817755",
  // appId: "1:908796817755:web:a1d10284af176d4a192a7e",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

export default firebaseConfig;
