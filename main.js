// Inicialização do Swiper.js com Coverflow 3D Avançado e Setas
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 140,
        modifier: 2.5,
        slideShadows: false
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 45,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn"
    }
});

// Sistema de Filtro por Categoria
function filterCategory(category) {
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const slides = document.querySelectorAll('.swiper-slide');
    
    slides.forEach(slide => {
        if (category === 'all' || slide.getAttribute('data-category') === category) {
            slide.style.display = 'flex';
        } else {
            // Mantém visível mas com opacidade ou remove do loop visual temporariamente
            slide.style.display = 'flex'; 
        }
    });
    swiper.update();
}

// Funções para controle do Modal Luxuoso
const modal = document.getElementById("destinationModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");

function openModal(title, desc, price, imgUrl, rating) {
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalPrice.innerText = price;
    modalImg.src = imgUrl;
    modalRating.innerText = rating;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function handleBooking() {
    alert("🎉 Reserva VIP solicitada com sucesso! Um de nossos consultores de viagens entrará em contato em breve.");
    closeModal();
}

// Fechar modal ao clicar fora da caixa
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}