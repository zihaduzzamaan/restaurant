/* ==========================================================================
   Gustoso Italian Restaurant JS Application Logic
   ========================================================================== */

// --- 1. Menu Database ---
const MENU_DATABASE = [
    {
        id: "starter-1",
        title: "Baked Meatballs",
        price: 12.5,
        desc: "Traditional beef and pork meatballs simmered in rich marinara sauce, topped with shaved parmigiano, served with warm garlic focaccia.",
        category: "starters",
        tags: ["chef"],
        img: "assets/menu-item-1.webp"
    },
    {
        id: "starter-2",
        title: "Ham & Fontina Bruschetta",
        price: 11.0,
        desc: "Toasted artisan sourdough topped with roasted cured ham, creamy melted fontina cheese, fresh arugula, and a drizzle of honey balsamic.",
        category: "starters",
        tags: ["new"],
        img: "assets/menu-item-2.webp"
    },
    {
        id: "starter-3",
        title: "Tomato & Basil Caprese",
        price: 9.5,
        desc: "Vine-ripened heritage tomatoes layered with fresh buffalo mozzarella, garden basil leaves, extra virgin olive oil, and flaky sea salt.",
        category: "starters",
        tags: ["vegan"],
        img: "assets/menu-item-3.webp"
    },
    {
        id: "starter-4",
        title: "Garlic Butter Prawns",
        price: 14.0,
        desc: "Sautéed wild prawns tossed in white wine, butter, roasted garlic cloves, and fresh parsley, served with grilled baguettes.",
        category: "starters",
        tags: ["chef"],
        img: "assets/menu-item-4.webp"
    },
    {
        id: "main-1",
        title: "Spaghetti Delle",
        price: 28.0,
        desc: "Our house specialty. Hand-rolled spaghetti pasta tossed with extra virgin olive oil, fresh clams, wild shrimp, calamari, garlic, and cherry tomatoes.",
        category: "mains",
        tags: ["chef"],
        img: "assets/pizza-slice.webp" // Using beautiful pizza/pasta images
    },
    {
        id: "main-2",
        title: "Chicken Prosciutto Italiano",
        price: 26.5,
        desc: "Pan-seared organic chicken breast wrapped in thin prosciutto slices, cooked with fresh sage, white wine butter sauce, and sautéed spinach.",
        category: "mains",
        tags: ["new"],
        img: "assets/deeplight-food-1.webp"
    },
    {
        id: "main-3",
        title: "Truffle Porcini Risotto",
        price: 24.0,
        desc: "Creamy arborio rice slow-simmered with organic wild porcini mushrooms, finished with a dash of white truffle oil and pecorino cheese.",
        category: "mains",
        tags: ["vegan"],
        img: "assets/deeplight-food-2.webp"
    },
    {
        id: "main-4",
        title: "Wood-Fired Margherita Pizza",
        price: 18.0,
        desc: "48-hour fermented sourdough crust topped with organic San Marzano tomato sauce, fresh mozzarella di bufala, basil, and olive oil.",
        category: "mains",
        tags: ["vegan", "chef"],
        img: "assets/deeplight-food-3.webp"
    },
    {
        id: "main-5",
        title: "Pan-Seared Sea Bass",
        price: 32.0,
        desc: "Fresh line-caught sea bass pan-seared and served over a bed of lemon-dill crushed potatoes, asparagus, and roasted caper butter sauce.",
        category: "mains",
        tags: [],
        img: "assets/deeplight-food-4.webp"
    },
    {
        id: "dessert-1",
        title: "Classic Espresso Tiramisu",
        price: 9.0,
        desc: "House-made ladyfingers soaked in organic espresso and dark rum, layered with rich whipped mascarpone cream and dusted with dark cocoa.",
        category: "desserts",
        tags: ["chef"],
        img: "assets/deeplight-food-5.webp"
    },
    {
        id: "dessert-2",
        title: "Sicilian Citrus Olive Oil Cake",
        price: 8.5,
        desc: "Moist, zesty cake baked with Sicilian blood orange zest and extra virgin olive oil, served with vanilla bean mascarpone dollop.",
        category: "desserts",
        tags: ["new"],
        img: "assets/deeplight-food-6.webp"
    },
    {
        id: "dessert-3",
        title: "Vanilla Bean Panna Cotta",
        price: 7.5,
        desc: "Silky, chilled vanilla bean Italian cream custard topped with a sweet, fresh raspberry reduction and wild berries.",
        category: "desserts",
        tags: ["vegan"],
        img: "assets/menu-item-1.webp"
    },
    {
        id: "bev-1",
        title: "House Chianti DOCG",
        price: 12.0,
        desc: "A rich, classic Tuscan red wine with notes of dark cherries, leather, and spices. Perfect pairing for pastas.",
        category: "beverages",
        tags: [],
        img: "assets/menu-item-2.webp"
    },
    {
        id: "bev-2",
        title: "Fresh Garden Basil Lemonade",
        price: 5.5,
        desc: "Freshly squeezed lemon juice sweetened with house-infused garden basil simple syrup and topped with sparkling club soda.",
        category: "beverages",
        tags: ["vegan", "new"],
        img: "assets/menu-item-3.webp"
    },
    {
        id: "bev-3",
        title: "Italian Organic Espresso",
        price: 3.5,
        desc: "Single shot of dark-roast Italian organic coffee beans, served with a lemon peel slice on the side.",
        category: "beverages",
        tags: [],
        img: "assets/menu-item-4.webp"
    }
];

