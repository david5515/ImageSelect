ImageSelect
===========

jquery plugin that allow add images in html select box

ImageSelect - это JQuery плагин, который позволяет кастомизировать html select. 
Есть возможность добавления картинок и эффекта при наведении.

Использование:

    <select id="category">
        <option value="5" icon="/icons/etc.png" iconhover="/iconsHover/etc.png">Прочее</option>
        <option value="1" icon="/icons/call.png" iconhover="/iconsHover/call.png">Звонок</option>
        <option value="2" icon="/icons/mail.png" iconhover="/iconsHover/mail.png">Письмо</option>
        <option value="3" icon="/icons/meet.png" iconhover="/iconsHover/meet.png">Встреча</option>
        <option value="4" icon="/icons/travel.png" iconhover="/iconsHover/travel.png">Поездка</option>
    </select>
    

Аттрибут icon определяет картинку option, а iconhover картинку при наведении.
    
        
Инициализация:
    
    $('#category').ImageSelect({ 'width': '194' });
    
Методы:
    
"getVal" Получает текущее значение:

    $('#category').ImageSelect('getVal');
    
"setVal" Задает значение:

    $('#category').ImageSelect('setVal',3);
