// Description: This file contains the JavaScript code for the application.
//@author:  Preston Button
//@version: 1.0
//@date:    2023-01-05

"use strict";

// Global variables
//modal variables
const modal = document.querySelectorAll(".modal");
const addEventModal = document.getElementById("addEventModal");
const editEventModal = document.getElementById("editEventModal");
const deleteEventModal = document.getElementById("deleteEventModal");
const loginModal = document.getElementById("loginModal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".closeModalBtn");

//event operations variables
const editBtn = document.querySelectorAll(".editButton");
const deleteBtn = document.querySelectorAll(".deleteButton");
const eventDiv1 = document.querySelector(".eventDiv1");

//login variables
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

//admin button
const adminButton = document.getElementById("adminButton");

//add event button
const addEventBtn = document.getElementById("addEventButton");

//add new event variables
const addEventForm = document.getElementById("addForm");
const addEventTitle = document.getElementById("addTitle");
const addEventDate = document.getElementById("addDate");
const addEventTime = document.getElementById("addTime");
const addEventLocation = document.getElementById("addLocation");
const addEventDescription = document.getElementById("addDescription");

//edit event variables
const editEventForm = document.getElementById("editForm");
const editEventTitle = document.getElementById("editTitle");
const editEventDate = document.getElementById("editDate");
const editEventTime = document.getElementById("editTime");
const editEventLocation = document.getElementById("editLocation");
const editEventDescription = document.getElementById("editDescription");

const eventsContainer = document.getElementById("eventsContainer");
const eventDiv = document.createElement("div");

//admin mode this will be set to true when admin logs in
let adminMode = false;

//functions
//modal functions
const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

//openmodal function
const openModal = function (whichModal) {
  whichModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//open login modal
const openLoginModal = function () {
  loginModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//open add event modal
const openAddEventModal = function () {
  addEventModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//open edit event modal
const openEditEventModal = function () {
  editEventModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//open delete event modal
const openDeleteEventModal = function () {
  deleteEventModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Site Logic

//when admin button is clicked open login modal
adminButton.addEventListener("click", openLoginModal);

//when close modal button, escape key, or overlay is clicked close modal
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  for (let i = 0; i < modal.length; i++) {
    if (e.key === "Escape" && !modal[i].classList.contains("hidden"))
      closeModal();
  }
});

overlay.addEventListener("click", closeModal);

//add login logic

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (loginUsername.value === "a" && loginPassword.value === "a") {
    console.log("login successful");
    adminMode = true;
    console.log(adminMode);
    closeModal();
    loginForm.reset();
    adminMode = true;
    addEventBtn.classList.remove("hidden");
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].classList.remove("hidden");
    }
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].classList.remove("hidden");
    }
  } else {
    //TODO: add text to login modal to say invalid username or password
    console.log("login failed");
  }
});

//if edit button is clicked open edit modal
for (let i = 0; i < editBtn.length; i++) {
  console.log("Edit Button Clicked");
  editBtn[i].addEventListener("click", openEditEventModal);
}

//if delete button is clicked open delete modal
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", openDeleteEventModal);
}

//if add event button is clicked open add event modal
addEventBtn.addEventListener("click", openAddEventModal);

//when add event form is submitted, create another evenDiv and add it to the events container

addEventForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    eventTitle.value === "" ||
    eventDate.value === "" ||
    eventTime.value === "" ||
    eventLocation.value === "" ||
    eventDescription.value === ""
  ) {
    console.log("fill in all fields");
  } else {
    eventDiv.classList.add("eventDiv");
    eventDiv.innerHTML = `
            <h2>${eventTitle.value}</h2>
            <p>${eventDescription.value}</p>
            <p>${eventTime.value}</p>
            <p>${eventLocation.value}</p>
            <p>${eventDate.value}</p>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
    eventsContainer.appendChild(eventDiv);
    closeModal();
    addEventForm.reset();
  }
});

editEventForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    eventTitle.value === "" ||
    eventDate.value === "" ||
    eventTime.value === "" ||
    eventLocation.value === "" ||
    eventDescription.value === ""
  ) {
    console.log("fill in all fields");
  } else {
    eventDiv.classList.add("eventDiv");
    eventDiv.innerHTML = `
            <h2>${eventTitle.value}</h2>
            <p>${eventDescription.value}</p>
            <p>${eventTime.value}</p>
            <p>${eventLocation.value}</p>
            <p>${eventDate.value}</p>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
    eventsContainer.appendChild(eventDiv);
    closeModal();
    addEventForm.reset();
  }
});
