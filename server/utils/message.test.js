var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () =>{
    var from = "dave";
    var longitude = 15;
    var latitude = 19;
    var url = "https://www.google.com/maps?q=19,15";
    var message = generateLocationMessage(from, latitude, longitude);

    //asertions
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  })
})
