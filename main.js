// HASH ROUTER
const router = function() {
  var pages = document.querySelectorAll('.page-section');
  var hash = window.location.hash || '#home';
  pages.forEach(function(page) {
    page.classList.remove('active');
    if ('#' + page.id === hash) page.classList.add('active');
  });
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    var isActive = link.getAttribute('href') === hash;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  window.scrollTo(0, 0);
  document.getElementById('navbarLinks').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// MOBILE MENU
var hamburger = document.getElementById('hamburger');
var navbarLinks = document.getElementById('navbarLinks');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// NAVBAR SCROLL
var navbar = document.getElementById('navbar');
var scrollHandler = function() {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
};
window.addEventListener('scroll', scrollHandler, { passive: true });

// TEAM PHOTO URLS - Replace with actual photo URLs when available
// Team members can use placeholder photos from a service like https://ui-avatars.com/ or uploaded images

// PARTICLE CANVAS
var canvas = document.getElementById('particleCanvas');
if (canvas) {
  var ctx = canvas.getContext('2d');
  var particles = [];
  var resizeCanvas = function() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }
  Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  };
  Particle.prototype.draw = function() {
    ctx.fillStyle = 'rgba(200, 134, 42, 0.2)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  var initParticles = function() {
    particles = [];
    for (var i = 0; i < 80; i++) particles.push(new Particle());
  };

  var connectParticles = function() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.strokeStyle = 'rgba(27, 42, 74, 0.1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  var animateParticles = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animateParticles);
  };

  initParticles();
  animateParticles();
}

// SCROLL REVEAL
var scrollReveals = document.querySelectorAll('[data-scroll-reveal]');
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

scrollReveals.forEach(function(el) { revealObserver.observe(el); });

// COUNTER ANIMATION
var counters = document.querySelectorAll('[data-counter]');
var counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-counter'));
      var suffix = el.getAttribute('data-suffix') || '';
      var current = 0;
      var increment = target / 100;
      var duration = 2000;
      var stepTime = duration / 100;

      var updateCounter = function() {
        current += increment;
        if (current >= target) {
          el.textContent = target + suffix;
          return;
        }
        el.textContent = Math.floor(current) + suffix;
        setTimeout(updateCounter, stepTime);
      };
      updateCounter();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(function(c) { counterObserver.observe(c); });

// TESTIMONIALS CAROUSEL
var carouselTrack = document.getElementById('carouselTrack');
var carouselDots = document.getElementById('carouselDots');
if (carouselTrack && typeof testimonials !== 'undefined') {
  var currentSlide = 0;
  testimonials.forEach(function(t, i) {
    var item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = '<p class="quote">"' + t.quote + '"</p><p class="author">' + t.name + '</p><p class="company">' + t.company + '</p><div class="rating">' + '\u2605'.repeat(t.rating) + '\u2606'.repeat(5 - t.rating) + '</div>';
    carouselTrack.appendChild(item);

    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Aller au témoignage ' + (i + 1));
    (function(index) {
      dot.addEventListener('click', function() { goToSlide(index); });
    })(i);
    carouselDots.appendChild(dot);
  });

  var goToSlide = function(index) {
    currentSlide = index;
    carouselTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
    var dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(function(d, i) { d.classList.toggle('active', i === index); });
  };

  setInterval(function() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(currentSlide);
  }, 5000);

  var touchStartX = 0;
  carouselTrack.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  carouselTrack.addEventListener('touchend', function(e) {
    var touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) goToSlide((currentSlide + 1) % testimonials.length);
    if (touchEndX - touchStartX > 50) goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  });
}

// SERVICES PREVIEW
var servicesPreviewGrid = document.getElementById('servicesPreviewGrid');
if (servicesPreviewGrid && typeof services !== 'undefined') {
  services.slice(0, 3).forEach(function(service) {
    var card = document.createElement('div');
    card.className = 'card service-card';
    card.innerHTML = service.icon + '<h3>' + service.title + '</h3><p>' + service.description.split('.')[0] + '.</p>';
    servicesPreviewGrid.appendChild(card);
  });
}

// FEATURED PROJECTS
var featuredProjectsGrid = document.getElementById('featuredProjectsGrid');
if (featuredProjectsGrid && typeof projects !== 'undefined') {
  projects.slice(0, 3).forEach(function(project) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = '<div class="project-card-overlay"><h3>' + project.name + '</h3><p>' + project.location + ' \u2022 ' + project.year + '</p></div>';
    featuredProjectsGrid.appendChild(card);
  });
}

