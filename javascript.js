function dochange() {
    alert('click button js')
}
function choice() {
    let text;
    if (confirm("Press a button!") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }
function changecolor() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.className = "blueback";
    dd2.className = "orangeback";
}   
function changetext() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.innerText = "Alloha";
    dd2.innerText = "Chao";
}