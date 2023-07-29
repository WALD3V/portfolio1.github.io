
window.addEventListener('load', () => {
    const galleryContainer = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    let currentIndex = 0;
  
    // Replace 'your_image_folder' with the path to your image folder
    const imageFolderPath = 'parejas/';
  
    // Array of image file names (you may fetch this dynamically if needed)
    const imageFiles = [
      '_DSC1962.JPG',
      '_DSC1979.JPG',
      '_DSC2067.JPG',
      // Add more image file names here...
    ];
  
    // Function to open overlay and show selected image
    function openOverlay(index) {
      currentIndex = index;
      overlay.style.display = 'block';
      overlayImg.src = imageFolderPath + imageFiles[index];
    }
  
    // Function to close overlay
    function closeOverlay() {
      overlay.style.display = 'none';
    }
  
    // Function to show next image
    function showNextImage() {
      currentIndex = (currentIndex + 1) % imageFiles.length;
      overlayImg.src = imageFolderPath + imageFiles[currentIndex];
    }
  
    // Function to show previous image
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
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
  
    // Attach event listeners to overlay elements
    overlay.addEventListener('click', closeOverlay);
    overlayImg.addEventListener('click', (event) => event.stopPropagation());
  });
  











let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 