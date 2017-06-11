(function () {
    var config = {
        apiKey: "AIzaSyAUB0d_CiOAspF1kuaajU8OhfM2DYqo3HQ",
        authDomain: "healthydesk-75f21.firebaseapp.com",
        databaseURL: "https://healthydesk-75f21.firebaseio.com",
        projectId: "healthydesk-75f21",
        storageBucket: "healthydesk-75f21.appspot.com",
        messagingSenderId: "770488580054"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    function writeUserData(data) {
        firebase.database().ref('request/').push({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }).then(function() {
            $('.js-place-order')[0].reset();
            $('.js-success').removeClass('hide');
        }).catch(function() {
            $('.js-error').removeClass('hide');
        });
    }

    $('.js-place-order').on('submit', function(e) {
        e.preventDefault();
        $('.js-success, .js-error').addClass('hide');
        var $form = $(e.currentTarget);
        var name = $form.find('[name=name]').val();
        var phone = $form.find('[name=phone]').val();
        var email = $form.find('[name=email]').val();
        var message = $form.find('[name=message]').val();
       
        writeUserData({name: name, email: email, phone: phone, message: message});
    });
})();