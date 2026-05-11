const timeSelect = document.getElementById('time');
const estimateBox = document.getElementById('time-estimate');
const form = document.getElementById('spaForm');

function updateEstimate() {
    const startTime = timeSelect.value;
    const [hours, minutes] = startTime.split(':').map(Number);
    
    // Giả sử liệu trình trung bình là 2 tiếng (bao gồm cả dọn dẹp)
    let endHours = hours + 2;
    let endMinutes = minutes;

    const endTime = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
    
    estimateBox.innerHTML = `
        <strong>Thời gian dự kiến:</strong><br>
        Bắt đầu: ${startTime}<br>
        Kết thúc liệu trình: ${endTime}<br>
        <em>(SalySpa sẽ sẵn sàng phục vụ khách tiếp theo sau ${endTime})</em>
    `;
}

// Cập nhật ngay khi đổi giờ
timeSelect.addEventListener('change', updateEstimate);
window.onload = updateEstimate;

// Gửi thông báo về Zalo hoặc Email (giả lập)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = timeSelect.value;
    
    alert(`Cảm ơn ${name}! SalySpa đã nhận lịch hẹn vào lúc ${time} ngày ${date}. Chúng tôi sẽ liên hệ xác nhận qua điện thoại.`);
});