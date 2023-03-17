let listElements = document.querySelectorAll('#ubicaciones .list-button');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

         let height = 0;
         let menu = listElement.nextElementSibling;
         console.log(menu.clientHeight)
         if(menu.clientHeight == "0"){
             height=menu.scrollHeight;
         }

         menu.style.height = `${height}px`;

    })
});


let listElements2 = document.querySelectorAll('#carta .item-button');

listElements2.forEach(listElement2 => {
    listElement2.addEventListener('click', ()=>{

        listElement2.classList.toggle('disp');

        let height2 = 0;
        let menu2 = listElement2.nextElementSibling;

        if(menu2.clientHeight == "0"){
            height2=menu2.scrollHeight;
        }
        let elem = document.getElementById('carta').style.height;

        menu2.style.height = `${height2}px`;
        
    })
});