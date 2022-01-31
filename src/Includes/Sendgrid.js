const SendMail = (sgMail, jsonSection) => {
  sgMail.setApiKey(process.env.SENDGRID);

  (async () => {
    try {
      await sgMail.send(jsonSection);
    } catch (error) {
      console.log(error);

      if (error.response) {
        console.log(error.response.body);
      }
    }
  })();
};

exports.SendMail = SendMail;
