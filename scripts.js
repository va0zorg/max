/* ============================================
   SCRIPTS.JS — Андрей Максимов Landing Page
   ============================================ */

// Включаем CSS-анимации только когда JS работает
document.documentElement.classList.add('js-loaded');

// ============================================
// LECTURE ICONS (images)
// ============================================
const lectureIconFiles = ['1','2','3','8','7','2','5','6'];
const lectureIcons = lectureIconFiles.map(n =>
  `<img src="images/icons/${n}.png" alt="" style="width:100%;height:100%;object-fit:contain;">`
);

// ============================================
// LECTURE DATA
// ============================================
const lectures = [
  {
    title: 'Как получать от людей нужную вам информацию',
    teaser: 'Тема для компаний, руководителей, взрослых аудиторий, HR и корпоративных мероприятий',
    body: `<p>Тема для компаний, руководителей, взрослых аудиторий, HR и корпоративных мероприятий. Лекция о том, как устроен результативный разговор, что делает вопрос сильным, почему люди часто не слышат друг друга и как выстраивать беседу так, чтобы она приводила к смыслу, а не к пустому обмену словами.</p>
    <p>Эта тема опирается не только на авторские наблюдения, но и на огромный практический опыт: за свою профессиональную жизнь Андрей Максимов провёл более 7 тысяч интервью.</p>`,
    outcomes: [
      'Понимание ключевых ошибок, мешающих эффективному общению',
      'Навыки получения информации через правильные вопросы',
      'Практические техники ведения диалога и интервью в повседневной жизни',
      'Инструменты для решения конфликтов и сложных разговоров',
      'Упражнения, которые можно сразу применять в работе и личной жизни'
    ]
  },
  {
    title: 'Как помочь человеку, когда ему плохо',
    teaser: 'Тема на основе психофилософии для широкой аудитории, клубов, психологических и книжных площадок',
    body: `<p>Тема на основе психофилософии для широкой аудитории, клубов, психологических и книжных площадок. Лекция о том, как разговаривать с человеком в трудном состоянии, как не навредить советами, как услышать его настоящую потребность и как поддерживать без давления, критики и назидания.</p>`,
    outcomes: [
      'Основы авторской системы психофилософии Андрея Максимова',
      'Понимание роли желаний в формировании жизненного пути',
      'Практические советы по оказанию поддержки близким',
      'Осознание влияния привычек на качество жизни',
      'Инструменты поиска смысла и внутренней опоры'
    ]
  },
  {
    title: 'Как не стать врагом своему ребёнку',
    teaser: 'Тема для родителей, школ, семейных клубов и образовательных площадок',
    body: `<p>Тема для родителей, школ, семейных клубов и образовательных площадок. Лекция о доверии, подростковом возрасте, личных границах ребёнка, поиске призвания, влиянии школы и гаджетов, а главное — о том, как не разрушить отношения попыткой всё контролировать.</p>
    <p>Важный акцент этой темы в том, что Андрей Максимов предлагает смотреть на ребёнка как на личность, а не как на объект воспитания.</p>`,
    outcomes: [
      'Взгляд на воспитание без давления и конфликтов',
      'Способы мотивации ребёнка без принуждения',
      'Подходы к формированию доверия в семье',
      'Практические решения типичных родительских проблем',
      'Понимание, как помочь ребёнку найти призвание'
    ]
  },
  {
    title: 'Поговорим начистоту',
    teaser: 'Встреча-диалог, где аудитория сама определяет тему для профессионального или жизненного разговора',
    body: `<p>Андрей Максимов занимается довольно большим количеством дел — он журналист, телевизионный ведущий, театральный режиссёр, психолог, педагог… На лекции он делится своими наблюдениями и размышлениями о работе в медиа, театре, психологии и воспитании, а тему встречи определяет сама аудитория.</p>
    <p>Лекция построена как открытый диалог: через 20 минут после начала зрители задают вопросы и получают развёрнутые, практические ответы от эксперта. Формат встречи создаёт ощущение близкого общения и индивидуальной консультации с наставником.</p>`,
    outcomes: [
      'Возможность задать личный или профессиональный вопрос эксперту',
      'Практические инсайты из медиа, педагогики и психологии',
      'Живое общение в формате открытого диалога',
      'Разбор реальных ситуаций участников',
      'Опыт индивидуальной консультации в публичном формате'
    ]
  },
  {
    title: 'Забытые открытия в педагогике',
    teaser: 'Лекция о великих педагогических идеях прошлого и их практическом применении сегодня',
    body: `<p>Лекция посвящена педагогическим открытиям великих учителей — Песталоцци, Корчака и Монтессори, о которых Максимов написал книги в серии ЖЗЛ. Участники узнают, как применять эти принципы в воспитании детей сегодня, строя систему обучения и развития, которая сочетает психологическую глубину и практическую ценность.</p>
    <p>Интерактивный формат позволяет обсуждать конкретные ситуации и находить решения прямо во время встречи.</p>`,
    outcomes: [
      'Знакомство с идеями Песталоцци, Корчака и Монтессори',
      'Понимание гуманистических принципов воспитания',
      'Практические методы развития ребёнка',
      'Инструменты построения эффективной образовательной среды',
      'Разбор реальных педагогических ситуаций'
    ]
  },
  {
    title: 'Корпоративное открытое интервью',
    teaser: 'Интерактивный формат публичного интервью первых лиц компании',
    body: `<p>Когда руководитель ищет способ проще и быстрее донести до сотрудников свои идеи, Максимов берёт публичное интервью у руководителя, с подключением вопросов сотрудников из зала. Это позволяет в формате открытого общения поднять важнейшие темы в работе компании.</p>
    <p>Такой формат идеально подходит для сопровождения изменений. Это профессиональная коммуникационная поддержка новой стратегии, масштабных организационных и технологических обновлений или прихода нового топ-менеджера на значимую позицию.</p>`,
    outcomes: [
      'Прозрачная коммуникация между руководством и командой',
      'Понимание целей и стратегии компании',
      'Возможность задать вопросы напрямую руководителю',
      'Формирование атмосферы открытого диалога',
      'Снижение сопротивления изменениям внутри коллектива'
    ]
  },
  {
    title: 'Вечер творческих',
    teaser: 'Встреча с историями о знаменитых людях и поэтической атмосферой камерного вечера',
    body: `<p>Максимов, как опытный интервьюер и автор более 7 тысяч публикаций, делится наблюдениями о знаменитых людях, раскрывая то, что остаётся за кадром. Каждый участник встречи может задать свой вопрос или предложить фамилию любой звезды — и Максимов расскажет об этом человеке, сопровождая рассказ кадрами из интервью.</p>
    <p>Вечер дополнен чтением собственных стихов и любимых поэтов, что создаёт атмосферу доверительного общения лампового квартирника.</p>`,
    outcomes: [
      'Уникальные истории о знаменитостях из личного опыта интервьюера',
      'Возможность задать вопрос о любом известном человеке',
      'Просмотр редких фрагментов интервью',
      'Живое творческое общение в неформальной атмосфере',
      'Живое чтение стихов'
    ]
  },
  {
    title: 'Обсудим тему лекции?',
    teaser: 'Индивидуально разработанная лекция под оговорённые задачи, цели и аудиторию',
    body: `<p>Андрей Максимов разрабатывает лекции с учётом конкретной задачи заказчика и особенностей аудитории. Он адаптирует содержание, акценты и формат выступления под цели мероприятия — будь то образовательный форум, корпоративная стратегическая сессия или публичная культурная встреча.</p>
    <p>Тематика может быть сфокусирована на психологии деловых отношений, коммуникации в команде, взаимодействии руководителя и сотрудников, семейных ценностях или воспитании. Лекция может включать разбор реальных кейсов и ответы на вопросы.</p>`,
    outcomes: [
      'Индивидуальная разработка содержания и формата лекции',
      'Создание концепции и режиссура мероприятия',
      'Адаптация под цели и особенности аудитории',
      'Возможность долгосрочного партнёрства по циклу проектов',
      'Разбор реальных кейсов из практики заказчика'
    ]
  }
];

