var nameList = new Array("børge", "knud"); //our list starts with two names

/*
//The above is the same as:
var nameList = new Array(2);
nameList[0] = "børge";
nameList[1] = "knud";

*/
function showList()
{
    // starting with an empty result
    var result= "";

    //going through all indexes in the namelist
    for (nr in nameList)
    {
        result = result + "<li>" + nameList[nr] + "</li>";
    }

    //getting the html element with an id  "liste"
    var list = document.getElementById("list");
    //now changing the inner html of that element (i.e. the list)
    list.innerHTML = result;
}

function sortList()
{
    //sorting the list and then showing it
    nameList.sort();
    showList();
}
function sortListreverce()
{
    //sorting the list and then showing it
    nameList.reverse();
    showList();
}
var Myyear = document.getElementById("myyear").value;
function calculateYear(Myyear) { // so it only take birth year as an argument

    var currentYear = new Date().getFullYear();
    return currentYear - Myyear;

}

document.write('You age is ' + calculateYear(Myyear) + ' year old ')