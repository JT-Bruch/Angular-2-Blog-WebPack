import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyD86bgppTuFYPhWnRruk513LEmsrQqAOxE',
  authDomain: 'just-a-dev-blog.firebaseapp.com',
  databaseURL: 'https://just-a-dev-blog.firebaseio.com',
  messagingSenderId: '945239812828',
  storageBucket: ''
};

export const firebaseAuthConfig = {
  method: AuthMethods.Redirect,
  provider: AuthProviders.Google
};
