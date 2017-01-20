// when app app is load
$('#app').load('home.html', function(){
  console.log('home');
}).hide().fadeIn();

// navigation function
var navigation = (function() {

  var nav = function () {

    $(document).on('click', '.navTo', function() {

      var page = $(this).data('page');

      $('#app').load(page, function(){

      })
      .hide()
      .fadeIn();
    });

  };

  return {
    page: nav()
  }

})();
