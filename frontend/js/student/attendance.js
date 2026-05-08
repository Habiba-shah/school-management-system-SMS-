document.addEventListener('DOMContentLoaded', () => {
    const markBtn = document.getElementById('markAttendance');

    if (markBtn) {
        markBtn.addEventListener('click', () => {
            alert('Attendance marked!');
        });
    }
});