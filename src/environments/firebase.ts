import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyD86bgppTuFYPhWnRruk513LEmsrQqAOxE',
  authDomain: 'just-a-dev-blog.firebaseapp.com',
  databaseURL: 'https://just-a-dev-blog.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '945239812828'
};


export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
