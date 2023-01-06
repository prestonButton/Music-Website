// Description: This file contains the JavaScript code for the application.
//@author:  Preston Button
//@version: 1.0
//@date:    2023-01-05

"use strict";

/*************************************************************************** */

// Global variables
//navbar variables
const adminButton = document.getElementById("adminButton");
const addEventButton = document.getElementById("addEventButton");

//events container variables
const eventsContainer = document.getElementById("eventsContainer");
const eventDiv = document.getElementById("eventDiv");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const eventLocation = document.getElementById("eventLocation");
const eventDescription = document.getElementById("eventDescription");
//edit and delete buttons, hidden until admin mode is turned on
const editButton = document.querySelector(".editButton");
const deleteButton = document.querySelector(".deleteButton");

//modal variables
const modal = document.querySelectorAll(".modal");
const modalCloseBtn = document.querySelectorAll(".closeModalBtn");
const overlay = document.querySelector(".overlay");

//add event modal variables
const addEventModal = document.getElementById("addEventModal");
const modalContent = document.getElementById("modalContent");
const addEventForm = document.getElementById("addForm");
const addEventTitle = document.getElementById("addTitle");
const addEventDate = document.getElementById("addDate");
const addEventTime = document.getElementById("addTime");
const addEventLocation = document.getElementById("addLocation");
const addEventDescription = document.getElementById("addDescription");
const addEventSubmit = document.getElementById("addSubmit");

//edit event modal variables
const editEventModal = document.getElementById("editEventModal");
const editEventForm = document.getElementById("editForm");
const editEventTitle = document.getElementById("editTitle");
const editEventDate = document.getElementById("editDate");
const editEventTime = document.getElementById("editTime");
const editEventLocation = document.getElementById("editLocation");
const editEventDescription = document.getElementById("editDescription");
const editEventSubmit = document.getElementById("editSubmit");

//delete event modal variables
const deleteEventModal = document.getElementById("deleteEventModal");
const deleteEventSubmit = document.getElementById("deleteSubmit");

//login modal variables
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("loginUsername");
const password = document.getElementById("loginPassword");
const loginSubmit = document.getElementById("loginSubmit");

//admin mode variables. this variable is used to determine if the user is in admin mode or not
let adminMode = false;

/*************************************************************************** */

//functions
const openModal = (whichModal) => {
  whichModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
  }
  overlay.classList.add("hidden");
};

/*************************************************************************** */

//modal close event listeners

//if modal close button is hit
for (let i = 0; i < modalCloseBtn.length; i++) {
  modalCloseBtn[i].addEventListener("click", () => {
    closeModal();
  });
}

//if user clicks off the modal
overlay.addEventListener("click", () => {
  closeModal();
});

//if escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/*************************************************************************** */

//Program Logic pseudo code
//1. when user clicks on admin button, user is presented with the login modal
//  a) if user enters correct username and password, admin mode is turned on
//      - login modal is closed
//      -addEventButton is displayed in the navbar
//      -edit and delete buttons are displayed on each event
//      -Admin button text is changed to "Logout"
//      -if number of events is 0, open add event modal
//  b) if user enters incorrect username and password, admin mode is not turned on
//      -user is presented with an error message
//      -login modal is not closed
//      -addEventButton is not displayed in the navbar
//      -edit and delete buttons are not displayed on each event
//      -Admin button text is not changed to "Logout"
//  c) when user clicks on logout, admin mode is turned off
//      -addEventButton is hidden in the navbar
//      -edit and delete buttons are hidden on each event
//      -Admin button text is changed to "Admin"
//
//***The rest of this logic only occurs if admin mode is on***

//2. when user clicks on addEventButton, user is presented with the add event modal
//  a) if user enters all required fields, a new event is created stored in an event object
//      -the add event modal is closed
//      -a new event referencing the event object is created and displayed in the events container, 
//      -the event object is nested in a bigger object that stores all events
//      -the new event has edit and delete buttons
//  b) if user does not enter all required fields, a new event is not created
//      -user is presented with an error message
//      -the add event modal is not closed
//
//3. when user clicks on edit button, user is presented with the edit event modal
//  a) the modal feilds are populated with the current event information
//  b) if user enters all required fields, the event is updated
//      -the edit event modal is closed
//      -the updated event is displayed in the events container
//  c) if user does not enter all required fields, the event is not updated
//      -user is presented with an error message
//      -the edit event modal is not closed
//
//4. when user clicks on delete button, user is presented with the delete event modal
//  a) if user clicks on delete, the event is deleted
//      -the delete event modal is closed
//      -the event is removed from the events container
//  b) if user clicks on cancel, the event is not deleted
//      -the delete event modal is closed

/*************************************************************************** */




