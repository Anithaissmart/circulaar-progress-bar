// document.write(external js is working)
let number =document.getElementById("number")
let counter = 0;
setInterval(() => {
    if (counter ==50){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%"
    }

},25);