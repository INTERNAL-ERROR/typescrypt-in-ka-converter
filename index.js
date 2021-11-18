
var tsEls = document.querySelectorAll(".typescript");
var tsCode;
for(var c = 0; c < tsEls.length; c++/*Do you understand this easter egg? Tell me if you know in the T&T lol*/){
    tsEls[c].style.display = "none";
    tsCode = tsEls[c].textContent;
    //alert(tsCode)
    var jsCode = window.ts.transpile(tsCode);
    //alert(jsCode)
    var tsScript = document.createElement("script");
    tsScript.innerHTML = jsCode;
    document.head.append(tsScript)
}
