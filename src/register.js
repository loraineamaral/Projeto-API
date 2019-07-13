$(document).ready(function () {

    $('#sign-up-btn').click(function (event) {
        event.preventDefault();

        let email = $('#email-input-up').val();
        let password = $('#password-input-up').val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                window.location = 'home.html';
            })

            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorCode + errorMessage);
            })
    });


    $('#logout-btn').click(function () {
        event.preventDefault();
        firebase.auth().signOut().then(function () {
            window.location = 'login.html'
        }).catch(function (error) {
            alert(error)
        });
    })

});