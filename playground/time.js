var moment = require('moment');

//
// var date = moment()
// date.add(100, 'year').subtract(9, 'months')
//



var createdAt = 1234;
// var now = new Date().getTime()
var now = moment().valueOf();
console.log(now)
var date = moment(now);



console.log(date.format("h:mm a"))
