// ── Modals ───────────────────────────────────────
function openModal(name) {
  const modal = document.getElementById(`modal-${name}`);
  if (modal) modal.classList.add('show');
}

function closeModal(name) {
  const modal = document.getElementById(`modal-${name}`);
  if (modal) modal.classList.remove('show');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('show');
  });
});

function submitForm(modalName, successMsg) {
  closeModal(modalName);
  showToast('✅', successMsg);
}


// ── Toast ────────────────────────────────────────
let toastTimer;

function showToast(icon, msg) {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  const toastMsg = document.getElementById('toastMsg');

  if (!toast || !toastIcon || !toastMsg) return;

  toastIcon.textContent = icon;
  toastMsg.textContent = msg;

  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}


// ── Result ───────────────────────────────────────
function checkResult() {
  const termEl = document.getElementById('vr-term');
  const nameEl = document.getElementById('vr-name');

  if (!termEl) return;

  const term = termEl.value;
  const name = nameEl ? nameEl.value : 'Unknown Student';

  if (term === 'final') {
    showToast('⚠️', 'Final results not announced yet.');
    return;
  }

  const form = document.getElementById('check-result-form');
  const display = document.getElementById('result-display');

  if (form) form.style.display = 'none';

  const resName = document.getElementById('res-name');
  const resExam = document.getElementById('res-exam');

  if (resName) resName.innerText = name;

  if (termEl && resExam) {
    resExam.innerText = termEl.options[termEl.selectedIndex].text;
  }

  if (display) display.style.display = 'block';
}


// ── Attendance ───────────────────────────────────
function loadAttendanceRoster() {
  const roster = document.getElementById('ma-roster');
  if (roster) roster.style.display = 'block';
}

function submitAttendance() {
  closeModal('mark-attendance');

  const className = document.getElementById('ma-class')?.value || '';
  const section = document.getElementById('ma-section')?.value || '';

  const title = `Class ${className.replace('Class ', '')}-${section}`;

  showToast('✅', `Student attendance saved for ${title}!`);
}

function submitTeacherAttendance() {
  closeModal('teacher-attendance');
  showToast('✅', 'Teacher attendance saved successfully!');
}




// ── PAGE NAVIGATION ─────────────────────────────
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");

navItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // stop "#" reload

    const targetPage = item.dataset.page;

    // remove active from all nav items
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // show selected page
    const activePage = document.getElementById("page-" + targetPage);
    if (activePage) activePage.classList.add("active");

    // update title
    if (pageTitle) {
      pageTitle.innerText =
        targetPage.charAt(0).toUpperCase() + targetPage.slice(1);
    }
  });
});