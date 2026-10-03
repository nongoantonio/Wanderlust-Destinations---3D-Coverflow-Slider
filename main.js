// Inicialização do Swiper.js com Coverflow 3D Avançado
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2.5,
        slideShadows: false
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// Funções para controle do Modal Interativo
const modal = document.getElementById("destinationModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

function openModal(title, desc, price, imgUrl) {
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalPrice.innerText = price;
    modalImg.src = imgUrl;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Fechar modal ao clicar fora da caixa de conteúdo
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}