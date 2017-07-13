
var functions = require('firebase-functions');
const TOKEN = functions.config().sendgrid.token;
var sendGrid = require('sendgrid')(TOKEN);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


function parseBody() {
    var helper = require('sendgrid').mail;
    const FROM_EMAIL = "hello@prodesk.life";
    
    var fromEmail = new helper.Email(FROM_EMAIL);
    var toEmail = new helper.Email('test@example.com');
    var subject = 'Thank you';
    var content = new helper.Content('text/html', 'Thank you for your interest');

    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return mail.toJSON();
}

var request = sendGrid.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: parseBody()
});

sendGrid.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});