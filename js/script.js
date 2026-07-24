// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal animations (mirrors the fade/slide-in effect on intuit.com/careers)
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mailto clipboard fallback — gives visible feedback even without a default mail client
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener('click', () => {
    const email = link.href.replace('mailto:', '').split('?')[0];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {});
    }
  });
});

// "View More" — reveals the remaining experience cards
const viewMoreBtn = document.getElementById('view-more-btn');
const timelineExtra = document.getElementById('timeline-extra');

if (viewMoreBtn && timelineExtra) {
  viewMoreBtn.addEventListener('click', () => {
    timelineExtra.classList.add('show');
    timelineExtra.querySelectorAll('.reveal').forEach((el) => {
      observer.unobserve(el);
      requestAnimationFrame(() => el.classList.add('in-view'));
    });
    viewMoreBtn.remove();
  });
}

// Projects carousel — edit this array to update your projects
const projectsData = [
  {
    title: 'Tickrate',
    description:
      'A multi-agent AI system that turns a stock ticker into a grounded, fact-checked research memo. A Researcher and an independent Critic agent cross-check every claim against real SEC filings using retrieval-augmented search, alongside a statistical price forecast and a tracked daily up or down prediction.',
    tags: ['Agentic AI', 'RAG', 'Python'],
    code: 'https://github.com/pranav-darga/tickrate',
    demo: 'https://vantage-alpha-pearl.vercel.app',
    siteLogo: 'assets/logos/vantage-mark.svg',
    image: 'assets/projects/tickrate-homescreen.jpg',
    gradient: 'linear-gradient(135deg, #7e14ff, #47bfff)',
  },
  {
    title: 'Vantage',
    description:
      "The read-only frontend for Tickrate: a watchlist summary, per-ticker research pages with full source citations, and a prediction-accuracy dashboard.",
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    code: 'https://github.com/pranav-darga/vantage',
    demo: null,
    gradient: 'linear-gradient(135deg, #1456f0, #0a2540)',
  },
];

const thumbPrev = document.getElementById('thumb-prev');
const thumbCurrent = document.getElementById('thumb-current');
const thumbNext = document.getElementById('thumb-next');
const currentLink = document.getElementById('current-link');
const sliderDots = document.getElementById('slider-dots');
const countCurrent = document.getElementById('count-current');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');
const detailTags = document.getElementById('detail-tags');
const detailCode = document.getElementById('detail-code');
const detailDemo = document.getElementById('detail-demo');
const detailDemoLogo = document.getElementById('detail-demo-logo');

if (thumbCurrent && projectsData.length) {
  const total = projectsData.length;
  let current = 0;

  const wrap = (n) => ((n % total) + total) % total;

  sliderDots.innerHTML = '';
  projectsData.forEach((project, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.style.background = project.gradient;
    dot.setAttribute('aria-label', `View project ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    sliderDots.appendChild(dot);
  });

  document.getElementById('count-total').textContent = total;

  function applyThumb(el, project) {
    if (project.image) {
      el.style.backgroundImage = `url("${project.image}")`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.backgroundRepeat = 'no-repeat';
    } else {
      el.style.backgroundImage = project.gradient;
      el.style.backgroundSize = '';
      el.style.backgroundPosition = '';
      el.style.backgroundRepeat = '';
    }
  }

  function render() {
    const prevIdx = wrap(current - 1);
    const nextIdx = wrap(current + 1);

    applyThumb(thumbPrev, projectsData[prevIdx]);
    applyThumb(thumbCurrent, projectsData[current]);
    applyThumb(thumbNext, projectsData[nextIdx]);

    const project = projectsData[current];

    if (project.demo) {
      currentLink.href = project.demo;
      currentLink.style.display = '';
    } else {
      currentLink.style.display = 'none';
    }

    detailTitle.textContent = project.title;
    detailDesc.textContent = project.description;
    detailTags.innerHTML = '';
    project.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      detailTags.appendChild(li);
    });
    detailCode.href = project.code;

    if (project.demo) {
      detailDemo.href = project.demo;
      detailDemo.style.display = '';
      if (project.siteLogo) {
        detailDemoLogo.src = project.siteLogo;
        detailDemoLogo.alt = `${project.title} site logo`;
        detailDemoLogo.style.display = '';
      } else {
        detailDemoLogo.style.display = 'none';
      }
    } else {
      detailDemo.style.display = 'none';
    }

    countCurrent.textContent = current + 1;

    sliderDots.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    current = wrap(index);
    render();
  }

  document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => goTo(current + 1));
  thumbPrev.addEventListener('click', () => goTo(current - 1));
  thumbNext.addEventListener('click', () => goTo(current + 1));

  render();
}
