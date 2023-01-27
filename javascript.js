//navbar
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".nobarkuy-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".nobarkuy-navbar").css("background" , "transparent");  	
        }
    });

  })

//posisi card
function position(id){
  let card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

//button submit contact us
function changeButtonDesc() {
  let btnElement = document.getElementsByClassName("btn btn-primary");
  btnElement.innerHTML  = (btnElement.innerHTML == "Submit") ? "Send" : "Submit";
}