// ============================================
// MODAL SYSTEM
// ============================================
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(event, id) {
  if (event.target === event.currentTarget) {
    closeModal(id);
  }
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ============================================
// LECTURE MODAL
// ============================================
function openLectureModal(index) {
  const lecture = lectures[index];
  if (!lecture) return;

  const iconEl = document.getElementById('lectureModalIcon');
  iconEl.innerHTML = lectureIcons[index] || '';
  iconEl.style.cssText = 'display:block;width:52px;height:52px;margin-bottom:1rem;';

  document.getElementById('lectureModalTitle').textContent = lecture.title;

  const bodyEl = document.getElementById('lectureModalBody');
  bodyEl.innerHTML = lecture.body;
  if (lecture.teaser) {
    bodyEl.innerHTML = `<p class="lecture-modal-teaser">${lecture.teaser}</p>` + lecture.body;
  }

  const list = document.getElementById('lectureOutcomesList');
  list.innerHTML = lecture.outcomes.map(o => `<li>${o}</li>`).join('');

  const outcomesBlock = document.getElementById('lectureOutcomes');
  outcomesBlock.querySelector('h4').textContent = 'Что получит аудитория';

  openModal('modal-lecture');
}

// ============================================
// NAVIGATION
// ============================================
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

function toggleMobileMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('mobile-open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('mobile-open');
  });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-in').forEach(el => {
  observer.observe(el);
});

