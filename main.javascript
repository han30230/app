let intervalId;

document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const output = document.getElementById('output');

    startButton.addEventListener('click', () => {
        // 이미 반복이 실행 중이면 중복 실행 방지
        if (intervalId) return;

        output.innerHTML = '클릭 반복 시작!';
        intervalId = setInterval(() => {
            console.log('마우스 클릭');
            output.innerHTML += '<br>마우스 클릭';
        }, 1000); // 1초마다 반복
    });

    stopButton.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            output.innerHTML += '<br>클릭 반복 중지!';
        }
    });
});
