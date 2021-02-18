/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
ID="web:"+ document.URL.split('/').slice(-1)[0];
//TITLE="https://en.wikipedia.org/wiki/G/G/1_queue";
URL=document.URL;
TITLE=document.title;
var d = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
YEAR=d.getFullYear();
MONTH=months[d.getMonth()];
AUTHOR="<Find it>";
DATE=d.getDate()+". "+MONTH+"."+YEAR;
alert("@MISC{"+ID+",\n URL = {"+ URL +"},\n TITLE = {"+TITLE+"},\n year = {"+YEAR+"},\n month = {"+MONTH+"},\n author= {"+AUTHOR+"},\n note = {[accessed "+ DATE+"]},\n}");
