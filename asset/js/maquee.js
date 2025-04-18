document.addEventListener("DOMContentLoaded", (Event) => {

   let marquee = (selctor, speed) => {

    const container = document.querySelector(selctor);
    const list = container.children[0];

    let move = 0;

   
    
    
    setInterval( () => {
        list.style.marginLeft = `-${move}px`;

        if(move > list.clientWidth){
            move = 0;
        }

        move = move + speed;
    }, 0);
    

   }

   marquee(".marquee__container", 0.1);
});