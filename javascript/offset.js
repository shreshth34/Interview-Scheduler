


for (var i = 1; i <= 24; i++) {

  var dat = new Date(`February 1, 2020 ${i - 1}:00:00`);
  document.getElementById("demo" + `${i}`).innerHTML = dat;

}

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


document.getElementById("submit1").onclick = function () {
  var inputElements = document.getElementsByClassName('messageCheckbox');
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      candidatet.push( inputElements[i].value-1+"-"+inputElements[i].value );  
    }
  }

  var inputElementValues = document.getElementsByClassName('messageCheckbox')
    for(let l = 0 ; inputElementValues[l] ; ++l){
      if(inputElementValues[l].checked){
          datet.push(inputElementValues[l].value);
      }
    }
}


document.getElementById('btn-2').onclick = () => {

if(candidatet == false){
alert('select a time first');
} else {
const printTime = []
datet.forEach((e)=>{

  var dat = new Date(`February 1, 2020 ${e - 1}:00:00`);
  var pret = dat.toUTCString();
  printTime.push(pret)
  
})
  
  document.getElementById('finalK').innerHTML = printTime.join("<br>") ;




} 
}   







  
