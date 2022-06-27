const b = document.querySelector('button.button--no');
b.addEventListener('onclick', onclick);

b.onclick = function(){
    const i=Math.floor(Math.random() * 500)+1;
    const j=Math.floor(Math.random() * 500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
}

const b2 = document.querySelector('button.button--yes');
b2.addEventListener('onclick', onclick);

b2.onclick = function(){
    var text = 'YIEE Sabi ko na nga ba eh crush mo eh' +
    '<br> ako tayo na po heheheeh lab you mwa mwa' +
    '<br> labyuu' 
    document.querySelector('p').innerHTML=text;
} 