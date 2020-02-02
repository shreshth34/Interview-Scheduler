let e = "Sun, 02 Feb 2020 07:00:00 GMT";

cityT = e + (3600000*+8);

nd = new Date(cityT);

console.log("Indonesia time is " + nd.toLocaleString() + "<br>"); 
