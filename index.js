
var tsEls = document.querySelectorAll(".typescript");
var tsCode;
for(var c123456789asdfghjkl = 0; c123456789asdfghjkl < tsEls.length; c123456789asdfghjkl++/*Do you understand this easter egg? Tell me if you know in the T&T lol*/){
    tsEls[c].style.display = "none";
    tsCode = tsEls[c].textContent;
    //alert(tsCode)
    var jsCode = window.ts.transpile(tsCode);
    //alert(jsCode)
    var tsScript = document.createElement("script");
    tsScript.innerHTML = jsCode;
    document.head.append(tsScript)
}