// ============================================
// HERO INITIAL ANIMATION
// ============================================
window.addEventListener('load', () => {
  const heroItems = document.querySelectorAll('#hero .animate-in');
  heroItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200 + i * 100);
  });
});

// ============================================
// SMOOTH SCROLL (fallback for older browsers)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================
// BOOK PLACEHOLDER COLORS
// Fills book covers with grayscale placeholders if images not loaded
// ============================================
document.querySelectorAll('.book-cover').forEach((img, i) => {
  img.addEventListener('error', function() {
    const grays = ['#2a2a2a', '#3d3d3d', '#4a4a4a', '#555', '#666', '#444', '#333', '#3a3a3a', '#505050', '#5a5a5a', '#454545'];
    const parent = this.parentElement;
    parent.style.background = grays[i % grays.length];
    parent.style.display = 'flex';
    parent.style.alignItems = 'center';
    parent.style.justifyContent = 'center';
    this.style.display = 'none';

    const title = parent.getAttribute('title') || '';
    if (title) {
      const label = document.createElement('div');
      label.style.cssText = `
        color: rgba(255,255,255,0.6);
        font-family: 'PT Serif', serif;
        font-size: 0.75rem;
        text-align: center;
        padding: 1rem 0.5rem;
        line-height: 1.4;
      `;
      label.textContent = title;
      parent.appendChild(label);
    }
  });
});

// ============================================
// PHOTO PLACEHOLDER (if images missing)
// ============================================
document.querySelectorAll('.hero-photo img, .bio-photo img, .theatre-photo img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
    this.parentElement.style.background = '#2a2a2a';
  });
});

// ============================================
// BIO PHOTO SLIDER
// ============================================
(function() {
  var current = 0;
  var total = 12;

  function initSlider() {
    var dots = document.getElementById('bioSliderDots');
    if (!dots) return;
    dots.innerHTML = '';
    for (var i = 0; i < total; i++) {
      var d = document.createElement('span');
      d.className = 'bio-slider-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('data-idx', i);
      d.onclick = (function(idx) { return function() { goTo(idx); }; })(i);
      dots.appendChild(d);
    }
  }

  function goTo(idx) {
    current = (idx + total) % total;
    var track = document.getElementById('bioSliderTrack');
    if (track) track.style.transform = 'translateX(-' + (current * 100) + '%)';
    var dots = document.querySelectorAll('.bio-slider-dot');
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  window.bioSliderMove = function(dir) { goTo(current + dir); };

  // Init on DOM ready and also when modal opens
  document.addEventListener('DOMContentLoaded', initSlider);

  // Re-init when bio modal is opened (dots may not exist yet on first load)
  var origOpen = window.openModal;
  window.openModal = function(id) {
    origOpen(id);
    if (id === 'modal-bio') {
      setTimeout(function() { initSlider(); goTo(0); }, 50);
    }
  };
})();
