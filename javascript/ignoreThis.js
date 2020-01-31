document.getElementById('btn1').onclick = function () {
    var city1 = document.getElementById('time2').value;
    var offset1 = document.getElementById('time1').value;
  
    document.getElementById('div1').innerHTML = calcTime(city1, offset1);
  
    //function for offeset and city
    function calcTime(city, offset) {
  
      d = new Date();
  
      utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  
      nd = new Date(utc + (3600000 * offset));
  
      return "The local time in " + city + " is " + nd.toLocaleString();
  
    }
  }


