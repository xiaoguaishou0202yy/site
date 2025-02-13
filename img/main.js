// Variables to track panning state and coordinates
let currentScale = 1;  // Initial scale of the image
let isPanning = false; // Track whether the user is panning
let startX, startY;    // Mouse starting position
let originX = 0, originY = 0; // Starting position for translation

// Function to open modal and reset zoom
function openModal(modalId,imagePath) {
    var modal = document.getElementById(modalId);
    var img = modal.querySelector('.modal-content');

    // Set the modal to visible
    modal.style.display = 'block';

    img.src = imagePath; // Full-size image path

    // Reset zoom and translation
    currentScale = 1;
    originX = 0;
    originY = 0;
    img.style.transform = `scale(${currentScale}) translate(0px, 0px)`;
    img.style.cursor = 'zoom-in';
}

// Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Apply zoom functionality to all elements with the 'zoomable' class
document.querySelectorAll('.zoomable').forEach(function (img) {
    img.addEventListener('wheel', function (event) {
        event.preventDefault();

        // Zoom in or out based on the scroll direction
        if (event.deltaY < 0) {
            currentScale += 0.1; // Scroll up -> zoom in
        } else {
            currentScale = Math.max(1, currentScale - 0.1); // Scroll down -> zoom out (limit zoom out to 1x)
        }

        // Apply transform with scaling and translation
        img.style.transform = `scale(${currentScale}) translate(${originX}px, ${originY}px)`;

        // Change cursor to indicate zoom out if zoomed in
        img.style.cursor = currentScale > 1 ? 'move' : 'zoom-in';
    });
});

var swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    }
});

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    }
});