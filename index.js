const doctorsData = [
    {"image": "./images/img1.jpg", "name": "Dr. ABC", "specialization": "Orthodontist"},
    {"image": "./images/img2.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img3.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img4.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img5.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img6.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img7.avif", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img8.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img9.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img10.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img11.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img12.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img13.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img14.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img15.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img16.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img17.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img18.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img19.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img20.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img21.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img22.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img23.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img24.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
    {"image": "./images/img25.jpg", "name": "Dr. ABC", "specialization": "Pediatrician"},
];
function createCont(data) {
    const wrap = document.getElementById('wrap');
    data.forEach(item => {
        const doctorContainer = document.createElement('div');
        doctorContainer.classList.add('container');
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        const detailsDiv = document.createElement('div');
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = item.name;
        const spec= document.createElement('h3');
        spec.textContent = item.specialization;
        detailsDiv.appendChild(nameHeading);
        detailsDiv.appendChild(spec);
        doctorContainer.appendChild(image);
        doctorContainer.appendChild(detailsDiv);
        wrap.appendChild(doctorContainer);
    });
}
window.onload = function() {
    createCont(doctorsData);
};
