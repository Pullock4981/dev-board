
// set alert for complete btn

function alertBtn(){
    alert("Board updated Successfully");
}

// function for changing theme color of the website

const changeThemeColorBtn = document.getElementById("changeThemeColorBtn");
let randomNumber = () => {
    return Math.floor(Math.random() * 256); 
}

let changeColor = () => {
    let color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = color;
}
changeThemeColorBtn.addEventListener("click", changeColor);
    