// --- 2. Gallery Database ---
const GALLERY_DATABASE = [
    { src: "assets/gallery-atmosphere-1.webp", category: "atmosphere", title: "Cozy Dining Room", desc: "Warm ambient candlelight dining experience" },
    { src: "assets/gallery-dish-1.webp", category: "dishes", title: "Hand-rolled Tagliatelle", desc: "Fresh handmade pasta with local organic tomatoes" },
    { src: "assets/gallery-dish-2.webp", category: "dishes", title: "Wood-Fired Pizza", desc: "Classic Margherita baked in stone ovens" },
    { src: "assets/gallery-dish-3.webp", category: "dishes", title: "Burrata Caprese Salad", desc: "Vine-ripened heritage tomatoes and sweet basil pesto" },
    { src: "assets/gallery-atmosphere-2.webp", category: "atmosphere", title: "Bistro Stone Oven", desc: "Our 48-hour fermented sourdough baking station" },
    { src: "assets/gallery-atmosphere-3.webp", category: "atmosphere", title: "Wine Cellar Showcase", desc: "Our curated selection of premium imports" },
    { src: "assets/gallery-event-1.webp", category: "events", title: "Banquet Centerpiece", desc: "Elegant floral setups for private weddings" },
    { src: "assets/gallery-event-2.webp", category: "events", title: "Grand Banquet Toast", desc: "Private group dinner toasts" },
    { src: "assets/gallery-event-3.webp", category: "events", title: "Buffet Catering Station", desc: "High-end corporate lunch catering presentations" },
    { src: "assets/gallery-event-4.webp", category: "events", title: "Garden Patio Reception", desc: "Elegant outdoor celebrations under bistro lights" },
    { src: "assets/gallery-dish-4.webp", category: "dishes", title: "Berry Panna Cotta", desc: "Chilled Italian cream custard with fresh reductions" },
    { src: "assets/gallery-dish-5.webp", category: "dishes", title: "Baked Beef Ribs", desc: "Traditional slow-cooked meats served hot" }
];

// --- 3. App State Management ---
const AppState = {
    currentRoute: "home",
    menuKit: [], /* Array of item IDs in custom planner */
    activeLightboxIndex: 0,
    filteredGalleryPhotos: []
};

// --- 4. Initialization & Event Handlers ---
document.addEventListener("DOMContentLoaded", () => {
    initSPARouter();
    initMobileNav();
    initMenuRenderer();
    initBookingSystem();
    initGallerySystem();
    initMenuKitPlanner();
    initScrollEffects();
});

