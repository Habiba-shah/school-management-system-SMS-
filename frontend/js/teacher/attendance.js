document.addEventListener('DOMContentLoaded', function() {
    const classSelect = document.getElementById('class-select');
    const dateSelect = document.getElementById('date-select');
    const studentListContainer = document.getElementById('student-list-container');
    const noClassMessage = document.getElementById('no-class-message');
    const presentCountEl = document.getElementById('present-count');
    const submitBtn = document.querySelector('.submit-attendance-btn');
    
    // Set current date
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    if (dateSelect) {
        dateSelect.value = today;
    }

    function updateSummary() {
        const total = document.querySelectorAll('.attendance-toggle').length;
        const checkedCount = document.querySelectorAll('.attendance-toggle:checked').length;
        if (presentCountEl && presentCountEl.parentNode) {
            presentCountEl.parentNode.innerHTML = `<span id="present-count">${checkedCount}</span>/${total} Present`;
        }
    }

    function attachToggleListeners() {
        const toggles = document.querySelectorAll('.attendance-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', function() {
                const badge = this.closest('.attendance-actions').querySelector('.status-badge');
                if (this.checked) {
                    badge.textContent = 'Present';
                    badge.classList.remove('absent');
                    badge.classList.add('present');
                } else {
                    badge.textContent = 'Absent';
                    badge.classList.remove('present');
                    badge.classList.add('absent');
                }
                updateSummary();
            });
        });
        updateSummary();
    }

    const firstNames = ["John", "Emma", "Alex", "Mia", "Ethan", "Ava", "Noah", "Isabella", "William", "Sophia"];
    const lastNames = ["Smith", "Davis", "Turner", "Garcia", "Lee", "Martinez", "Thomas", "Clark", "Rodriguez", "Lewis"];

    if (classSelect) {
        classSelect.addEventListener('change', function() {
            const classVal = this.value;
            if (classVal) {
                noClassMessage.style.display = 'none';
                studentListContainer.style.display = 'block';
                submitBtn.style.display = 'block';
                
                let html = '';
                // Generate a fixed number of students based on class selection
                const numStudents = 6 + (parseInt(classVal) % 5); // 6 to 10 students
                for(let i=1; i<=numStudents; i++) {
                    const id = parseInt(classVal) * 1000 + i;
                    const name = firstNames[(parseInt(classVal) + i) % firstNames.length] + " " + lastNames[(parseInt(classVal) * i) % lastNames.length];
                    html += `
                        <div class="attendance-item">
                            <span class="student-id">${id}</span>
                            <span class="student-name">${name}</span>
                            <div class="attendance-actions">
                                <span class="status-badge present">Present</span>
                                <label class="switch">
                                    <input type="checkbox" checked class="attendance-toggle">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    `;
                }
                studentListContainer.innerHTML = html;
                attachToggleListeners();
            } else {
                noClassMessage.style.display = 'block';
                studentListContainer.style.display = 'none';
                submitBtn.style.display = 'none';
                if(presentCountEl && presentCountEl.parentNode) {
                    presentCountEl.parentNode.innerHTML = `<span id="present-count">0</span>/0 Present`;
                }
            }
        });
    }

    // Handle Submit
    if (submitBtn) {
        submitBtn.style.display = 'none';
        submitBtn.addEventListener('click', function() {
            if (!classSelect || !classSelect.value) {
                alert('Please select a class first.');
                return;
            }
            alert('Attendance submitted successfully for Class ' + classSelect.value + ' on ' + (dateSelect.value || 'selected date') + '!');
            location.href = 'index.html';
        });
    }

    if(presentCountEl && presentCountEl.parentNode) {
        presentCountEl.parentNode.innerHTML = `<span id="present-count">0</span>/0 Present`;
    }
});
