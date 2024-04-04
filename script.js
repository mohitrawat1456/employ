loader();

// console.log(inputItems)

function loader() {
  let root = document.querySelector("#root");
  addingh3();
  inputformation();
  addingEmployeebutton();
  messageShowsToUser();
  resultdiv();
}
function addingh3() {
  const creatingh3 = document.createElement("h3");
  creatingh3.setAttribute("id", "myh3Id");
  creatingh3.innerText = "New Employees";
  root.append(creatingh3);
}
function inputformation() {
  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "inputDiv");
  inputItems.forEach((inputToUser) => {
    // console.log(inputToUser);
    inputDiv.innerHTML += `<div class ="ourInputs"><label for="name"> ${inputToUser.title}</label><br>
    <input type="text" name="name" class = "inputByuser" placeholder="${inputToUser.placeholder}"></div>`;
  });
  root.append(inputDiv);
}

function addingEmployeebutton() {
  const creatingAddingemployeebutton = document.createElement("button");
  creatingAddingemployeebutton.innerText = "Add Employee";
  creatingAddingemployeebutton.setAttribute("id", "btnadd");
  creatingAddingemployeebutton.setAttribute("class", "btn btn-primary");
  root.append(creatingAddingemployeebutton);
}
function messageShowsToUser() {
  const resultshowingdiv = document.createElement("div");
  resultshowingdiv.setAttribute("class", "message");
  resultshowingdiv.innerText = "";
  root.append(resultshowingdiv);
}

function resultdiv() {
  const resultshowingdiv = document.createElement("div");
  const headingh5 = document.createElement("h5");
  headingh5.setAttribute("id", "headingh5");
  resultshowingdiv.setAttribute("class", "result");
  // resultshowingdiv.innerText ="a"
  headingh5.innerText = `Added Employees`;
  root.append(headingh5);
  root.append(resultshowingdiv);
}

let btnclickforadd = document.querySelector("#btnadd");
let i = 0;
btnclickforadd.addEventListener("click", () => {

  let resultdive = document.querySelector(".result");
  let message = document.querySelector(".message");

  let inputByuser = document.querySelectorAll(".inputByuser");
  inputByuser.forEach((input) => {
    // console.log(input.value);
  });
  if (
    inputByuser[0].value == "" ||
    inputByuser[1].value == "" ||
    inputByuser[2].value == ""
  ) {
    message.innerText = `please make sure all the fiels fill before adding`;
  } else {
    i++;
    message.innerText = `Success : Employee added`;
    resultdive.innerHTML += `<div class="liofEmployee" ><div class = "listOfEmployees" id="span0">
    <span>${i}.</span>
    <span>Name : ${inputByuser[0].value}</span>
    <span>Profession : ${inputByuser[1].value}</span>
    <span>Age:${inputByuser[2].value}</span>
    </div> 
    <button class = "btn btn-light my-btn-class">Delete Employee</button>
    </div>`;
    inputByuser[0].value = "" ;
    inputByuser[1].value = "" ;
    inputByuser[2].value = "" ;
  }
  // console.log(i);
});