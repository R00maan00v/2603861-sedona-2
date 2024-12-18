document.addEventListener('DOMContentLoaded', () => {
    const cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        const img = car.querySelector('img');
        const originalSrc = img.src;
        const hoverSrc = originalSrc.replace('_main', '_hover');

        img.addEventListener('mouseover', () => {
            img.src = hoverSrc;
        });

        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });
});