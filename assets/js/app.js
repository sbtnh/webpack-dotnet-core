/* eslint-disable no-unused-vars */
import styles from '../css/app.scss';
/* eslint-enable no-unused-vars */
import moment from 'moment';
import dynamicImports from '~/utils/dynamicImports';


// import Turbolinks from 'turbolinks';
// console.log(Turbolinks);

const rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log( rightNow );
// "October 23rd 2016, 9:30:24 pm"

dynamicImports();

// document.addEventListener("turbolinks:load", function() {
//   // dynamicImports();
// })
