
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

    let option  = new Option(el, el); //вот тут вебшторм ругался что нельзя типу string присвоить элемент типа unknown

    //добавить опицю в sub menu

    sub.appendChild(option);

});

});