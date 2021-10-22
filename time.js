// var countDownDate1 = new Date("Oct 23, 2021 06:25:35").getTime();
var countDownDate1 = new Date("Oct 23, 2021 06:25").getTime();
var countDownDate2 = new Date("oct 22, 2021 12:25").getTime();

var time1= document.getElementById("time1")
var time2= document.getElementById("time2")

function countdown(finish_date, timer){

    var x = setInterval(function() {

                    var now = new Date().getTime();

                    var distance = finish_date - now;

                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    timer.innerHTML = days + "<span>d</span> " + hours + "h " + minutes + "m ";


                    if (distance < 0) {
                    clearInterval(x);
                    timer.innerHTML = "Event Ended";
                    }
                    }, 500);
}

countdown(countDownDate1, time1)
countdown(countDownDate2, time2)
