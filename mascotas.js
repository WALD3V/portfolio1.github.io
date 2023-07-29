window.addEventListener('load', () => {
    const galleryContainer = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    let currentIndex = 0;

    // Replace 'your_image_folder' with the path to your image folder
    const imageFolderPath = 'comp/comp/';

    // Array of image file names (you may fetch this dynamically if needed)
    const imageFiles = [
        'DSC01093.jpg',
        'DSC01095.jpg',
        'DSC01096.jpg',
        'DSC01097.jpg',
        'DSC01098.jpg',
        'DSC01099.jpg',
        'DSC01100.jpg',
        'DSC01101.jpg',
        'DSC01107.jpg',
        // Add more image file names here...
    ];

    // Function to open overlay and show selected image
    function openOverlay(index) {
        currentIndex = index;
        updateOverlayImage();
        overlay.style.display = 'block';
    }

    // Function to close overlay
    function closeOverlay() {
        overlay.style.display = 'none';
    }

    // Function to show next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageFiles.length;
        updateOverlayImage();
    }

    // Function to show previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
        updateOverlayImage();
    }

    // Function to update the overlay image
    function updateOverlayImage() {
        overlayImg.src = imageFolderPath + imageFiles[currentIndex];
    }

    // Loop through the image files and create image elements with click event
    for (let i = 0; i < imageFiles.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = imageFolderPath + imageFiles[i];
        imageElement.alt = imageFiles[i];
        imageElement.classList.add('grid-item');
        imageElement.addEventListener('click', () => openOverlay(i));
        galleryContainer.appendChild(imageElement);
    }

    // Attach event listener to overlay close button
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', closeOverlay);

    // Attach event listener to overlay to close it when clicked outside
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    // Attach event listeners to next and previous buttons in the overlay
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
});