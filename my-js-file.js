const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log("taskContainer");
const generateNewCards = (taskData) =>
  `
 <div class="col-sm-12 col-md-6 cl-lg-4" id=${taskData.id}>
    <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-regular fa-trash-can"></i></button>
    </div>
    <div class="card-body">
        <img class="card-img-top" src=${taskData.imageUrl} alt="...">
        <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    </div>
  </div>
  
  `

const loadInitialCardData = () => {
   //local Storage to get taasky card data
   const getCardData = localStorage.getItem("tasky");

   //convert to normal object
   const {cards} = JSON.parse(getCardData);
   
   //loop over those array of task object to create HTML card, inject it to DOM
   cards.map((cardObject) =>{
    taskContainer.insertAdjacentHTML("beforeend", generateNewCards(cardObject));

    //update our globalStore
    globalStore.push(cardObject);
  }
  )
};


const saveChanges = () => {
  const taskData = {
    id : `${Date.now()}`,
    imageUrl : document.getElementById("imageurl").value,
    taskTitle : document.getElementById("tasktitle").value,
    taskType : document.getElementById("tasktype").value,
    taskDescription : document.getElementById("taskdescription").value
  };

  taskContainer.insertAdjacentHTML("beforeend", generateNewCards(taskData));

  globalStore.push(taskData);
  localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};




//Issues

//Page refreshers causes the data to get deleted
//API -> Application Programming Interface
//Local storage - Accessing application via local storage


//Features - Delete, Edit, Open the card