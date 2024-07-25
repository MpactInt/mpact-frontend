
  $(document).ready(function () {

        $('img').attr('onerror','this.src="../assets/images/avtar-male.svg"');
        console.log('00');
  });
  $(".password-eye").click(function(){
    $('.password-input').removeClass('password-input');
    $(this).parent().addClass('password-input');
    var InPuT = $('.password-input input'),
        InPuTType = InPuT.attr('type');
      // alert(InPuTType);
      if (InPuTType == "password") {

        $('.showpassword').attr('type','password').removeClass('showpassword');
        InPuT.attr('type','text').addClass('showpassword');
//        console.log('if');
      }
      else{
//        console.log('else');
        InPuT.attr('type','password').removeClass('showpassword');
      }
 });

  // $(".time-picker").timepicki();

  
$('.datepicker').daterangepicker({
    singleDatePicker: true,
      showDropdowns: true,
    
        opens: 'left',
      locale: {
//      format: 'DD/MMM/YY'
           format: 'MM/DD/YY'
    }
});

$('.daterange').daterangepicker({
    showDropdowns: true,
    showISOWeekNumbers: false,
    opens: 'left',
     // autoUpdateInput: false,
    locale: {
     format: 'MM/DD/YY'
  }
});




//Live alert Demo

const alertPlaceholder = $('main ');

const alert = (message, type) => {
  $(".toasts-alert").remove();
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="toasts-alert"><div id="liveAlert" class="live-alert"><div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div class="alert-content"><i class="icon-check-fill"></i> ${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div></div></div>'
  
  ].join('')

  alertPlaceholder.prepend(wrapper)

  setTimeout(function () {
        // $(".toasts-alert").remove();
    }, 5000);

}



const alertTrigger = document.getElementById('UpdateCoachBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('You have successfully assigned a new coach.', 'success')
    // success, warning, danger, primary
  })
}





$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});



setTimeout(function(){

  StopLoader()

}, 2000);

function StopLoader(){
  $('.spinner-container').addClass('d-none'); 
  $('body').removeClass('overflow-hidden'); 
}

function DataLoaderStart(){
  $('.data-loader').removeClass('d-none'); 
  $('body').addClass('overflow-hidden'); 
}

function PreLoaderStart(){
  $('.preloader').removeClass('d-none'); 
  $('body').addClass('overflow-hidden'); 
}



