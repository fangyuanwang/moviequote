// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBzVzdJHUFakW_Z5upIJzkn53yK6E79YB8',
    authDomain: 'wangf-movie-quote.firebaseapp.com',
    databaseURL: 'https://wangf-movie-quote.firebaseio.com',
    projectId: 'wangf-movie-quote',
    storageBucket: 'wangf-movie-quote.appspot.com',
    messagingSenderId: '185193661822'
  },
};
