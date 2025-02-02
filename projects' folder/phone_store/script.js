let box = document.querySelector('.product-grid')
document.addEventListener('scroll', () => {
        let x = window.scrollY;
        console.log(x);
        if(x>450){
            let y = x/20;
            let op = 0;
            y = y*2
            if(op<1-y){
                op = 1-y;
            }
            box.style = `
                opacity: ${op};
            `
        }
        else{
            box.style = `
                opacity: 1;
            `
        }
        
})
