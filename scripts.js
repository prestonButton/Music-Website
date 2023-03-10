// Description: This file contains the JavaScript code for the application.
//@author:  Preston Button http://github.com/prestonButton
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

let numEvents = 0;
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
//      -the event object is nested in a bigger object that stores all events
//      -the add event modal is closed
//      -a new event referencing the event object is created and displayed in the events container,
//      -the new event has edit and delete buttons
//  b) if user does not enter all required fields, a new event is not created
//      -user is presented with an error message
//      -the add event modal is not closed
//
//3. For all instances of editButton, when user clicks on edit button, user is presented with the edit event modal
//  a) the modal fields are populated with the current event information
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

//1. when user clicks on admin button,
//      -user is presented with the login modal

//  a) if user enters correct username and password, admin mode is turned on
//      - login modal is closed
//      -addEventButton is displayed in the navbar
//      -Admin button text is changed to "Logout"
//      -edit and delete buttons are displayed on each event
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

// when user clicks on admin button
adminButton.addEventListener("click", () => {
  // if admin mode is off
  if (!adminMode) {
    // reset login form
    loginForm.reset();
    // open login modal
    openModal(loginModal);
  } else {
    // if admin mode is on
    // turn off admin mode
    adminMode = false;
    // hide addEventButton in navbar
    addEventButton.classList.add("hidden");
    // hide edit and delete buttons on each event
    const eventDivs = document.querySelectorAll(".eventDiv");
    eventDivs.forEach((eventDiv) => {
      const editButton = eventDiv.querySelector(".editButton");
      const deleteButton = eventDiv.querySelector(".deleteButton");
      editButton.classList.add("hidden");
      deleteButton.classList.add("hidden");
    });
    // change Admin button text to "Admin"
    adminButton.textContent = "Admin";
  }
});

// when user submits login form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // check if entered username and password are correct
  if (username.value === "a" && password.value === "a") {
    // turn on admin mode
    adminMode = true;
    // close login modal
    closeModal();
    // show addEventButton in navbar
    addEventButton.classList.remove("hidden");
    // show edit and delete buttons on each event
    const eventDivs = document.querySelectorAll(".eventDiv");
    eventDivs.forEach((eventDiv) => {
      const editButton = eventDiv.querySelector(".editButton");
      const deleteButton = eventDiv.querySelector(".deleteButton");
      editButton.classList.remove("hidden");
      deleteButton.classList.remove("hidden");
    });
    // change Admin button text to "Logout"
    adminButton.textContent = "Logout";
    // if number of events is 0, open add event modal
    if (numEvents === 0) {
      openModal(addEventModal);
    }
  } else {
    // if entered username and password are incorrect
    // show error message
    alert("Incorrect username or password");
  }
});

/*************************************************************************** */
//***The rest of this logic only occurs if admin mode is on***

//2. when user clicks on addEventButton, user is presented with the add event modal
//  a) if user enters all required fields,
//      -the add event modal is closed
//      -the new event has edit and delete buttons
//  b) if user does not enter all required fields, a new event is not created
//      -user is presented with an error message
//      -the add event modal is not closed

// when user clicks on addEventButton
addEventButton.addEventListener("click", () => {
  // open add event modal
  openModal(addEventModal);
});

// when user submits add event form
addEventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // check if all required fields are filled out
  if (
    addEventTitle.value &&
    addEventDate.value &&
    addEventTime.value &&
    addEventLocation.value &&
    addEventDescription.value
  ) {
    // increase number of events
    numEvents++;
    // close add event modal
    closeModal();
    // create new event element and add it to the events container
    const newEvent = document.createElement("div");
    newEvent.classList.add("eventDiv");
    newEvent.innerHTML = `
        <h2 class="eventTitle">${addEventTitle.value}</h2>
        <p class="eventDescription">${addEventDescription.value}</p>
        <p class="eventDate">${addEventDate.value}</p>
        <p class="eventTime">${addEventTime.value}</p>
        <p class="eventLocation">${addEventLocation.value}</p> 
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
        `;
    eventsContainer.appendChild(newEvent);
    // reset add event form
    addEventForm.reset();
    // show edit and delete buttons on new event

    const editButton = newEvent.querySelector(".editButton");
    const deleteButton = newEvent.querySelector(".deleteButton");
    editButton.classList.remove("hidden");
    deleteButton.classList.remove("hidden");
  } else {
    // if all required fields are not filled out
    // show error message
    alert("Please fill out all required fields");
  }
});

/*************************************************************************** */

//3. For all instances of editButton, when user clicks on edit button, user is presented with the edit event modal
//  a) the modal feilds are populated with the current event information
//  b) if user enters all required fields, the event is updated
//      -the edit event modal is closed
//      -the updated event is displayed in the events container
//  c) if user does not enter all required fields, the event is not updated
//      -user is presented with an error message
//      -the edit event modal is not closed

// when user clicks on edit button
eventsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("editButton")) {
    // open edit event modal
    openModal(editEventModal);
    // populate modal fields with current event information
    const eventDiv = event.target.parentElement;
    const eventTitle = eventDiv.querySelector(".eventTitle").textContent;
    const eventDescription = eventDiv.querySelector(".eventDescription")
      .textContent;
    const eventDate = eventDiv.querySelector(".eventDate").textContent;
    const eventTime = eventDiv.querySelector(".eventTime").textContent;
    const eventLocation = eventDiv.querySelector(".eventLocation").textContent;
    editEventTitle.value = eventTitle;
    editEventDescription.value = eventDescription;
    editEventDate.value = eventDate;
    editEventTime.value = eventTime;
    editEventLocation.value = eventLocation;
    // when user submits edit event form
    editEventForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // check if all required fields are filled out
      if (
        editEventTitle.value &&
        editEventDate.value &&
        editEventTime.value &&
        editEventLocation.value &&
        editEventDescription.value
      ) {
        // close edit event modal
        closeModal();
        // update event information
        eventDiv.querySelector(".eventTitle").textContent =
          editEventTitle.value;
        eventDiv.querySelector(".eventDescription").textContent =
          editEventDescription.value;
        eventDiv.querySelector(".eventDate").textContent = editEventDate.value;
        eventDiv.querySelector(".eventTime").textContent = editEventTime.value;
        eventDiv.querySelector(".eventLocation").textContent =
          editEventLocation.value;
        // reset edit event form
        editEventForm.reset();
      } else {
        // if all required fields are not filled out
        // show error message
        alert("Please fill out all required fields");
      }
    });
  }
});