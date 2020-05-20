//Сворачивание навигации по клику вне меню
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
// Алерт при выборе проблемы из выпадающего списка
//function problem() {
//  alert('Вы выбрали  ' + options[sel].text);
//}

// Алерт на заполнение имени
function validateForm() {
    var sel = document.getElementById('problem').selectedIndex;
    var problemOptions= document.getElementById('problem').options;
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Нужно ввести имя!");
        return false;
    }
    else alert("Ваше имя " + x + ' Вы выбрали  ' + problemOptions[sel].text);
}



//неудачная попытка печати в файл
//function writeToFile(options){
//    var fso = new ActiveXObject("Scripting.FileSystemObject");
  //  var fh = fso.OpenTextFile("orderform.txt", 8, false, 0);
    //fh.WriteLine( options[sel].text);
    //fh.Close();
//}

//var submit = document.getElementById("send");

//submit.onclick = function () {
  //  var problem = document.getElementById("problem").value;
    //writeToFile(options[sel].text);//
