// Open the folder
function openFolder() {
    document.getElementById("iphone16-folder").style.display = "flex";
}

// Close the folder
function closeFolder() {
    document.getElementById("iphone16-folder").style.display = "none";
}


let first = document.querySelector('.categories')
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
            first.style = `
                opacity: ${op};
            `
        }
        else{
            first.style = `
                opacity: 1;
            `
        }
        
})
