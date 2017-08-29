// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCPR3i_Jba33tqXYD-2_MynK9DhqZNy_XQ',
    authDomain: 'maistore-maistore.firebaseapp.com',
    databaseURL: 'https://maistore-maistore.firebaseio.com',
    projectId: 'maistore-maistore',
    storageBucket: 'maistore-maistore.appspot.com',
    messagingSenderId: '639190553847'
  }
};
