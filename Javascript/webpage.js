var Pastdate = "31-10-2019";

document.write("When was this website created " + Pastdate);

var d = new Date();

var Weekdays = new Array("Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var year = new Date().getFullYear();
var month = new Date().getMonth();
var Today = new Date().getDate();


document.write("<br/><br/><strong>Days in a week</strong><br><br>", Weekdays[0], "<br/>", Weekdays[1], "<br/>", Weekdays[2], "<br/>",
    Weekdays[3], "<br/>", Weekdays[4], "<br/>", Weekdays[5], "<br/>", Weekdays[6])


document.getElementById("today").innerHTML = Weekdays[d.getDay()];


document.write("<br><br> The date is the: ",Today, "- ", month, "- ", year);


var Timenow = Date(Date.now());
a = Timenow.toString();
document.write("<br><br> Current time is: " +  a);



var date1 = new Date("10/31/2019");
var date2 = new Date(Date.now());

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);



//To display the final no. of days (result)
document.write("<br><br> Total number of days between dates: "+ Difference_In_Days);




//var random = math.floor(math.random()* 11);
var random = 4;
var guess = 1;

function thenumber() {

    var num = document.getElementById("number").value;
  //  alert("does it work");
    if (num == random) {
        document.write("Good Work" + "The number was " + random);
    }
    else if(num > random) /* if guessed number is greater
                   than actual number*/
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {

       document.write("Try again!! ");
    }
}


function guesstext() {
    var sentence = "Yellow";
   // var sentence2 = "Yellow";


   var last =  sentence.charAt(5);
    var  first = sentence.charAt(0);
   // document.write("First character is " + first + "and the last is " + last );
    document.getElementById("textword").innerHTML = first + last;


}
