console.log('Loaded!');
var element=document.getElementById('main-text');
element;
element.innerHTML='new value';

var img=document.getElementById('img');
img.onClick=function()
{
    img.style.marginLeft='100px';
};