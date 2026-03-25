/* ============================================================
   PORTOFOLIO MUAMMAR — SCRIPT.JS v2.0
   ============================================================ */

// ===== THEME TOGGLE =====
(function () {
    const toggle = document.getElementById('theme-toggle');
    const icon   = document.getElementById('theme-icon');
    const label  = document.getElementById('theme-label');
    const body   = document.body;

    const saved = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            if (icon)  { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
            if (label) { label.textContent = 'Light Mode'; }
        } else {
            body.classList.remove('dark-mode');
            if (icon)  { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
            if (label) { label.textContent = 'Dark Mode'; }
        }
    }

    applyTheme(saved);

    if (toggle) {
        toggle.addEventListener('click', function () {
            const isDark = body.classList.contains('dark-mode');
            const next   = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            applyTheme(next);
        });
    }
})();

// ===== TYPING ANIMATION FOR HOME PAGE =====
// Fix: only runs ONCE, no loop, uses class to trigger cursor blink
function startTypingAnimation() {
    const typedElement = document.getElementById('typed-name');
    if (!typedElement) return;

    // Prevent re-running if already typed (e.g. navigating back)
    if (typedElement.dataset.typed === 'done') return;

    const fullName = "Muammar";
    let i = 0;
    typedElement.textContent = "";
    typedElement.dataset.typed = 'running';

    function typeNext() {
        if (i < fullName.length) {
            typedElement.textContent += fullName.charAt(i);
            i++;
            setTimeout(typeNext, 120);
        } else {
            // Done — add CSS class that triggers blinking cursor
            typedElement.dataset.typed = 'done';
            typedElement.classList.add('typing-done');
        }
    }

    setTimeout(typeNext, 300); // small initial delay for polish
}