// TIMELINE
var timelineEl = document.getElementById('timeline');
if (timelineEl && typeof timeline !== 'undefined') {
  timeline.forEach(function(entry, i) {
    var div = document.createElement('div');
    div.className = 'timeline-entry';
    div.setAttribute('data-scroll-reveal', i % 2 === 0 ? 'slide-left' : 'slide-right');
    div.innerHTML = '<div class="timeline-year">' + entry.year + '</div><h3>' + entry.title + '</h3><p>' + entry.description + '</p>';
    timelineEl.appendChild(div);
  });
  document.querySelectorAll('#timeline [data-scroll-reveal]').forEach(function(el) { revealObserver.observe(el); });
}

// VALUES GRID
var valuesGrid = document.getElementById('valuesGrid');
if (valuesGrid) {
  var values = [
    { title: 'Qualité', icon: '<svg width="48" height="48" viewBox="0 0 24 24"><path d="M12 2L14.4 8.6L21 9.6L16 14.6L17.2 21L12 17.8L6.8 21L8 14.6L3 9.6L9.6 8.6L12 2Z" fill="var(--color-accent)"/></svg>', desc: 'Nous garantissons une finition impeccable sur chaque projet, conforme aux plus hautes normes.' },
    { title: 'Confiance', icon: '<svg width="48" height="48" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM10 14.5L7.5 12L6.09 13.41L10 17.33L18 9.33L16.59 7.92L10 14.5Z" fill="var(--color-accent)"/></svg>', desc: 'La transparence et l\'honnêteté guident nos relations avec clients et partenaires.' },
    { title: 'Innovation', icon: '<svg width="48" height="48" viewBox="0 0 24 24"><path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.13 2 5 5.13 5 9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2ZM12 14C9.24 14 7 11.76 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.76 14.76 14 12 14Z" fill="var(--color-accent)"/></svg>', desc: 'Nous adoptons les technologies de pointe pour des constructions plus durables.' },
    { title: 'Sécurité', icon: '<svg width="48" height="48" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 2.19V11.99Z" fill="var(--color-accent)"/></svg>', desc: 'La sécurité de nos équipes et de nos clients est notre priorité absolue.' },
    { title: 'Engagement', icon: '<svg width="48" height="48" viewBox="0 0 24 24"><path d="M22 9.5V12H18.5C16.57 12 14.81 12.88 13.66 14.34L12 16.34L10.34 14.34C9.19 12.88 7.43 12 5.5 12H2V9.5C2 8.12 3.12 7 4.5 7H5.5C6.88 7 8 8.12 8 9.5V12H10.5V9.5C10.5 8.12 11.62 7 13 7H14C15.38 7 16.5 8.12 16.5 9.5V12H19V9.5C19 8.12 20.12 7 21.5 7H22.5C23.88 7 25 8.12 25 9.5V12H22Z" fill="var(--color-accent)"/></svg>', desc: 'Nous nous engageons à respecter les délais et les budgets annoncés.' }
  ];
  values.forEach(function(val) {
    var card = document.createElement('div');
    card.className = 'card value-card';
    card.innerHTML = val.icon + '<h3>' + val.title + '</h3><p>' + val.desc + '</p>';
    valuesGrid.appendChild(card);
  });
}

// SERVICES GRID
var servicesGrid = document.getElementById('servicesGrid');
if (servicesGrid && typeof services !== 'undefined') {
  services.forEach(function(service, i) {
    var card = document.createElement('div');
    card.className = 'card service-card stagger';
    card.style.setProperty('--stagger-index', i);
    card.style.transitionDelay = (i * 100) + 'ms';
    card.innerHTML = service.icon + '<h3>' + service.title + '</h3><p>' + service.description + '</p><a href="#contact" class="btn btn-outline" style="margin-top:var(--space-sm)">En Savoir Plus</a>';
    servicesGrid.appendChild(card);
    revealObserver.observe(card);
  });
}