// --- 5. Single Page Application Router ---
function initSPARouter() {
    const triggers = document.querySelectorAll(".nav-trigger");
    const sections = document.querySelectorAll(".page-section");
    const header = document.getElementById("header");
    
    function navigateToSection(targetId) {
        if (!targetId) return;
        
        // Hide all sections first
        sections.forEach(sec => {
            sec.classList.remove("active");
        });
        
        // Find targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
            AppState.currentRoute = targetId;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Update active state in nav elements
            updateNavActiveStates(targetId);
            
            // Set hash safely without trigger reload
            if (history.pushState) {
                history.pushState(null, null, `#${targetId}`);
            } else {
                location.hash = targetId;
            }

            // Notify any listeners (e.g. Leaflet map) that a section changed
            document.dispatchEvent(new CustomEvent('sectionChanged', { detail: targetId }));
        }
    }
    
    function updateNavActiveStates(targetId) {
        // Desktop nav
        document.querySelectorAll(".desktop-navbar .nav-link").forEach(link => {
            if (link.getAttribute("data-target") === targetId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        
        // Mobile nav links
        document.querySelectorAll(".mobile-nav-link").forEach(link => {
            if (link.getAttribute("data-target") === targetId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Attach click events to nav links
    triggers.forEach(trig => {
        trig.addEventListener("click", (e) => {
            e.preventDefault();
            const target = trig.getAttribute("data-target");
            navigateToSection(target);
            
            // Close mobile menu if open
            closeMobileDrawer();
        });
    });

    // Handle back/forward history navigation or loading specific hash directly
    window.addEventListener("popstate", () => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            navigateToSection(hash);
        } else {
            navigateToSection("home");
        }
    });

    // Check initial hash on load
    const initialHash = location.hash.replace("#", "");
    if (initialHash) {
        navigateToSection(initialHash);
    }
}

// --- 6. Mobile Hamburger Navigation Drawer ---
function initMobileNav() {
    const hamburger = document.getElementById("mobile-hamburger");
    const drawer = document.getElementById("mobile-menu-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");
    const closeBtn = document.getElementById("mobile-drawer-close-btn");
    
    function openMobileDrawer() {
        drawer.classList.add("open");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    hamburger.addEventListener("click", openMobileDrawer);
    closeBtn.addEventListener("click", closeMobileDrawer);
    overlay.addEventListener("click", closeMobileDrawer);
}

function closeMobileDrawer() {
    const drawer = document.getElementById("mobile-menu-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    }
}

// --- 7. Menu Rendering & Filtering System ---
function initMenuRenderer() {
    const grid = document.getElementById("menu-items-grid");
    const filters = document.querySelectorAll("#menu-filter-container .filter-btn");
    
    if (!grid) return;

    function renderDishes(category = "all") {
        grid.innerHTML = "";
        
        // Define blocks to render based on selection
        const blocks = [];
        
        if (category === "all" || category === "starters") {
            blocks.push({
                title: "Starters & Platters",
                image: "assets/menu-item-4.webp",
                bgImage: "assets/menu-item-1.webp",
                drawing: "assets/menu-draw-starters.webp",
                drawingClass: "draw-starters",
                sectionClass: "sec-starters",
                items: MENU_DATABASE.filter(item => item.category === "starters"),
                reverse: false
            });
        }
        
        if (category === "all" || category === "mains") {
            blocks.push({
                title: "Fresh Pastas & Risottos",
                image: "assets/about-pasta-prep.webp",
                bgImage: "assets/menu-item-3.webp",
                drawing: "assets/menu-draw-pasta.webp",
                drawingClass: "draw-pasta",
                sectionClass: "sec-pasta",
                items: MENU_DATABASE.filter(item => item.id.includes("main-1") || item.id.includes("main-3") || item.id.includes("main-5")),
                reverse: true
            });
            blocks.push({
                title: "Stone-Oven Pizzas & Mains",
                image: "assets/pizza-pull.webp",
                bgImage: "assets/menu-item-2.webp",
                drawing: "assets/menu-draw-pizza.webp",
                drawingClass: "draw-pizza",
                sectionClass: "sec-pizza",
                items: MENU_DATABASE.filter(item => item.id.includes("main-2") || item.id.includes("main-4")),
                reverse: false
            });
        }
        
        if (category === "all" || category === "desserts") {
            blocks.push({
                title: "Sweet Desserts",
                image: "assets/deeplight-food-5.webp",
                bgImage: "assets/about-wine.webp",
                drawing: "assets/menu-draw-desserts.webp",
                drawingClass: "draw-desserts",
                sectionClass: "sec-desserts",
                items: MENU_DATABASE.filter(item => item.category === "desserts"),
                reverse: category === "all" ? true : false
            });
        }
        
        if (category === "all" || category === "beverages") {
            blocks.push({
                title: "Vintages & Beverages",
                image: "assets/about-wine.webp",
                bgImage: "assets/dining-hours.webp",
                drawing: "assets/parcelli.webp",
                drawingClass: "draw-beverages",
                sectionClass: "sec-beverages",
                items: MENU_DATABASE.filter(item => item.category === "beverages"),
                reverse: category === "all" ? false : false
            });
        }

        // Render blocks
        blocks.forEach(block => {
            const section = document.createElement("div");
            section.className = `menu-category-section ${block.sectionClass}`;
            
            // Build items HTML
            let itemsHtml = "";
            block.items.forEach(item => {
                const isInKit = AppState.menuKit.includes(item.id);
                const kitBtnText = isInKit ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-plus"></i>`;
                const kitBtnTitle = isInKit ? "Added to Catering Planner" : "Add to Catering Planner";
                const kitBtnClass = isInKit ? "btn-add-kit added" : "btn-add-kit";
                
                itemsHtml += `
                    <div class="menu-item-row" id="card-${item.id}">
                        <div class="menu-item-line">
                            <div class="menu-item-title-wrap">
                                <h3 class="menu-item-name font-serif">${item.title}</h3>
                                <button class="${kitBtnClass}" data-item-id="${item.id}" title="${kitBtnTitle}">
                                    ${kitBtnText}
                                </button>
                            </div>
                            <div class="menu-item-spacer-dots"></div>
                            <span class="menu-item-price font-serif">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="menu-item-description text-light">${item.desc}</p>
                    </div>
                `;
            });
            
            const gridClass = block.reverse ? "grid grid-2 align-items-center layout-reverse" : "grid grid-2 align-items-center";
            
            section.innerHTML = `
                <!-- Background Drawing Watermark -->
                <img src="${block.drawing}" class="category-bg-drawing ${block.drawingClass}" alt="">
                
                <div class="category-header text-center">
                    <h2 class="category-title font-cursive">${block.title}</h2>
                    <img src="assets/frill-divider.webp" alt="Flourish Separator" class="category-flourish-divider">
                </div>
                <div class="${gridClass}">
                    <!-- Left/Right: Double Layered Image Wrapper -->
                    <div class="menu-double-image-wrap">
                        <img src="${block.image}" alt="${block.title}" class="img-foreground shadow-lg">
                        <img src="${block.bgImage}" alt="" class="img-background">
                    </div>
                    
                    <!-- Left/Right: Menu Items List -->
                    <div class="menu-category-list-wrap">
                        ${itemsHtml}
                    </div>
                </div>
            `;
            
            grid.appendChild(section);
        });
        
        attachKitButtonsListeners();
    }

    // Attach click triggers to filter buttons
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-category");
            renderDishes(category);
        });
    });

    // Render initially
    renderDishes();
}

// --- 8. Table Booking Modal & Submission ---
function initBookingSystem() {
    const bookingTriggers = document.querySelectorAll(".trigger-booking");
    const wrapper = document.getElementById("booking-modal-wrapper");
    const closeBtn = document.getElementById("close-booking-modal");
    const form = document.getElementById("booking-reservation-form");
    
    const contactSubject = document.getElementById("contact-subject");
    const contactMessage = document.getElementById("contact-message");
    
    // Set date input minimum value to today (cannot book past dates)
    const dateInput = document.getElementById("book-date");
    const inquiryDateInput = document.getElementById("banq-date");
    
    const today = new Date().toISOString().split("T")[0];
    if (dateInput) dateInput.setAttribute("min", today);
    if (inquiryDateInput) inquiryDateInput.setAttribute("min", today);

    // Open booking modal
    bookingTriggers.forEach(btn => {
        btn.addEventListener("click", () => {
            wrapper.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Close booking modal
    closeBtn.addEventListener("click", () => {
        wrapper.classList.remove("active");
        document.body.style.overflow = "";
    });

    // Submit booking form
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("book-name").value;
            const email = document.getElementById("book-email").value;
            const date = dateInput.value;
            const time = document.getElementById("book-time").value;
            const guests = document.getElementById("book-guests").value;
            const seating = document.getElementById("book-seating").options[document.getElementById("book-seating").selectedIndex].text;
            
            // Close reservation modal
            wrapper.classList.remove("active");
            
            // Generate simulated reservation ID
            const confirmId = "RES-" + Math.floor(1000 + Math.random() * 9000);
            
            // Open success modal
            showSuccessModal(
                "Table Reserved Successfully!",
                `Hi <strong>${name}</strong>, your table for <strong>${guests} ${guests === '1' ? 'person' : 'people'}</strong> on <strong>${date}</strong> at <strong>${time} PM</strong> has been reserved under the seating area: <strong>${seating}</strong>. A confirmation has been sent to <strong>${email}</strong>.`,
                confirmId
            );
            
            form.reset();
        });
    }

    // Connect general contact form
    const contactForm = document.getElementById("contact-message-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value;
            const subject = document.getElementById("contact-subject").value;
            
            showSuccessModal(
                "Message Sent!",
                `Thank you <strong>${name}</strong>. Your inquiry regarding "<strong>${subject}</strong>" has been received. Our team will contact you shortly.`,
                "MSG-" + Math.floor(1000 + Math.random() * 9000)
            );
            contactForm.reset();
        });
    }

    // Connect banquet inquiry form
    const banquetForm = document.getElementById("banquet-inquiry-form");
    if (banquetForm) {
        banquetForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("banq-name").value;
            const date = document.getElementById("banq-date").value;
            const guests = document.getElementById("banq-guests").value;
            
            showSuccessModal(
                "Inquiry Received!",
                `Thank you <strong>${name}</strong>. Your private banquet inquiry for <strong>${guests} guests</strong> on <strong>${date}</strong> has been logged. Our coordinator will call you to finalize menu arrangements.`,
                "EVT-" + Math.floor(1000 + Math.random() * 9000)
            );
            banquetForm.reset();
        });
    }
}

