
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp");

    // Replace this with your academy's WhatsApp number.
    const phoneNumber = "919393301816";

    whatsappButton.href =
        "https://wa.me/" + 919493301816;
});


const classroomPhotos = [
    "images/twoo.jpeg",
    "images/three.jpeg",
    "images/four.jpeg"
];

let classroomSlideIndex = 0;

function showClassroomSlide() {
    const img = document.getElementById("classroomSlideImage");
    const caption = document.getElementById("classroomSlideCaption");

    img.onerror = function () {
        alert("Photo not found: " + classroomPhotos[classroomSlideIndex]);
    };

    img.src = classroomPhotos[classroomSlideIndex];

    caption.textContent =
        "Classroom Photo " + (classroomSlideIndex + 1) +
        " of " + classroomPhotos.length;
}

function openClassroomSlideshow() {
    classroomSlideIndex = 0;
    showClassroomSlide();
    document.getElementById("classroomSlideshow").style.display = "flex";
}

function closeClassroomSlideshow() {
    document.getElementById("classroomSlideshow").style.display = "none";
}

function changeClassroomSlide(direction) {
    classroomSlideIndex =
        (classroomSlideIndex + direction + classroomPhotos.length)
        % classroomPhotos.length;

    showClassroomSlide();
}

const classroomPhotos = [
    "twoo.jpeg",
    "three.jpeg",
    "four.jpeg"
];
const photoCollections = {
    classrooms: [
        "twoo.jpeg",
        "three.jpeg",
        "four.jpeg"
    ],

    students: [
        "one.jpeg",
        "twoo.jpeg",
        "four.jpeg"
    ],

    faculty: [
        "teacher.jpeg",
        "five.jpeg",
        "four.jpeg"
    ]
};
let currentPhotos = [];
let currentSlideIndex = 0;
let currentCategory = "";

function openSlideshow(category) {
    currentCategory = category;
    currentPhotos = photoCollections[category];
    currentSlideIndex = 0;

    document.getElementById("photoSlideshow").style.display = "flex";
    showSlide();
}

function showSlide() {
    const img = document.getElementById("slideImage");
    const caption = document.getElementById("slideCaption");

    img.onerror = function () {
        caption.textContent =
            "Photo not found. Check the filename in images/: " +
            currentPhotos[currentSlideIndex];
    };

    img.src = currentPhotos[currentSlideIndex];

    const categoryName =
        currentCategory.charAt(0).toUpperCase() +
        currentCategory.slice(1);

    caption.textContent =
        categoryName + " Photo " +
        (currentSlideIndex + 1) + " of " +
        currentPhotos.length;
}
function changeSlide(direction) {
    currentSlideIndex =
        (currentSlideIndex + direction + currentPhotos.length)
        % currentPhotos.length;

    showSlide();
}

function closeSlideshow() {
    document.getElementById("photoSlideshow").style.display = "none";
}
