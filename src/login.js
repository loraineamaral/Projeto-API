$(document).ready(function () {

  $(document).keypress(function (e) {
    if (e.which == 13) {
        $("#sign-in-btn").trigger('click');
    }
});

$('#sign-in-btn').click(function (event) {
    event.preventDefault();

    let email = $('#email-input').val();
    let password = $('#password-input').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (response) {
            window.location = 'home.html'
        })

        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert("Ocorreu um erro, tente novamente");
        });
});

  $("#login-gmail").click(function (event) {
      event.preventDefault();
      let provider = new firebase.auth.GoogleAuthProvider();
      signIn(provider);
  });

  $("#login-facebook").click(function (event) {
      event.preventDefault();
      let provider = new firebase.auth.FacebookAuthProvider();
      signIn(provider);
  });

  function signIn(provider) {
      firebase.auth().signInWithRedirect(provider)
          .then(response => {
              window.location = 'home.html' 
              })

          .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              let email = error.email;
              let credential = error.credential;
              console.log(errorCode)
              console.log(errorMessage)
              console.log(email)
              console.log(credential)
              alert(errorCode, errorMessage, email, credential)
          });
  }
});