function showSuccessModal(title, msg, id) {
    const successWrapper = document.getElementById("success-modal-wrapper");
    const successTitle = document.getElementById("success-title");
    const successContent = document.getElementById("success-msg-content");
    const closeBtn = document.getElementById("close-success-modal");
    
    if (successWrapper && successTitle && successContent) {
        successTitle.innerText = title;
        successContent.innerHTML = `${msg} <span class="confirm-id">${id}</span>`;
        
        successWrapper.classList.add("active");
        document.body.style.overflow = "hidden";
        
        const closeHandler = () => {
            successWrapper.classList.remove("active");
            document.body.style.overflow = "";
            closeBtn.removeEventListener("click", closeHandler);
        };
        closeBtn.addEventListener("click", closeHandler);
    }
}

// --- 9. Gallery Lightbox System ---
function initGallerySystem() {
    const photoGrid = document.getElementById("gallery-photo-grid");
    const filters = document.querySelectorAll("#gallery-filter-container .filter-btn");
    
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-target-img");
    const lightboxCap = document.getElementById("lightbox-target-caption");
    const closeBtn = document.getElementById("close-lightbox");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    if (!photoGrid) return;

    function renderGallery(category = "all") {
        photoGrid.innerHTML = "";
        
        AppState.filteredGalleryPhotos = category === "all"
            ? GALLERY_DATABASE
            : GALLERY_DATABASE.filter(p => p.category === category);
            
        AppState.filteredGalleryPhotos.forEach((photo, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = "gallery-item";
            wrapper.setAttribute("data-index", index);
            
            wrapper.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-tag">${photo.category}</span>
                    <h4 class="gallery-title">${photo.title}</h4>
                </div>
            `;
            
            wrapper.addEventListener("click", () => {
                openLightbox(index);
            });
            
            photoGrid.appendChild(wrapper);
        });
    }

    function openLightbox(index) {
        AppState.activeLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    function updateLightboxContent() {
        const photo = AppState.filteredGalleryPhotos[AppState.activeLightboxIndex];
        if (photo) {
            lightboxImg.src = photo.src;
            lightboxImg.alt = photo.title;
            lightboxCap.innerText = `${photo.title} - ${photo.desc}`;
        }
    }

    function showPrevImage() {
        AppState.activeLightboxIndex--;
        if (AppState.activeLightboxIndex < 0) {
            AppState.activeLightboxIndex = AppState.filteredGalleryPhotos.length - 1;
        }
        updateLightboxContent();
    }

    function showNextImage() {
        AppState.activeLightboxIndex++;
        if (AppState.activeLightboxIndex >= AppState.filteredGalleryPhotos.length) {
            AppState.activeLightboxIndex = 0;
        }
        updateLightboxContent();
    }

    // Connect triggers
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-gallery-cat");
            renderGallery(category);
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);
    
    // Close lightbox on wrapper background click (not image)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard support for gallery
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "ArrowRight") showNextImage();
    });

    // Initial render
    renderGallery();
}

// --- 10. Menu Kit Planner & Estimated Pricing ---
function initMenuKitPlanner() {
    const guestSlider = document.getElementById("guest-slider");
    const guestVal = document.getElementById("guest-count-val");
    const presentationStyle = document.getElementById("catering-style");
    const kitSubmitBtn = document.getElementById("catering-submit-kit-btn");
    
    const notifier = document.getElementById("menu-kit-notice");
    const notifierClose = document.getElementById("notifier-close-btn");
    
    if (!guestSlider) return;

    // Update guest count label live
    guestSlider.addEventListener("input", (e) => {
        guestVal.innerText = e.target.value;
        calculateCateringTotal();
    });

    // Update service multiplier live
    presentationStyle.addEventListener("change", () => {
        const selectedOpt = presentationStyle.options[presentationStyle.selectedIndex];
        const factor = parseFloat(selectedOpt.getAttribute("data-multiplier"));
        document.getElementById("service-factor").innerText = factor.toFixed(2) + "x";
        calculateCateringTotal();
    });

    // Close notification panel
    if (notifierClose) {
        notifierClose.addEventListener("click", () => {
            notifier.style.display = "none";
        });
    }

    // Quote submission click
    kitSubmitBtn.addEventListener("click", () => {
        // Pre-fill contact form
        const subject = document.getElementById("contact-subject");
        const msg = document.getElementById("contact-message");
        const selectedDishesText = AppState.menuKit.map(id => {
            const item = MENU_DATABASE.find(d => d.id === id);
            return item ? `- ${item.title} ($${item.price.toFixed(2)})` : "";
        }).join("\n");
        
        const style = presentationStyle.options[presentationStyle.selectedIndex].text;
        const total = document.getElementById("kit-estimated-total").innerText;
        
        if (subject && msg) {
            subject.value = "Catering Request: Custom Menu Kit";
            msg.value = `I built a custom menu package containing the following selections:\n${selectedDishesText}\n\nEstimated Guests: ${guestSlider.value}\nPresentation Preference: ${style}\nCalculated Price Quote: ${total}\n\nPlease get in touch to verify availability.`;
            
            // Navigate to contact us
            const contactNavLink = document.getElementById("nav-item-contact");
            if (contactNavLink) contactNavLink.click();
        }
    });
}

function attachKitButtonsListeners() {
    const addButtons = document.querySelectorAll(".btn-add-kit");
    addButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const itemId = btn.getAttribute("data-item-id");
            toggleMenuKitItem(itemId, btn);
        });
    });
}

function toggleMenuKitItem(itemId, btnElement) {
    const index = AppState.menuKit.indexOf(itemId);
    
    if (index === -1) {
        // Add to kit
        AppState.menuKit.push(itemId);
        btnElement.classList.add("added");
        btnElement.innerHTML = `<i class="fa-solid fa-circle-check"></i> Added`;
    } else {
        // Remove from kit
        AppState.menuKit.splice(index, 1);
        btnElement.classList.remove("added");
        btnElement.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Menu Kit`;
    }
    
    // Update Planner panel UI
    updateMenuKitPlannerUI();
    
    // Trigger notification panel
    const notifier = document.getElementById("menu-kit-notice");
    if (notifier && AppState.menuKit.length > 0) {
        notifier.style.display = "flex";
    } else if (notifier) {
        notifier.style.display = "none";
    }
}

function updateMenuKitPlannerUI() {
    const listContainer = document.getElementById("kit-items-container");
    const countDisplay = document.getElementById("kit-item-count");
    const submitBtn = document.getElementById("catering-submit-kit-btn");
    
    if (!listContainer) return;
    
    // Update header stats
    countDisplay.innerText = AppState.menuKit.length;
    
    if (AppState.menuKit.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-list-state">
                <p>Your Menu Kit is currently empty.</p>
                <a href="#menu" class="btn btn-outline btn-sm nav-trigger" data-target="menu" id="planner-empty-add-btn">Add Items from Menu</a>
            </div>
        `;
        if (submitBtn) submitBtn.setAttribute("disabled", "true");
        
        // Reset calculated boxes
        document.getElementById("per-head-base").innerText = "$0.00";
        document.getElementById("per-head-total").innerText = "$0.00";
        document.getElementById("kit-estimated-total").innerText = "$0.00";
        
        // Update nav links internally
        const newAddLink = document.getElementById("planner-empty-add-btn");
        if (newAddLink) {
            newAddLink.addEventListener("click", () => {
                document.getElementById("nav-item-menu").click();
            });
        }
        return;
    }
    
    // Enable submit quote button
    if (submitBtn) submitBtn.removeAttribute("disabled");
    
    // Render selected list items
    listContainer.innerHTML = "";
    AppState.menuKit.forEach(id => {
        const dish = MENU_DATABASE.find(item => item.id === id);
        if (dish) {
            const itemDiv = document.createElement("div");
            itemDiv.className = "kit-selected-item";
            itemDiv.innerHTML = `
                <div class="kit-item-details">
                    <span class="kit-item-name">${dish.title}</span>
                    <span class="kit-item-price">$${dish.price.toFixed(2)}</span>
                </div>
                <button class="btn-remove-kit-item" data-item-id="${dish.id}">&times;</button>
            `;
            
            // Connect remove button
            const removeBtn = itemDiv.querySelector(".btn-remove-kit-item");
            removeBtn.addEventListener("click", () => {
                // Find matching card button on Menu page and toggle
                const menuCardBtn = document.querySelector(`#card-${dish.id} .btn-add-kit`);
                if (menuCardBtn) {
                    toggleMenuKitItem(dish.id, menuCardBtn);
                } else {
                    // If not on current page, remove directly
                    const idx = AppState.menuKit.indexOf(dish.id);
                    if (idx !== -1) AppState.menuKit.splice(idx, 1);
                    updateMenuKitPlannerUI();
                }
            });
            
            listContainer.appendChild(itemDiv);
        }
    });
    
    calculateCateringTotal();
}

function calculateCateringTotal() {
    const guestCount = parseInt(document.getElementById("guest-slider").value);
    const presentationStyle = document.getElementById("catering-style");
    const multiplier = parseFloat(presentationStyle.options[presentationStyle.selectedIndex].getAttribute("data-multiplier"));
    
    let sumBase = 0;
    AppState.menuKit.forEach(id => {
        const dish = MENU_DATABASE.find(item => item.id === id);
        if (dish) sumBase += dish.price;
    });
    
    const perHeadTotal = sumBase * multiplier;
    const finalTotal = perHeadTotal * guestCount;
    
    document.getElementById("per-head-base").innerText = `$${sumBase.toFixed(2)}`;
    document.getElementById("per-head-total").innerText = `$${perHeadTotal.toFixed(2)}`;
    document.getElementById("kit-estimated-total").innerText = `$${finalTotal.toFixed(2)}`;
}

// --- 11. Custom Scroll Effects & Back to Top ---
function initScrollEffects() {
    const header = document.getElementById("header");
    const backToTop = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;
        
        // Sticky Header shadow transition
        if (scrollPos > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Reveal Back to top
        if (scrollPos > 400) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
