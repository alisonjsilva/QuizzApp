var actualPage;

// navigation function
var navigation = (function() {
  "use strict"

  // handler the click and call load
  var nav = function () {

    $(document).on('click', '.navTo', function() {

      var page = $(this).data('page');
      var _callback = $(this).data('callback');

      load(page, _callback);

    });

  };

  // call load function
  var load = function (page, callback){
    $('#app').load(page, function(){

      actualPage = page;

      if(typeof callback === 'function'){
        callback();
      } else if (typeof callback === 'string') {

        var _function = window[callback];
        if(typeof _function === 'function'){
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
    if($(this).val().length === 6){
      validateCode($(this).val());
    }
  });

  console.log('this is codigo page');

};

// validate code inserted
var validateCode = function (_codigo) {

  var codigos = ['123456', '654321'];

  if(codigos.indexOf(_codigo) > -1){
    console.log('código correcto');

    navigation.load('tipoProfissional.html', tipoProfissional);

  } else {
    console.log('código inválido');
  }
}

var tipoProfissional = function () {
  console.log('tipoProfissional');
  $('#tipoProfissional input').on('click', function () {
    // vavigate to quiz page
    navigation.load('quiz.html', quiz);
  });
}

var totalScore;

function quiz() {
  console.log('jogo');
  // init game
  quizGame();
}
