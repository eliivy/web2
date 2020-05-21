//jQuery сворачивание бургера навигации по клику вне меню
$(window).click(function() {
    var _open = $(".navbar-collapse").hasClass("show");
    if (_open === true ) {
        $(".navbar-toggler").click();
    }
});

// Алерт при выборе проблемы из выпадающего списка
//function problem() {
// var sel = document.getElementById('problem').selectedIndex;
//     var problemOptions= document.getElementById('problem').options;
//  alert('Вы выбрали  ' + options[sel].text);
//else alert("Ваше имя " + x + ' Вы выбрали  ' + problemOptions[sel].text);
//}

// Алерт на заполнение имени
function validateForm() {
    var x = document.forms["myForm"]["validationCustom01"].value;
    if (x == "") {
        alert("Нужно ввести имя!");
        return false;
    }
}
// связанные списки
var cars={
    fridge:['Beko', 'Bosch' , 'Haier'],
    washingMachine:['LG', 'Samsung', 'Indesit'],
    dishwasher:['Ariston', 'Electrolux' , 'Gorenje']
};

// получаем главное и саб меню
var main= document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

// Запускаем событие когда изменяется главное меню

main.addEventListener('change',function(){

// получаем выбранную опцию

    var selected_option = cars[this.value];

// убираем опции из саб меню

    while(sub.options.length > 0){

        sub.options.remove(0);

    }
//Конвертируем выбранный объект в массив и создаем опции для каждого элемента массива
// Используем конструктор опций который создаст html элемент с переданным value и innerText

    Array.from(selected_option).forEach(function(el){

        let option  = new Option(el, el);

        //добавить опицю в sub menu

        sub.appendChild(option);

    });

});

// сохранение формы в файл
let saveFile = () => {

    const name = document.getElementById('validationCustom01');
    const lastname = document.getElementById('validationCustom02');
    const phone = document.getElementById('validationCustom03');
    const orderArea = document.getElementById('area');
    const techType = document.getElementById('main_menu');
    const techModel = document.getElementById('sub_menu');

    let data =
        '\r Имя: ' + name.value + ' \r\n '+
        'Фамилия: ' +lastname.value + ' \r\n ' +
        'Телефон: ' + phone.value + ' \r\n ' +
        'Устройство: ' + techType.value + ' \r\n ' +
        'Модель: ' + techModel.value + ' \r\n ' +
        'Район: ' + orderArea.value;

    // конвертация текста в BLOB
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const fileName = 'Order Info.txt';	   // файл в который сохраняем

    let newLink = document.createElement("a"); //создаем элемент ссылки на скачивание
    newLink.download = fileName;

    newLink.href = window.webkitURL.createObjectURL(textToBLOB); //создаем локальный BLOB

    document.body.appendChild(newLink);

    newLink.click();
}

//   Подсвечивание полей формы, взяла на сайте бутстрапа
//  JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Выбираем все формы в котором мы хотим применить стиль валидации
        var forms = document.getElementsByClassName('needs-validation');
        // Проходимся по всем формам и предотвращаем их отправку
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


