import 'reflect-metadata';
import ionicSelector from 'ionic-selector';
import { Meteor } from 'meteor/meteor';
import { run as runWeb } from './imports/app/app.web';
import { run as runMobile } from './imports/app/app.mobile';

if (Meteor.isCordova) {
  document.addEventListener('deviceready', () => {
    ionicSelector('app');
    runMobile();
    setClass('mobile');
  });
} else {
  runWeb();
  setClass('web');
}

function setClass(css): void {
  if (!document.body.className) {
    document.body.className = "";
  }
  document.body.className += " " + css;
}