// TEAM GRID
var teamGrid = document.getElementById('teamGrid');
if (teamGrid && typeof team !== 'undefined') {
  team.forEach(function(member) {
    var card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = '<div class="team-card-inner"><div class="team-card-front"><img src="' + member.photo + '" alt="' + member.name + '" class="team-photo"><h3>' + member.name + '</h3><p>' + member.role + '</p></div><div class="team-card-back"><h3>' + member.name + '</h3><p>' + member.bio + '</p></div></div>';
    teamGrid.appendChild(card);
  });
}

// PROJECTS GRID & FILTER
var projectsGrid = document.getElementById('projectsGrid');
var filterBar = document.getElementById('filterBar');
var loadMoreBtn = document.getElementById('loadMoreBtn');
var visibleProjects = 6;

var renderProjects = function(filter) {
  filter = filter || 'Tous';
  if (!projectsGrid || typeof projects === 'undefined') return;
  projectsGrid.innerHTML = '';
  var filtered = filter === 'Tous' ? projects : projects.filter(function(p) { return p.categories.indexOf(filter) !== -1; });
  var toShow = filtered.slice(0, visibleProjects);
  toShow.forEach(function(project) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.categories = project.categories.join(',');
    card.innerHTML = '<div class="project-card-image" style="background-image:url(\'' + project.image + '\')"></div><div class="project-card-overlay"><span style="background:var(--color-accent);color:white;padding:2px 8px;border-radius:var(--radius-sm);font-size:0.8rem">' + project.category + '</span><h3>' + project.name + '</h3><p>' + project.location + ' \u2022 ' + project.year + '</p><button class="btn btn-outline" style="margin-top:var(--space-sm);font-size:0.9rem;padding:var(--space-xs) var(--space-sm)" data-project-id="' + project.id + '">Détails</button></div>';
    projectsGrid.appendChild(card);
  });
  var detailBtns = document.querySelectorAll('[data-project-id]');
  detailBtns.forEach(function(btn) {
    btn.addEventListener('click', function() { openProjectModal(btn.dataset.projectId); });
  });
  loadMoreBtn.style.display = visibleProjects >= filtered.length ? 'none' : 'block';
};

if (filterBar) {
  filterBar.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      e.target.classList.add('active');
      visibleProjects = 6;
      renderProjects(e.target.dataset.filter);
    }
  });
}
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function() {
    visibleProjects = 9;
    renderProjects(document.querySelector('.filter-btn.active').dataset.filter);
  });
}

// PROJECT MODAL
var projectModal = document.getElementById('projectModal');
var openProjectModal = function(id) {
  if (typeof projects === 'undefined') return;
  var project = projects.find(function(p) { return p.id === id; });
  if (!project || !projectModal) return;
  projectModal.querySelector('.modal-title').textContent = project.name;
  projectModal.querySelector('.modal-category').textContent = project.category;
  projectModal.querySelector('.modal-location').textContent = project.location;
  projectModal.querySelector('.modal-year').textContent = project.year;
  projectModal.querySelector('.modal-surface').textContent = project.surface;
  projectModal.querySelector('.modal-duration').textContent = project.duration;
  projectModal.querySelector('.modal-client').textContent = project.client;
  projectModal.querySelector('.modal-description').textContent = project.description;
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

if (projectModal) {
  projectModal.querySelector('.modal-close').addEventListener('click', function() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  });
  projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// CONTACT FORM
var contactForm = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      contactForm.style.display = 'none';
      formSuccess.hidden = false;
    } else {
      contactForm.reportValidity();
    }
  });
}

// FAQ ACCORDION
var faqAccordion = document.getElementById('faqAccordion');
if (faqAccordion && typeof faq !== 'undefined') {
  faq.forEach(function(item, i) {
    var faqItem = document.createElement('div');
    faqItem.className = 'faq-item' + (i === 0 ? ' active' : '');
    faqItem.innerHTML = '<button class="faq-question">' + item.question + '<span>' + (i === 0 ? '\u2212' : '+') + '</span></button><div class="faq-answer"><p>' + item.answer + '</p></div>';
    faqAccordion.appendChild(faqItem);
  });

  faqAccordion.addEventListener('click', function(e) {
    var questionBtn = e.target.closest('.faq-question');
    if (!questionBtn) return;
    var item = questionBtn.parentElement;
    var isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('active');
      i.querySelector('span').textContent = '+';
    });
    if (!isActive) {
      item.classList.add('active');
      questionBtn.querySelector('span').textContent = '\u2212';
    }
  });
}

// INITIAL RENDERS
renderProjects();
