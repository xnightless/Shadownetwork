var doc = document.getElementById("iframe").contentWindow; 
  
var script=doc.document.createElement("script");
script.src=window.location.origin+"/nowgg/bypass.js";
doc.document.body.appendChild(script);