// ===== PROJECT DATA (shared between modal & detail page) =====
var projectData = {
    'Northbird Logo Design': {
        id: 'northbird',
        title: 'Northbird Logo Design',
        category: 'Branding',
        year: '2025',
        description: 'Symbol logo design with modern and minimalist approach. Perfect for branding and corporate identity. Vertical logo design that represents strength and elegance. Proses desain meliputi riset, sketsa, digitalisasi, dan finalisasi.',
        tags: ['Logo', 'Branding', 'Minimalist', 'Symbol', 'Corporate Identity'],
        techStack: ['Logo Design', 'Branding', 'Minimalist', 'Symbol Design', 'Corporate Identity', 'Adobe Illustrator'],
        images: [
            'foto/foto22.png', 'foto/foto21.png', 'foto/foto22.png', 'foto/foto21.png',
            'foto/foto22.png', 'foto/foto21.png', 'foto/foto22.png', 'foto/foto21.png',
            'foto/foto22.png'
        ],
        links: [
            { type: 'behance',  url: 'https://behance.net/gallery/12345',  label: 'Lihat di Behance', icon: 'fab fa-behance',    tooltip: 'Lihat di Behance' },
            { type: 'website',  url: 'https://example.com',                label: 'Website Project',  icon: 'fas fa-globe',       tooltip: 'Kunjungi Website' },
            { type: 'figma',    url: 'https://figma.com/file/123',         label: 'File Figma',       icon: 'fab fa-figma',       tooltip: 'Buka di Figma' }
        ]
    },
    'Ronas IT | UI/UX Team': {
        id: 'ronas',
        title: 'Ronas IT | UI/UX Team',
        category: 'UI/UX',
        year: '2025',
        description: 'UI/UX design untuk aplikasi laundry sepatu. Meliputi proses research, wireframing, prototyping, dan user testing. Desain fokus pada kemudahan penggunaan dan efisiensi workflow. Dibangun dengan pendekatan user-centered design.',
        tags: ['UI/UX', 'Mobile App', 'Web Design', 'Prototyping', 'Figma', 'User Research'],
        techStack: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing', 'User Testing', 'Adobe XD'],
        images: [
            'foto/foto45.png', 'foto/foto46.png', 'foto/foto47.png', 'foto/foto48.png',
            'foto/foto45.png', 'foto/foto46.png'
        ],
        links: [
            { type: 'prototype', url: 'https://figma.com/proto/123',           label: 'Live Prototype',    icon: 'fas fa-play-circle', tooltip: 'Lihat Prototype' },
            { type: 'behance',   url: 'https://behance.net/gallery/54321',     label: 'Case Study',        icon: 'fab fa-behance',     tooltip: 'Case Study' },
            { type: 'github',    url: 'https://github.com/username/project',   label: 'Repository',        icon: 'fab fa-github',      tooltip: 'Source Code' },
            { type: 'website',   url: 'https://ronasit.com',                   label: 'Company Website',   icon: 'fas fa-globe',       tooltip: 'Kunjungi Website' }
        ]
    },
    'Website Monitoring Progres Hafalan': {
        id: 'hafalan',
        title: 'Website Monitoring Progres Hafalan',
        category: 'Web',
        year: '2025',
        description: "Website untuk memantau progres hafalan Al-Qur'an dengan fitur tracking dan reporting. Dibangun dengan PHP dan MySQL. Fitur: login multi-user (admin, guru, santri), dashboard interaktif, laporan hafalan harian, grafik progres, dan notifikasi otomatis.",
        tags: ['Web Development', 'PHP', 'MySQL', 'Dashboard', 'Bootstrap', 'Chart.js'],
        techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js', 'AJAX', 'HTML5', 'CSS3'],
        images: [
            'foto/foto13.png', 'foto/foto12.png', 'foto/foto11.png', 'foto/foto14.png',
            'foto/foto13.png', 'foto/foto12.png', 'foto/foto11.png', 'foto/foto14.png',
            'foto/foto13.png'
        ],
        links: [
            { type: 'website',   url: 'https://demo-hafalan.com',                  label: 'Live Demo',     icon: 'fas fa-globe',       tooltip: 'Coba Live Demo' },
            { type: 'github',    url: 'https://github.com/username/hafalan-app',   label: 'Source Code',   icon: 'fab fa-github',      tooltip: 'Lihat Source Code' },
            { type: 'prototype', url: 'https://figma.com/proto/456',               label: 'UI Prototype',  icon: 'fas fa-play-circle', tooltip: 'Lihat Prototype' }
        ]
    },
    'Mobile App Design': {
        id: 'mobile-app',
        title: 'Mobile App Design',
        category: 'Mobile',
        year: '2025',
        description: 'Mobile app design dengan modern interface dan smooth user experience. Dirancang menggunakan Figma. Tema dark mode dan light mode, dengan komponen yang reusable dan design system yang konsisten. Mendukung iOS dan Android platform.',
        tags: ['Mobile App', 'UI/UX', 'Figma', 'Prototype', 'iOS', 'Android', 'Design System'],
        techStack: ['Mobile Design', 'Figma', 'UI/UX', 'Prototyping', 'Design System', 'iOS', 'Android', 'Material Design'],
        images: [
            'foto/foto14.png', 'foto/foto13.png', 'foto/foto12.png', 'foto/foto11.png',
            'foto/foto14.png', 'foto/foto13.png', 'foto/foto12.png', 'foto/foto11.png',
            'foto/foto14.png'
        ],
        links: [
            { type: 'figma',     url: 'https://figma.com/file/789',            label: 'Figma File',            icon: 'fab fa-figma',       tooltip: 'Buka di Figma' },
            { type: 'prototype', url: 'https://figma.com/proto/789',           label: 'Interactive Prototype', icon: 'fas fa-play-circle', tooltip: 'Lihat Prototype' },
            { type: 'behance',   url: 'https://behance.net/gallery/98765',     label: 'Portfolio',             icon: 'fab fa-behance',     tooltip: 'Lihat Portfolio' }
        ]
    }
};

var defaultProjectData = {
    title: 'Project Title',
    category: 'Design',
    year: '2025',
    description: 'Project description goes here.',
    tags: ['Design', 'Creative'],
    techStack: ['Design', 'Creative'],
    images: ['foto/foto12.png', 'foto/foto11.png', 'foto/foto13.png', 'foto/foto14.png'],
    links: [{ type: 'website', url: '#', label: 'Lihat Demo', icon: 'fas fa-globe', tooltip: 'Lihat Demo' }]
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function () {

    // Start typing animation (once, no loop)
    startTypingAnimation();

    // ===== PROJECT FILTER (project.html) =====
    const filterBtns   = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length) {
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');

                const cat = this.getAttribute('data-category');

                projectItems.forEach(function (item) {
                    const itemCat = item.getAttribute('data-category');
                    if (cat === 'all' || itemCat === cat) {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(8px)';
                        setTimeout(function () {
                            item.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(8px)';
                        setTimeout(function () { item.style.display = 'none'; }, 260);
                    }
                });
            });
        });
    }

    // ===== PROJECT DETAIL PAGE =====
    if (document.getElementById('project-detail-content')) {
        renderProjectDetail();
        initLightbox();
    }

    // ===== MODAL (project.html) =====
    initModal();
});

/* ============================================================
   PROJECT DETAIL PAGE FUNCTIONS
   (Previously inline in project-detail.html)
   ============================================================ */

function getProjectFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = decodeURIComponent(urlParams.get('project') || '');

    // Match by id or title
    for (const [title, data] of Object.entries(projectData)) {
        if (data.id === projectId || title === projectId) {
            return data;
        }
    }
    return null;
}

function renderFloatingButtons(project) {
    const container = document.getElementById('floating-actions');
    if (!container || !project) return;

    container.innerHTML = project.links.map(function(link) {
        return `
            <a href="${link.url}" target="_blank" class="floating-btn ${link.type}" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
                <span class="tooltip">${link.tooltip || link.label}</span>
            </a>
        `;
    }).join('');
}

function renderProjectDetail() {
    const project   = getProjectFromURL();
    const container = document.getElementById('project-detail-content');
    if (!container) return;

    if (!project) {
        container.innerHTML = `
            <div style="text-align:center;padding:80px 20px;">
                <div style="font-size:3rem;margin-bottom:16px;opacity:0.3;">📂</div>
                <h2 style="color:var(--text);margin-bottom:12px;">Project tidak ditemukan</h2>
                <p style="color:var(--text-3);margin-bottom:24px;">Project yang kamu cari tidak ada atau telah dihapus.</p>
                <a href="project.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;background:var(--highlight);color:#fff;border-radius:var(--radius);font-weight:700;font-size:0.85rem;text-decoration:none;">
                    <i class="fas fa-arrow-left"></i> Kembali ke Project
                </a>
            </div>
        `;
        return;
    }

    // Update page title in topbar
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = project.title;

    // Tech stack tags
    const techTagsHTML = project.techStack.map(function(tech) {
        return `<span class="tech-tag-detail">${tech}</span>`;
    }).join('');

    // Gallery grid
    const galleryHTML = project.images.map(function(img, index) {
        return `
            <div class="gallery-item-detail" data-index="${index}">
                <img src="${img}" alt="${project.title} - Image ${index + 1}" loading="lazy">
                <div class="gallery-overlay-detail">
                    <span><i class="fas fa-expand-alt"></i> Perbesar</span>
                </div>
                <div class="image-counter">${index + 1}/${project.images.length}</div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <a href="project.html" class="back-button">
            <i class="fas fa-arrow-left"></i> Kembali ke Project
        </a>

        <div class="project-header-detail">
            <h1 class="project-title-detail">${project.title}</h1>
            <div class="project-meta-detail">
                <span class="project-category-badge">${project.category}</span>
                <span class="project-year-badge">
                    <i class="far fa-calendar-alt"></i> ${project.year}
                </span>
            </div>
            <p class="project-description-detail">${project.description}</p>
        </div>

        <div class="tech-stack-section">
            <div class="tech-stack-title">
                <i class="fas fa-code"></i> Technologies &amp; Tools
            </div>
            <div class="tech-tags-container">
                ${techTagsHTML}
            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-title">
                <i class="fas fa-images"></i>
                Project Gallery
                <span style="font-size:0.78rem;color:var(--text-3);font-weight:500;">(${project.images.length} foto)</span>
            </div>
            <div class="gallery-grid-detail" id="gallery-grid-detail">
                ${galleryHTML}
            </div>
        </div>
    `;

    // Render floating action buttons
    renderFloatingButtons(project);

    // Init gallery click events for lightbox
    initGalleryClicks(project.images);
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
var lightboxImages  = [];
var lightboxCurrent = 0;

function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var closeBtn = document.querySelector('.lightbox-close');
    var prevBtn  = document.getElementById('lightbox-prev');
    var nextBtn  = document.getElementById('lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn)  prevBtn.addEventListener('click', function() { lightboxNav(-1); });
    if (nextBtn)  nextBtn.addEventListener('click', function() { lightboxNav(1); });

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft')  lightboxNav(-1);
        if (e.key === 'ArrowRight') lightboxNav(1);
    });
}

function initGalleryClicks(images) {
    lightboxImages = images;
    var items = document.querySelectorAll('.gallery-item-detail');
    items.forEach(function(item, idx) {
        item.addEventListener('click', function() {
            openLightbox(parseInt(this.getAttribute('data-index')) || idx);
        });
    });
}

function openLightbox(index) {
    lightboxCurrent = index;
    var lightbox    = document.getElementById('lightbox');
    var img         = document.getElementById('lightbox-img');
    if (!lightbox || !img) return;

    img.src = lightboxImages[lightboxCurrent];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function lightboxNav(dir) {
    lightboxCurrent = (lightboxCurrent + dir + lightboxImages.length) % lightboxImages.length;
    var img = document.getElementById('lightbox-img');
    if (img) img.src = lightboxImages[lightboxCurrent];
}

/* ============================================================
   MODAL FUNCTIONALITY (project.html)
   ============================================================ */
function initModal() {
    var modal      = document.getElementById('project-modal');
    var modalClose = document.querySelector('.modal-close');
    var projectCards = document.querySelectorAll('.project-card');

    if (!modal || !projectCards.length) return;

    // Open modal
    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var projectEl = this.querySelector('h3');
            var title     = projectEl ? projectEl.textContent.trim() : '';
            var data      = projectData[title] || defaultProjectData;
            updateModal(data);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            setTimeout(function () { initThumbnailScroll(); }, 80);
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });

    function updateModal(data) {
        var modalTitle       = document.getElementById('modal-title');
        var modalCategory    = document.getElementById('modal-category');
        var modalYear        = document.getElementById('modal-year');
        var modalDescription = document.getElementById('modal-description');

        if (modalTitle)       modalTitle.textContent       = data.title;
        if (modalCategory)    modalCategory.textContent    = data.category;
        if (modalYear)        modalYear.textContent        = data.year;
        if (modalDescription) modalDescription.textContent = data.description;

        // Tags
        var tagsEl = document.getElementById('modal-tags');
        if (tagsEl) {
            tagsEl.innerHTML = '';
            data.tags.forEach(function (t) {
                var s = document.createElement('span');
                s.className   = 'modal-tag';
                s.textContent = t;
                tagsEl.appendChild(s);
            });
        }

        updateModalImages(data.images);
        updateModalLinks(data.links);
    }

    function updateModalImages(images) {
        var mainImg  = document.getElementById('modal-main-img');
        var thumbCon = document.getElementById('modal-thumbnails');
        if (!mainImg || !thumbCon) return;

        if (images.length > 0) mainImg.src = images[0];

        thumbCon.innerHTML = '';
        images.forEach(function (src, idx) {
            var img       = document.createElement('img');
            img.src       = src;
            img.className = 'modal-thumb' + (idx === 0 ? ' active' : '');
            img.setAttribute('data-index', idx);
            img.addEventListener('click', function () {
                mainImg.src = this.src;
                document.querySelectorAll('.modal-thumb').forEach(function (t) { t.classList.remove('active'); });
                this.classList.add('active');
            });
            thumbCon.appendChild(img);
        });
    }

    function updateModalLinks(links) {
        var actEl = document.getElementById('modal-actions');
        if (!actEl) return;
        actEl.innerHTML = '';

        if (links.length > 2) {
            var cnt       = document.createElement('div');
            cnt.className = 'modal-links-count';
            cnt.innerHTML = '<i class="fas fa-link"></i> ' + links.length + ' link tersedia';
            actEl.appendChild(cnt);
        }

        links.forEach(function (lnk) {
            var a     = document.createElement('a');
            a.href    = lnk.url;
            a.target  = '_blank';
            a.rel     = 'noopener noreferrer';
            a.className = 'modal-link-btn ' + lnk.type;

            var iconMap = {
                website:   '<i class="fas fa-globe"></i>',
                behance:   '<i class="fab fa-behance"></i>',
                github:    '<i class="fab fa-github"></i>',
                figma:     '<i class="fab fa-figma"></i>',
                prototype: '<i class="fas fa-play-circle"></i>'
            };
            a.innerHTML = (iconMap[lnk.type] || '<i class="fas fa-external-link-alt"></i>') + ' ' + lnk.label;
            actEl.appendChild(a);
        });
    }

    function initThumbnailScroll() {
        var thumbsEl  = document.querySelector('.modal-thumbnails');
        var prevBtn   = document.getElementById('thumb-prev');
        var nextBtn   = document.getElementById('thumb-next');
        if (!thumbsEl || !prevBtn || !nextBtn) return;

        var total      = thumbsEl.children.length;
        var thumbW     = 80;
        var maxVisible = 6;
        var maxScroll  = Math.max(0, (total - maxVisible) * thumbW);
        var pos        = 0;

        function update() {
            prevBtn.disabled = pos <= 0;
            nextBtn.disabled = pos >= maxScroll;
        }

        function scrollTo(p) {
            pos = Math.max(0, Math.min(p, maxScroll));
            thumbsEl.style.transform = 'translateX(-' + pos + 'px)';
            update();
        }

        var np = prevBtn.cloneNode(true);
        var nn = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(np, prevBtn);
        nextBtn.parentNode.replaceChild(nn, nextBtn);

        np.addEventListener('click', function () { scrollTo(pos - thumbW); });
        nn.addEventListener('click', function () { scrollTo(pos + thumbW); });

        update();
    }
}
