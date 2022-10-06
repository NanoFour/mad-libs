var buttonSubmit = function(){
    var pluralNoun = document.getElementById("pluralNoun").value + "";
    var noun1 = document.getElementById("noun1").value + "";
    var noun2 = document.getElementById("noun2").value + "";
    var song = document.getElementById("song").value + "";
    var verb = document.getElementById("verb").value + "";
    var content = "<p>Learning to drive is a tricky process</p>";
    content += "<p>1. Keep two " + pluralNoun.toLocaleLowerCase() + " on the steering wheel at all times.</p>";
    content += "<p>2. Step on the " + noun1.toLocaleLowerCase() + " to speed up and " + noun2.toLocaleLowerCase() + " to slow down.</p>";
    content += "<p>3. " + song.toLocaleLowerCase() + " is always playing on the radio.</p>";
    content += "<p>4. Honk when you see " + verb.toLocaleLowerCase() + " on a street sign.</p>";
    document.getElementById("Output").innerHTML = content;
    document.getElementById("GoAgain").style.visibility = "visible";
}
var buttonGoAgain = function(){
    document.getElementById("pluralNoun").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("song").value = "";
    document.getElementById("verb").value = "";
    document.getElementById("Output").innerHTML = "";
    document.getElementById("GoAgain").style.visibility = "hidden";
}
window.onload = function(){
    document.getElementById("GoAgain").style.visibility = "hidden";
    document.getElementById("Submit").addEventListener("click", buttonSubmit);
    document.getElementById("GoAgain").addEventListener("click", buttonGoAgain);
}