// convertion functions
function innerTextToNumberById (Id) {
    newValue = parseInt(document.getElementById(Id).innerText);
    return newValue;
}
function valueToNumberById (Id) {
    return parseInt(document.getElementById(Id).value);
}

// activity functions
let taskTitle = document.getElementsByClassName("task-title")
const divHistory = document.getElementById("activity-container");
function activity (indexOfCard) {
    
    const divUpdate = document.createElement("div");
       
    divUpdate.innerHTML = `
            <hr class="border-dashed border-1 border-gray-300 mb-5">
            <div class="card bg-[#F4F7FF] px-8 py-5 m-3">
                <p>
                    You have complited the task <span class="font-bold">${
                        taskTitle[indexOfCard].innerText}
                    </span> at <span class="font-bold">${new Date()}}</span> 
                </p>
            </div>
        `
    divHistory.appendChild(divUpdate)
    return
}


// js for alert

// task done
let taskDone = 0;

// task left
let taskLeft = document.getElementsByClassName("task").length;
document.getElementById("task-left").innerText = taskLeft;

// task title

console.log(taskTitle)

// button alert
for (let i = 0; i < document.getElementsByClassName("btn-alert").length; i++) {
    document.getElementsByClassName("btn-alert")[i].addEventListener("click", function () {
        alert("Board Updated Successfully");
        // task done
        taskDone = innerTextToNumberById("task-done") + 1;
        document.getElementById("task-done").innerText = taskDone;
        // task left
        taskLeft = taskLeft - 1;
        console.log(taskLeft);
        document.getElementById("task-left").innerText = taskLeft;
        this.disabled = true;
        // task history
        activity (i)
        // all tasks completed
        if (taskLeft === 0) {
            alert("You have completed all the tasks");
        }
    });
}

// js for clean history

document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("activity-container").innerHTML = "";
}
)

const changeThemeColorBtn = document.getElementById("changeThemeColorBtn");
let randomNumber = () => {
    return Math.floor(Math.random() * 256); 
}

let changeColor = () => {
    let color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = color;
}
changeThemeColorBtn.addEventListener("click", changeColor);


// changing current time

let today = new Intl.DateTimeFormat("en-bd", {
    dateStyle: "full"
}).format(new Date());
 
document.getElementById("time-now").innerText = today;

let timeNow = new Intl.DateTimeFormat("en-bd", {
    timeStyle: "medium"
}).format(new Date());



