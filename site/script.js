const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearallBtn = document.querySelector(".footer button");
let userData = inputBox.value;
const pendingTasks = document.querySelector(".pendingTasks");
let getLocalStorage = null;

inputBox.onkeyup = () => {
    userData = inputBox.value;
    userData.trim() !=""? addBtn.classList.add("active") : addBtn.classList.remove("active")
}

const showTasks=()=> {
    getLocalStorage = localStorage.getItem("New Todo");
    getLocalStorage == null? listArr = [] : listArr = JSON.parse(getLocalStorage);
    listArr.length != 0? clearallBtn.classList.add("active") : clearallBtn.classList.remove("active");
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li >${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    })
    todoList.innerHTML = newLiTag;
    pendingTasks.innerHTML = ` ${listArr.length} `
}

showTasks();

addBtn.onclick = () => {
    alert(inputBox);
    getLocalStorage = localStorage.getItem("New Todo");
    getLocalStorage == null? listArr = [] : listArr = JSON.parse(getLocalStorage)
    listArr.push(userData);
    listArr.length != 0? clearallBtn.classList.add("active") : clearallBtn.classList.remove("active");
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    
    
    inputBox.value = "";
    userData="";
    userData.trim() !=""? addBtn.classList.add("active") : addBtn.classList.remove("active")

    
    showTasks();
}

const deleteTask=(index)=> {
    getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    userData.trim() !=""? addBtn.classList.add("active") : addBtn.classList.remove("active")
    listArr.length != 0? clearallBtn.classList.add("active") : clearallBtn.classList.remove("active");
    showTasks();
}

clearallBtn.onclick = () => {
    listArr=[];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

