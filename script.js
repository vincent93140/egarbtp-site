const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('quote-form');
if (form) {
  const file = form.elements.attachment;
  const validateFile = () => {
    const attachment = file.files[0];
    let error = '';
    if (attachment && attachment.size > 5 * 1024 * 1024) error = 'Le fichier dépasse 5 Mo. Choisissez un fichier plus léger.';
    else if (attachment && !/\\.(jpe?g|png|webp|pdf)$/i.test(attachment.name)) error = 'Choisissez une image JPG, PNG, WebP ou un document PDF.';
    file.setCustomValidity(error);
    return !error;
  };
  file.addEventListener('change', () => { validateFile(); file.reportValidity(); });
  form.addEventListener('submit', event => {
    if (!validateFile()) event.preventDefault();
  });
}
