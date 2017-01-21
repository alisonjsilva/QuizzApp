

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

function home() {
  console.log('this is home');
}

function codigo() {
  console.log('this is codigo page');
}
