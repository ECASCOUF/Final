window.onload = function() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;
document.getElementById('date').innerHTML = today;
document.getElementById('showName').style.display="block";
};

function choose() {
  var userinput = document.getElementById('nameInput').value;
document.getElementById('username').innerHTML = userinput;
document.frm.nameDisplay.value = userinput;


};
