// Estado Global
let filteredProducts = [...products];
let cart = [];
let currentPage = 1;
const itemsPerPage = 12;

// Elementos DOM
const productGrid = document.getElementById('productGrid');
const productCount = document.getElementById('productCount');
let activeFilterBrand = '';
const filterModel = document.getElementById('filterModel');
const searchInput = document.getElementById('searchInput');
const clearFiltersBtn = document.getElementById('clearFilters');
const paginationContainer = document.getElementById('paginationContainer');

// Helper para formatar moeda
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Helper para gerar faixa de preço falsa baseada no ID do produto
const getFakePriceRange = (product) => {
    const min = 150 + ((product.id * 47) % 600);
    const max = min + 800 + ((product.id * 113) % 4000);
    return `R$ ${min.toLocaleString('pt-BR')},00 ~ R$ ${max.toLocaleString('pt-BR')},00`;
};

// Renderizar Produtos com Transição Paginada
function renderProducts(items, animate = false) {
    if (animate) {
        productGrid.classList.add('grid-hidden');
        setTimeout(() => {
            _doRender(items);
            
            // Depois que o DOM for lido, removemos o estado hidden pra nascer devagarzinho.
            setTimeout(() => {
                productGrid.classList.remove('grid-hidden');
            }, 50);
        }, 500); // Tempo mais generoso (meio segundo) pra apagar antes de desenhar  
    } else {
        _doRender(items);
    }
}

function _doRender(items) {
    productGrid.innerHTML = '';
    if (paginationContainer) paginationContainer.innerHTML = '';

    if (items.length === 0) {
        productGrid.innerHTML = '<div class="no-results">Nenhuma peça encontrada com estes filtros.</div>';
        productCount.textContent = '0 produtos encontrados';
        return;
    }

    productCount.textContent = `${items.length} produto(s) encontrado(s)`;

    // Lógica de Paginação
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card animate-stagger';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Evento de click para abrir modal e dar feedback visual verde
        card.addEventListener('click', () => {
            // Feedback visual: card fica verde
            card.classList.add('card-added-success');
            setTimeout(() => {
                card.classList.remove('card-added-success');
            }, 1000); // Fica verde por 1 segundo
            
            openProductModal(product.id);
        });

        const priceRange = getFakePriceRange(product);

        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" loading="lazy" alt="${product.title}">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand} - ${product.model}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-call-to-action" style="color: var(--primary-color); font-weight: 600; font-size: 0.95rem; margin-top: 10px;">
                    <i class="fas fa-plus-circle" style="font-size: 1rem; margin-right: 5px;"></i> Ver Detalhes
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    if (!paginationContainer || totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            if (currentPage !== i) {
                currentPage = i;
                renderProducts(filteredProducts, true); // True para animar
                
                // Rolar suavemente de volta para o topo do catálogo após carregar
                const catalogTop = document.getElementById('catalog').offsetTop;
                window.scrollTo({ top: catalogTop - 100, behavior: 'smooth' });
            }
        });
        paginationContainer.appendChild(btn);
    }
}

// Filtros
function applyFilters() {
    const term = searchInput.value.toLowerCase();
    const brand = activeFilterBrand;
    const model = filterModel.value.toLowerCase();

    filteredProducts = products.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || p.model.toLowerCase().includes(term);
        const matchBrand = brand === '' || p.brand === brand;
        const matchModel = model === '' || p.model.toLowerCase().includes(model);

        return matchSearch && matchBrand && matchModel;
    });

    currentPage = 1; // Reseta para primeira página ao filtrar
    renderProducts(filteredProducts);
}

// Limpar Filtros
function clearFilters() {
    searchInput.value = '';
    filterModel.value = '';
    activeFilterBrand = '';
    document.querySelectorAll('#brandChips .chip').forEach(c => {
        c.classList.toggle('active', c.dataset.value === '');
    });
    applyFilters();
}

// Listeners de Filtro
// Inicializando Chips de Marca
document.querySelectorAll('#brandChips .chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
        document.querySelectorAll('#brandChips .chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        activeFilterBrand = e.target.dataset.value;
        applyFilters();
    });
});

