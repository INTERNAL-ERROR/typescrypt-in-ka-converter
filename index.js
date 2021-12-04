
var tsEls = document.querySelectorAll(".typescript");
var tsCode;
for(var cts = 0; cts < tsEls.length; cts++){
    tsEls[c].style.display = "none";
    tsCode = tsEls[cts].textContent;
    //alert(tsCode)
    var jsCode = window.ts.transpile(tsCode);
    //alert(jsCode)
    var tsScript = document.createElement("script");
    tsScript.innerHTML = jsCode;
    document.head.append(tsScript)
}
