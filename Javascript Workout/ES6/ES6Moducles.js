// ES6 modules = an external file that contains reusable code
// that can be imported into other javascript files.
// write reusalble code for many different apps/
// can contain variables, classes, function and more
// introduced as part of ECMAScript 2015 update
// should create seperate js file
// export here
import {PI, getCircumference, getArea, getVolume} from './ES6/mathUtil.js';
console.log(PI);
const getCircumference = getCircumference(10);