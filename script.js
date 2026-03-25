/* ============================================================
   PORTOFOLIO MUAMMAR — SCRIPT.JS
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

// ===== PROJECT FILTER (project.html) =====
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns  = document.querySelectorAll('.filter-btn');
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
                        item.style.opacity = '0';
                        item.style.display = 'block';
                        setTimeout(function () { item.style.opacity = '1'; }, 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(function () { item.style.display = 'none'; }, 250);
                    }
                });
            });
        });
    }

    // ===== MODAL =====
    initModal();
});

// ===== MODAL FUNCTIONALITY =====
function initModal() {
    const modal      = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    if (!modal || !projectCards.length) return;

    // Project data
    var projectData = {
        'Northbird Logo Design': {
            title: 'Northbird Logo Design',
            category: 'Branding',
            year: '2025',
            description: 'Symbol logo design with modern and minimalist approach. Perfect for branding and corporate identity. Vertical logo design that represents strength and elegance. Proses desain meliputi riset, sketsa, digitalisasi, dan finalisasi.',
            tags: ['Logo', 'Branding', 'Minimalist', 'Symbol', 'Corporate Identity'],
            images: [
                'foto/foto22.png','foto/foto21.png','foto/foto22.png','foto/foto21.png',
                'foto/foto22.png','foto/foto21.png','foto/foto22.png','foto/foto21.png',
                'foto/foto22.png','foto/foto21.png'
            ],
            links: [
                { type: 'behance',  url: 'https://behance.net/gallery/12345', label: 'Lihat di Behance' },
                { type: 'website',  url: 'https://example.com',               label: 'Website Project' },
                { type: 'figma',    url: 'https://figma.com/file/123',        label: 'File Figma' }
            ]
        },
        'Ronas IT | UI/UX Team': {
            title: 'Ronas IT | UI/UX Team',
            category: 'UI/UX',
            year: '2025',
            description: 'UI/UX design untuk aplikasi laundry sepatu. Meliputi proses research, wireframing, prototyping, dan user testing. Desain fokus pada kemudahan penggunaan dan efisiensi workflow.',
            tags: ['UI/UX', 'Mobile App', 'Web Design', 'Prototyping', 'Figma', 'User Research'],
            images: [
                'foto/foto45.png','foto/foto46.png','foto/foto47.png','foto/foto48.png'
            ],
            links: [
                { type: 'prototype', url: 'https://figma.com/proto/123',         label: 'Live Prototype' },
                { type: 'behance',   url: 'https://behance.net/gallery/54321',   label: 'Case Study' },
                { type: 'github',    url: 'https://github.com/username/project', label: 'Repository' },
                { type: 'website',   url: 'https://ronasit.com',                 label: 'Company Website' }
            ]
        },
        'Website Monitoring Progres Hafalan': {
            title: 'Website Monitoring Progres Hafalan',
            category: 'Web',
            year: '2025',
            description: "Website untuk memantau progres hafalan Al-Qur'an dengan fitur tracking dan reporting. Dibangun dengan PHP dan MySQL. Fitur: login multi-user (admin, guru, santri), dashboard interaktif, laporan hafalan harian, grafik progres, dan notifikasi otomatis.",
            tags: ['Web Development', 'PHP', 'MySQL', 'Dashboard', 'Bootstrap', 'Chart.js'],
            images: [
                'foto/foto13.png','foto/foto12.png','foto/foto11.png','foto/foto14.png',
                'foto/foto13.png','foto/foto12.png','foto/foto11.png','foto/foto14.png',
                'foto/foto13.png'
            ],
            links: [
                { type: 'website',   url: 'https://demo-hafalan.com',                   label: 'Live Demo' },
                { type: 'github',    url: 'https://github.com/username/hafalan-app',    label: 'Source Code' },
                { type: 'prototype', url: 'https://figma.com/proto/456',                label: 'UI Prototype' }
            ]
        },
        'Mobile App Design': {
            title: 'Mobile App Design',
            category: 'Mobile',
            year: '2025',
            description: 'Mobile app design dengan modern interface dan smooth user experience. Dirancang menggunakan Figma. Tema dark mode dan light mode, dengan komponen yang reusable dan design system yang konsisten.',
            tags: ['Mobile App', 'UI/UX', 'Figma', 'Prototype', 'iOS', 'Android', 'Design System'],
            images: [
                'foto/foto14.png','foto/foto13.png','foto/foto12.png','foto/foto11.png',
                'foto/foto14.png','foto/foto13.png','foto/foto12.png','foto/foto11.png',
                'foto/foto14.png','foto/foto13.png','foto/foto12.png'
            ],
            links: [
                { type: 'figma',     url: 'https://figma.com/file/789',          label: 'Figma File' },
                { type: 'prototype', url: 'https://figma.com/proto/789',          label: 'Interactive Prototype' },
                { type: 'behance',   url: 'https://behance.net/gallery/98765',   label: 'Portfolio' },
                { type: 'website',   url: 'https://dribbble.com/shots/12345',    label: 'Dribbble Shot' }
            ]
        }
    };

    var defaultData = {
        title: 'Project Title',
        category: 'Design',
        year: '2025',
        description: 'Project description goes here.',
        tags: ['Design', 'Creative'],
        images: ['foto/foto12.png', 'foto/foto11.png', 'foto/foto13.png', 'foto/foto14.png'],
        links: [{ type: 'website', url: '#', label: 'Lihat Demo' }]
    };

    // Open modal
    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var title = this.querySelector('h3') ? this.querySelector('h3').textContent : '';
            var data  = projectData[title] || defaultData;
            updateModal(data);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            setTimeout(function () { initThumbnailScroll(); }, 80);
        });
    });

    // Close
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (modalClose) { modalClose.addEventListener('click', closeModal); }
    window.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });

    // Update modal content
    function updateModal(data) {
        document.getElementById('modal-title').textContent       = data.title;
        document.getElementById('modal-category').textContent    = data.category;
        document.getElementById('modal-year').textContent        = data.year;
        document.getElementById('modal-description').textContent = data.description;

        // Tags
        var tagsEl = document.getElementById('modal-tags');
        tagsEl.innerHTML = '';
        data.tags.forEach(function (t) {
            var s = document.createElement('span');
            s.className   = 'modal-tag';
            s.textContent = t;
            tagsEl.appendChild(s);
        });

        // Images
        updateImages(data.images);

        // Links
        updateLinks(data.links);
    }

    function updateImages(images) {
        var mainImg  = document.getElementById('modal-main-img');
        var thumbCon = document.getElementById('modal-thumbnails');
        if (!mainImg || !thumbCon) return;

        if (images.length > 0) mainImg.src = images[0];

        thumbCon.innerHTML = '';
        images.forEach(function (src, idx) {
            var img = document.createElement('img');
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

    function updateLinks(links) {
        var actEl = document.getElementById('modal-actions');
        actEl.innerHTML = '';

        if (links.length > 2) {
            var cnt = document.createElement('div');
            cnt.className = 'modal-links-count';
            cnt.innerHTML = '<i class="fas fa-link"></i> ' + links.length + ' link tersedia';
            actEl.appendChild(cnt);
        }

        links.forEach(function (lnk) {
            var a = document.createElement('a');
            a.href      = lnk.url;
            a.target    = '_blank';
            a.rel       = 'noopener noreferrer';
            a.className = 'modal-link-btn ' + lnk.type;

            var iconMap = {
                website: '<i class="fas fa-globe"></i>',
                behance: '<i class="fab fa-behance"></i>',
                github:  '<i class="fab fa-github"></i>',
                figma:   '<i class="fab fa-figma"></i>',
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
        var thumbW     = 80;   // 72px + 8px gap
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

        // Replace buttons to remove old listeners
        var np = prevBtn.cloneNode(true);
        var nn = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(np, prevBtn);
        nextBtn.parentNode.replaceChild(nn, nextBtn);

        np.addEventListener('click', function () { scrollTo(pos - thumbW); });
        nn.addEventListener('click', function () { scrollTo(pos + thumbW); });

        update();
    }
}
