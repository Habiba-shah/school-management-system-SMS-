document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.querySelector('.save-draft-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const classSelect = document.getElementById('class-select');
    const subjectSelect = document.getElementById('subject-select');
    const noSelectionMessage = document.getElementById('no-selection-message');
    const marksTableContainer = document.getElementById('marks-table-container');
    const marksTbody = document.getElementById('marks-tbody');
    const marksFooter = document.getElementById('marks-footer');

    const firstNames = ["John", "Emma", "Alex", "Mia", "Ethan", "Ava", "Noah", "Isabella", "William", "Sophia"];
    const lastNames = ["Smith", "Davis", "Turner", "Garcia", "Lee", "Martinez", "Thomas", "Clark", "Rodriguez", "Lewis"];

    function attachInputListeners() {
        const markInputs = document.querySelectorAll('.mark-input');
        markInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#eaecf0';
            });
        });
    }

    function checkSelection() {
        if (classSelect && subjectSelect && classSelect.value && subjectSelect.value) {
            if(noSelectionMessage) noSelectionMessage.style.display = 'none';
            if(marksTableContainer) marksTableContainer.style.display = 'block';
            if(marksFooter) {
                // Determine if it was originally flex
                marksFooter.style.display = 'flex';
                // Some css might rely on default display, but .marks-footer usually flex
            }

            let html = '';
            const classVal = classSelect.value;
            const numStudents = 5 + (parseInt(classVal) % 4); // 5 to 8 students
            for(let i=1; i<=numStudents; i++) {
                const id = parseInt(classVal) * 1000 + i;
                const name = firstNames[(parseInt(classVal) + i) % firstNames.length] + " " + lastNames[(parseInt(classVal) * i) % lastNames.length];
                html += `
                    <tr>
                        <td class="roll-no">${id}</td>
                        <td class="student-name">${name}</td>
                        <td class="text-right"><input type="number" class="mark-input" placeholder="—" min="0" max="100"></td>
                    </tr>
                `;
            }
            if(marksTbody) {
                marksTbody.innerHTML = html;
                attachInputListeners();
            }
        } else {
            if(noSelectionMessage) noSelectionMessage.style.display = 'block';
            if(marksTableContainer) marksTableContainer.style.display = 'none';
            if(marksFooter) marksFooter.style.display = 'none';
        }
    }

    if (classSelect) classSelect.addEventListener('change', checkSelection);
    if (subjectSelect) subjectSelect.addEventListener('change', checkSelection);

    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const markInputs = document.querySelectorAll('.mark-input');
            let hasError = false;
            let hasEmpty = false;
            markInputs.forEach(input => {
                const val = parseInt(input.value);
                if (input.value === '') {
                    hasEmpty = true;
                } else if (val < 0 || val > 100) {
                    hasError = true;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#eaecf0';
                }
            });

            if (hasError) {
                alert('Please enter valid marks between 0 and 100.');
            } else {
                alert('Marks saved successfully for Class ' + classSelect.value + ' - ' + subjectSelect.value + '!');
                location.href = 'index.html';
            }
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
                location.href = 'index.html';
            }
        });
    }

    // Initial run
    checkSelection();
});