filterModel.addEventListener('input', applyFilters);
searchInput.addEventListener('input', applyFilters);
clearFiltersBtn.addEventListener('click', clearFilters);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Configura os cliques nos carros do mega-menu
    document.querySelectorAll('.mega-car-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const modelName = e.currentTarget.dataset.megaModel;
            
            // Preenche o campo de filtro com o nome do modelo clicado
            filterModel.value = modelName;
            
            // Executa a filtragem da lista atual
            applyFilters();
            
            // Rola a página até a área de produtos suavemente
            const catalogTop = document.getElementById('catalog').offsetTop;
            window.scrollTo({ top: catalogTop - 100, behavior: 'smooth' });
        });
    });

    // === INICIA ANIMAÇÃO DE FUNDO (PARTÍCULAS) ===
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-particles';
    // Adiciona 40 partículas flutuantes para um efeito mais sutil e menos poluído
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2; // Tamanho entre 2 e 8px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`; // Posição horizontal X aleatória
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`; // Sobe em 10 a 20 segundos
        particle.style.animationDelay = `${Math.random() * 5}s`;
        bgContainer.appendChild(particle);
    }
    document.body.prepend(bgContainer);

    // Transição do Navbar ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Lógica da Modal de Trocas e Devoluções
    const policyLink = document.getElementById('policyLink');
    const policyModal = document.getElementById('policyModal');
    const closePolicyBtn = document.getElementById('closePolicyBtn');

    if (policyLink && policyModal && closePolicyBtn) {
        policyLink.addEventListener('click', (e) => {
            e.preventDefault();
            policyModal.classList.add('active');
        });

        closePolicyBtn.addEventListener('click', () => {
            policyModal.classList.remove('active');
        });

        policyModal.addEventListener('click', (e) => {
            if (e.target === policyModal) {
                policyModal.classList.remove('active');
            }
        });
    }

    renderProducts(products);
});

// =========================================================================
// PRODUCT MODAL LOGIC
// =========================================================================
let currentModalImages = [];
let currentModalImageIndex = 0;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    // Popula informações de texto
    document.getElementById('modalBrand').textContent = `${product.brand} - ${product.model}`;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = getFakePriceRange(product);
    
    // Descrição Genérica
    const desc = product.description || `Peça automotiva de alta qualidade da marca ${product.brand}, compatível com o modelo ${product.model}. Todas as nossas peças passam por um rigoroso controle de procedência, testes práticos e inspeção técnica antes de serem catalogadas no estoque. Garantimos o funcionamento perfeito, durabilidade e total segurança na reposição do seu veículo. Categoria: ${product.category}.`;
    document.getElementById('modalDesc').textContent = desc;
    
    // Lógica da Galeria (Usa galeria do produto ou mock com 4 imagens reais para demonstração)
    currentModalImages = product.gallery || [
        product.image,
        "images/vw_tcross.jpg",
        "images/honda_civic_g10.jpg",
        "images/ford_ranger.jpg"
    ];
    currentModalImageIndex = 0;
    
    updateModalImage();
    renderModalThumbnails();

    // Configurar Botões
    const whatsappBtn = document.getElementById('modalWhatsappBtn');
    const msg = encodeURIComponent(`Olá, Atual Sucatas! Tenho interesse no item do catálogo: ${product.title} (${getFakePriceRange(product)}). Poderia me passar mais detalhes?`);
    whatsappBtn.href = `https://wa.me/554991041665?text=${msg}`;

    const addToCartBtn = document.getElementById('modalAddToCartBtn');
    const newAddToCartBtn = addToCartBtn.cloneNode(true);
    addToCartBtn.parentNode.replaceChild(newAddToCartBtn, addToCartBtn);
    
    newAddToCartBtn.addEventListener('click', () => {
        if (typeof addToCart === 'function') addToCart(product.id);
        
        const originalText = newAddToCartBtn.innerHTML;
        newAddToCartBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado';
        newAddToCartBtn.style.backgroundColor = '#22c55e';
        newAddToCartBtn.style.borderColor = '#22c55e';
        
        setTimeout(() => {
            newAddToCartBtn.innerHTML = originalText;
            newAddToCartBtn.style.backgroundColor = '';
            newAddToCartBtn.style.borderColor = '';
        }, 2000);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalImage() {
    const mainImage = document.getElementById('modalMainImage');
    if(!mainImage) return;

    mainImage.classList.add('fade-out');
    
    setTimeout(() => {
        mainImage.src = currentModalImages[currentModalImageIndex];
        mainImage.classList.remove('fade-out');
    }, 150);

    document.querySelectorAll('.thumbnail-item').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentModalImageIndex);
    });
}

function renderModalThumbnails() {
    const container = document.getElementById('modalThumbnails');
    if(!container) return;

    container.innerHTML = '';
    
    currentModalImages.forEach((imgSrc, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgSrc}" loading="lazy" alt="Thumbnail ${idx}">`;
        thumb.addEventListener('click', () => {
            currentModalImageIndex = idx;
            updateModalImage();
        });
        container.appendChild(thumb);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeProductModal');
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentModalImageIndex = (currentModalImageIndex - 1 + currentModalImages.length) % currentModalImages.length;
            updateModalImage();
        });

        nextBtn.addEventListener('click', () => {
            currentModalImageIndex = (currentModalImageIndex + 1) % currentModalImages.length;
            updateModalImage();
        });
    }
});
