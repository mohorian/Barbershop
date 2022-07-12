// Gallery slider
const photos = [
    {
        id: '1',
        title: 'СТРИЖКА МАШИНКОЙ',
        img: './img/slider-image.jpg',
    },
    {
        id: '2',
        title: 'СТРИЖКА УСОВ',
        img: './img/gallery2.jpeg',
    },
    {
        id: '3',
        title: 'ГРУМИНГ',
        img: './img/gallery3.jpeg',
    },
    {
        id: '4',
        title: 'КОМПЛЕКСНАЯ СТРИЖКА',
        img: './img/gallery4.jpeg',
    },
];

const sliderImage = document.querySelector('.slider-image');
const sliderNext = document.querySelector('.slider-next');
const sliderPrevious = document.querySelector('.slider-previous');
const paginationButtons = document.querySelectorAll('.slider-pagination-button');

function removeCurrentPagination() {
    paginationButtons.forEach((button) => {
        button.classList.remove('slider-pagination-button-current');
    })
};

function addCurrentPagination(index) {
    paginationButtons[index].classList.add('slider-pagination-button-current');
}

function createImage(index) {
    const photo = photos[index];
    sliderImage.src = photo.img;
    sliderImage.id = photo.id;
    sliderImage.alt = photo.title.toLowerCase();
}

paginationButtons.forEach((button, index) => {
    button.addEventListener('click', (evt) => {
        removeCurrentPagination();
        button.classList.add('slider-pagination-button-current');
        createImage(index);
        button.blur();
    })
});

sliderNext.addEventListener('click', () => {
    const id = sliderImage.getAttribute('id');
    let index = id;
    if (id < photos.length) {
        createImage(index);
        removeCurrentPagination();
        addCurrentPagination(index);
    } else {
        createImage(0);
        removeCurrentPagination();
        addCurrentPagination(0);
    };
    sliderNext.blur();
});

sliderPrevious.addEventListener('click', () => {
    const id = sliderImage.getAttribute('id');
    let index = id
    if (id == 1) {
        index = paginationButtons.length - 1;
        createImage(index);
        removeCurrentPagination();
        addCurrentPagination(index);
    } else {
        index = id -2;
        createImage(index);
        removeCurrentPagination();
        addCurrentPagination(index);
    };
    sliderPrevious.blur();
})