// assets/script.js

document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 150; // Tăng số lượng để tuyết dày hơn

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Vị trí và kích thước ngẫu nhiên
        const size = Math.random() * 4 + 1; // Kích thước từ 1px đến 5px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        
        // Tốc độ và độ trễ ngẫu nhiên
        const duration = Math.random() * 5 + 8; // Tốc độ rơi từ 8s đến 13s
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        snowContainer.appendChild(snowflake);
    }
});
