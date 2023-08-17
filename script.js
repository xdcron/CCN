const image = document.querySelectorAll('.gallery-item');


image.forEach(el => {
    el.addEventListener('click', function(e) {
        if(e.target.classList.contains('gallery-item')){
            const src = e.target.src
            document.querySelector('.modal-img').src = src;
            const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
            myModal.show();
        }
    })
});

// reveal section

const allSections = document.querySelectorAll('.section')
function revealSection(entries, observer){
const [entry] = entries;
if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
 observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
threshold: 0.05
})

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});

function loadMap() {
    const map = L.map('map').setView([-22.550191, 17.085000], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);

const marker = L.marker([-22.550191, 17.085000]).addTo(map);
}
loadMap();
