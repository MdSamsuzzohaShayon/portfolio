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












/*

//SCROLLING TEXT ANIMATION

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

let btnStart = document.querySelector('.start');
btnStart.addEventListener('click', function () {
    smoothScroll('.technologies', 1000);
});
let btn2 = document.querySelector('.portfolio');
btn2.addEventListener('click', function () {
    smoothScroll('.portfolios', 2000);
});


let btn3 = document.querySelector('.service');
btn3.addEventListener('click', function () {
    smoothScroll('.services', 2500);
});


let btn4 = document.querySelector('.youtube');
btn4.addEventListener('click', function () {
    smoothScroll('#youtube', 3000);
});
let btn5 = document.querySelector('.about');
btn5.addEventListener('click', function () {
    smoothScroll('#about', 3300);
});
let btn6 = document.querySelector('.contract');
btn6.addEventListener('click', function () {
    smoothScroll('#contract', 3500);
});




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


