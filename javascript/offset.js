//to take value of time from the time slots
for (var i = 1; i <= 24; i++) {

  var dat = new Date(`February 3, 2020 ${i - 1}:00:00`) ;
  document.getElementById("demo" + `${i}`).innerHTML = dat;

}

//saving the selected time slots by the candidate
const candidatet = [];
var datet = [];
const getTime = [candidatet];

function getAllTimeSlots() {
  var result = [];
  for (var i = 0; i < 24; i = i + 1) {
    result.push(`${i}-${i + 1}`);
  }
  return result;
}

function interviewTime(getTime) {

  const daySlots = getAllTimeSlots();

  let temp = []; // take common values of candidate and recruiter

  for (const ist of getTime) {
    for (const time of ist) {
      for (let i = Number(time.split("-")[0]); i < Number(time.split("-")[1]); i++) {
        if (!temp.includes(val)) {
          temp.push(val);
    }
  }
}
}

  return daySlots.filter(time => !temp.includes(time));

}


//select the checked time slot by the candidate
document.getElementById("submit1").onclick = function () {
  var inputElements = document.getElementsByClassName('messageCheckbox');
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      candidatet.push( inputElements[i].value-1+"-"+inputElements[i].value );  
    }
  }

  //select the value of selected time slot by the candidate
  var inputElementValues = document.getElementsByClassName('messageCheckbox');
    for(let l = 0 ; inputElementValues[l] ; ++l){
      if(inputElementValues[l].checked){
          datet.push(inputElementValues[l].value);
      }
    }
}

let printTime = [];
document.getElementById('btn-2').onclick = () => {

if(candidatet == false){
alert('select a time first');
} else {


datet.forEach((e)=>{

  var dat = new Date(`February 3, 2020 ${e - 1}:00:00`);
  printTime.push(dat.toUTCString());

})
  
  document.getElementById('finalK').innerHTML = printTime.join("<br>") ;
 
} 
}   

//convert time to local time of recruiter and print on screen
changedTime = []

document.getElementById("btn-3").onclick = () => {    

var x = document.getElementById("pot").value;
console.log(x);

let offset = x;

printTime.forEach((e)=>{

    let pt = Date.parse(e);
    let UTC = pt + (3600000*offset);
    let nd = new Date(UTC);
    let put = nd.toUTCString();
  
    changedTime.push(put);

  })

  document.getElementById('finalK').innerHTML = changedTime.join("<br>");
  
}
