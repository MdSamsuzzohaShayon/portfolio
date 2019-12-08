$(function(){
	$("#watchButton").click(function(){
		$(".ui.modal").modal('show');
	});
	$(".ui.modal").modal({
		closable: true
	});
});





// PROGRESS BAR 
$('#pro1').progress();
$('#pro2').progress();
$('#pro3').progress();
$('#pro4').progress();
$('#pro5').progress();
$('#pro6').progress();
$('#pro7').progress();
$('#pro8').progress();
$('#pro9').progress();
$('#pro10').progress();






// TAB FOR RECENT PROJECT
$('.tabular.menu .item').tab();
// $('.paths.example .menu .item')
//   .tab({
//     context: '.paths.example'
//   })
// ;





// NAVIGATION MENU BEGAIN
const menu = document.getElementById('menu');
const ul = menu.querySelectorAll('ul');
const ulid = document.getElementById('ulid');
const li = menu.querySelectorAll('li');
const icon = document.getElementById('icon');
console.log(li);



if (window.innerWidth <= 768) {
    icon.addEventListener('click', e => {
        if(icon.textContent == "MENU"){
            console.log('menu button is working');
            ulid.style.display = 'block';
            icon.textContent = 'CLOSE';
            stylingElements();
            isOpen = false;
        }else{
            console.log('close button is working');
            icon.textContent = 'MENU'; 
            menu.style.height = '72px';
            ulid.style.display = 'none';
        }
    });





    function stylingElements() {
        menu.style.height = '1024px';
        ul.forEach(element => {
            element.style.textAlign = 'left';
            element.style.height = '80%';
            element.style.fontSize = '1rem';
            element.style.background = 'white';
        });
        li.forEach(element => {
            element.style.display = 'block';
            element.style.textAlign = 'left';
            element.style.margin = '10px 0 0 15px';

        });
    }


}
// NAVIGATION MENU ENDS











//SCROLLING TEXT ANIMATION BEGAIN

function smoothScroll(section, duration) {
    let target = document.querySelector(section);
    let targetPosition = target.getBoundingClientRect().top;
    let positionY = window.pageYOffset;
    let distance = targetPosition - positionY;
    let startTime = null;
    // console.log('Position Y: '+ positionY);
    // console.log('Start Position: '+ positionY);
    // console.log('Target Position: '+targetPosition);
    // console.log(`Distance: ${targetPosition-positionY}`);
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        console.log('Current time : ', startTime);

        let timeElapsed = currentTime - startTime;
        console.log('elapsed time : ', timeElapsed);
        let run = ease(timeElapsed, positionY, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    //http://gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }



    requestAnimationFrame(animation);

}

let btn1 = document.querySelector('.technology');
btn1.addEventListener('click', function () {
    smoothScroll('.technologies', 1000);
});

// let btnStart = document.querySelector('.start');
// btnStart.addEventListener('click', function () {
//     smoothScroll('.technologies', 1000);
// });
let btn2 = document.querySelector('.project');
btn2.addEventListener('click', function () {
    smoothScroll('.projects', 2000);
});


let btn3 = document.querySelector('.utube');
btn3.addEventListener('click', function () {
    smoothScroll('.youtube', 2500);
});


let btn4 = document.querySelector('.about');
btn4.addEventListener('click', function () {
    smoothScroll('#about', 3000);
});
let btn5 = document.querySelector('.contact');
btn5.addEventListener('click', function () {
    smoothScroll('#contact', 3300);
});
let btn6 = document.querySelector('.review');
btn6.addEventListener('click', function () {
    smoothScroll('#review', 3500);
});
//SCROLLING TEXT ANIMATION ENDS





/*
// STICKY ANIMATED NAVBAR BEGAIN
const sticky = document.querySelector('.sticky');

if(window.innerWidth >= 1024){
    if (sticky.style.position !== 'sticky') {
        let stickyTop = sticky.offsetTop;
      
        document.addEventListener('scroll', function () {
          window.scrollY >= stickyTop ?
            sticky.classList.add('fixed') :
            sticky.classList.remove('fixed');
        });
      }
}else{
    console.log("Window inner width: "+ window.innerWidth);
}


// STICKY ANIMATED NAVBAR ENDS
*/













// SHRINK NAVBAR ON SCROLL
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "30px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }


