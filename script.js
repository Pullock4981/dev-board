
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
    

// function for update date and time

let today = new Intl.DateTimeFormat("en-bd", {
    dateStyle: "full"
}).format(new Date());
 
document.getElementById("date").innerText = today;

let timeNow = new Intl.DateTimeFormat("en-bd", {
    timeStyle: "medium"
    
}).format(new Date());

// function for activity section


// function for clear history

document.getElementById("clearHistory").addEventListener("click", function () {
    document.getElementById("updated-task").innerHTML = "";
}
)