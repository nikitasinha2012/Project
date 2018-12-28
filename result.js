var score_in=localStorage.getItem('percentage_in');
document.getElementById("in_score").innerHTML = localStorage.getItem("percentage_in");
console.log(score_in);
var score_out=localStorage.getItem('percentage_out');
document.getElementById("out_score").innerHTML = localStorage.getItem("percentage_out");
console.log(score_out);
var score_in1=localStorage.getItem('correct_in');
document.getElementById("in_score1").innerHTML=localStorage.getItem("correct_in");
console.log(score_in1);
var score_out1=localStorage.getItem('correct_out');
document.getElementById("out_score1").innerHTML=localStorage.getItem("correct_out");
console.log(score_out1);

if(score_in>score_out)
{
    document.getElementById("in_score").style.backgroundColor = '#66ff33';
}
else{
    document.getElementById("out_score").style.backgroundColor = '#66ff33';
}