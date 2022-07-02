var nodemailer = require("nodemailer");

const sendMail = (phone, email, text, name, inquiry, callback) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bougainvillea.interior@gmail.com",
      pass: "verzeo123",
    },
  });
  var addString = '----------------Details of Customer---------------\n\n' + 
                  'Name: ' + name + '\n' + 
                  'Phone: ' + phone + '\n' + 
                  'Address: ' + text + '\n' +
                  'Query: ' + inquiry + '\n\n' + 
                  '--------------------------------------------------\n\n' + 
                  'Dear Sir/Ma\'am,\n\n' +
                  'Thank you for contacting Bougainvillea Interiors. We will shortly get in touch with you regarding the price ranges available for your needs in your region.\n' + 
                  'Please feel free to contact us at bougainvillea.interior@gmail.com for any further queries.\n'+
                  'Sincerely,\n' + 
                  'Bougainvillea Interiors\n\n\n';
  
  text = "";
  text += addString;
  var subject = "Welcome to bougainvillea";
  var mailOptions = {
    from: "bougainvillea.interior@gmail.com",
    to: email,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = sendMail;
