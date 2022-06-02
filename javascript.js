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
function cangebuttonvalue() {
    var button1 = document.getElementById("div3");
    button1.innerHTML = '<input type="button" value="Change" onclick="cangebuttonvalue()" >';
}
function changecolorwithclass() {
    var dd3 = document.getElementById("class1");
    dd3.className = "class2";
}