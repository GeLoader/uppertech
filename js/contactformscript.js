function SendMail() {
    (function() {
        emailjs.init("");
    })

 
    var params = {
        name: document.querySelector("#Contact-5-Name-2").value,
        email: document.querySelector("#Contact-5-Email-2").value,
        subject: 'Contact Request Submitted by ' + document.querySelector("#Contact-5-Name-2").value,
        message: document.querySelector("#Contact-5-Message-2").value,
 
    };
 
      if (document.querySelector("#Contact-5-Name-2").value && document.querySelector("#Contact-5-Email-2").value && document.querySelector("#Contact-5-Message-2").value) {
     
    emailjs.send('service_hf0p3yc', 'template_8k1t64i', params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
          alert("Your contact request has been submitted successfully. Thank you!");
          window.location.reload();
          // document.querySelector("#Contact-5-Name-2").value = '';
          // document.querySelector("#Contact-5-Email-2").value = '';
          // document.querySelector("#Contact-5-Message-2").value = '';
        }, function(error) {
           console.log('FAILED...', error);
           
        });
      } else {
        alert("All fields required!");
      }
}
