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
    title: 'Project Name',
    description: 'Short description of what the project does and the problem it solves.',
    tags: ['React', 'Node'],
    code: 'https://github.com/yourusername/project-one',
    demo: '#',
    gradient: 'linear-gradient(135deg, #1456f0, #0a2540)',
  },
  {
    title: 'Project Name',
    description: 'Short description of what the project does and the problem it solves.',
    tags: ['Python', 'ML'],
    code: 'https://github.com/yourusername/project-two',
    demo: '#',
    gradient: 'linear-gradient(135deg, #f97316, #fbbf24)',
  },
  {
    title: 'Project Name',
    description: 'Short description of what the project does and the problem it solves.',
    tags: ['Swift', 'iOS'],
    code: 'https://github.com/yourusername/project-three',
    demo: '#',
    gradient: 'linear-gradient(135deg, #c084fc, #e879a0)',
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

  function render() {
    const prevIdx = wrap(current - 1);
    const nextIdx = wrap(current + 1);

    thumbPrev.style.background = projectsData[prevIdx].gradient;
    thumbCurrent.style.background = projectsData[current].gradient;
    thumbNext.style.background = projectsData[nextIdx].gradient;

    currentLink.href = projectsData[current].demo;

    detailTitle.textContent = projectsData[current].title;
    detailDesc.textContent = projectsData[current].description;
    detailTags.innerHTML = '';
    projectsData[current].tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      detailTags.appendChild(li);
    });
    detailCode.href = projectsData[current].code;
    detailDemo.href = projectsData[current].demo;

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
