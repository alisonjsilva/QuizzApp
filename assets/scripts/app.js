var actualPage;
var user = {};

// navigation function
var navigation = (function () {
    "use strict"

    // handler the click and call load
    var nav = function () {

        $(document).on('click', '.navTo', function () {

            var page = $(this).data('page');
            var _callback = $(this).data('callback');

            load(page, _callback);

        });

    };

    // call load function
    var load = function (page, callback) {

        $('#app').load(page, function () {

            actualPage = page;

            if (typeof callback === 'function') {
                callback();
            } else if (typeof callback === 'string') {

                var _function = window[callback];
                if (typeof _function === 'function') {
                    _function();

                }
            }

        })
        .hide()
        .fadeIn();
    };

    return {
        page: nav(),
        load: load
    }

})();

navigation.load('home.html', function () {

});

// homepage
function home() {
    console.log('this is home');
}

// pagina codigo
var codigo = function () {

    // detecting inserting code
    $(document).on('change paste keyup', '#insiraCodigo', function () {
        console.log($(this).val().length);
        if ($(this).val().length === 6) {
            validateCode($(this).val());
        }
    });

    console.log('this is codigo page');

};

// validate code inserted
var validateCode = function (_codigo) {

    var codigos = ['123456', '654321'];

    if (codigos.indexOf(_codigo) > -1) {
        console.log('código correcto');

        navigation.load('tipoProfissional.html', tipoProfissional);

    } else {
        console.log('código inválido');
    }
}

var tipoProfissional = function () {
    console.log('tipoProfissional');
    $('#tipoProfissional input').on('click', function () {

        var tipo = $(this).val();

        if (tipo == '0') {
            // médico          
            navigation.load('quiz.html', function () {
                quiz(questionsMedicos);
            });
        } else {
            // enfermeiro
            navigation.load('quiz.html', function () {
                quiz(questionsEnfermeiros);
            });
        }

    });
}

var formulario = function () {
    $('.btnSend').on('click', function () {
        if (validateForm()) {
            navigation.load('parabens.html', parabens);
        }

    });

    function validateForm() {
        var nome = $('input[name="nome"]').val();
        var camv = $('input[name="camv"]').val();
        var morada = $('input[name="morada"]').val();
        var email = $('input[name="email"]').val();
        var telefone = $('input[name="telefone"]').val();
        var nif = $('input[name="nif"]').val();

        if (nome === '' || camv === '' || morada === '' || email === '' || telefone === '' || nif === '') {
            $('#generalError').show();

            return false;

        } else {
            user.nome = nome;
            user.camv = camv;
            user.morada = morada;
            user.email = email;
            user.telefone = telefone;
            user.nif = nif;
            user.respostas = totalScore;
            user.time = totalTime;

            var dataUSer = JSON.stringify(user);
        }

        return true;
    }

    function ValidateEmail(email) {
        var x = String(email);
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            return false;
        }

        return true;
    }
}

var parabens = function () {
    $('#totalScore').text(totalScore);
    $('.crono').html('Crono ' + totalTime);

    $('.btnSend').on('click', function () {
        navigation.load('convite.html');
    });
}

var totalScore;
var totalTime;

function quiz(tipo) {
    console.log('jogo', arguments);
    // init game
    quizGame(tipo);
    $('.timer').stopwatch({ format: '{M}m{s.}s' }).stopwatch('start');
    //setTimeout(add, 1000);
}
