import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwjUBhjiloiqEdrWoDjoDBBIYqSV5Om_4",
  authDomain: "data-collector-github.firebaseapp.com",
  projectId: "data-collector-github",
  storageBucket: "data-collector-github.appspot.com",
  messagingSenderId: "987342559847",
  appId: "1:987342559847:web:49b301c7219715639892c2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
githubAuthProvider.setCustomParameters({
  prompt: 'select_account'
});
githubAuthProvider.setCustomParameters({
  'display': 'popup'
});
githubAuthProvider.addScope('repo');
githubAuthProvider.addScope('user');
githubAuthProvider.addScope('admin');

export { auth, githubAuthProvider };