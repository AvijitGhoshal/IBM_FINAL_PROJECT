// 16:04


let menu=document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:"auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows:true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
});







// Selecting form and event list container
const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('events');

// Event form submission
eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;

    // Creating a new list item for the event
    const newEvent = document.createElement('li');
    newEvent.innerHTML = `
        <h3>${eventName}</h3>
        <p>Date: ${eventDate}</p>
        <p>Location: ${eventLocation}</p>
    `;

    // Adding the new event to the event list
    eventList.appendChild(newEvent);

    // Resetting form
    eventForm.reset();
});
