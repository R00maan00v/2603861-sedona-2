function sortCars(order) {
    const carList = document.getElementById('car-list');
    const cars = Array.from(carList.getElementsByClassName('car'));

    cars.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.car-info span').innerText.replace(/\./g, ''));
        const priceB = parseInt(b.querySelector('.car-info span').innerText.replace(/\./g, ''));
        
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });

    carList.innerHTML = '';
    cars.forEach(car => carList.appendChild(car));
}
