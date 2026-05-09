const fs = require('fs');
const path = 'c:/Users/Queiros/Documents/atual sucatas/auto-parts/js/data.js';

const cars = [
    { brand: 'Volkswagen', model: 'Gol', img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=400&q=80' },
    { brand: 'Hyundai', model: 'HB20', img: 'https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?auto=format&fit=crop&w=400&q=80' },
    { brand: 'BMW', model: '320i', img: 'https://images.unsplash.com/photo-1555353540-64fd1b622617?auto=format&fit=crop&w=400&q=80' },
    { brand: 'Audi', model: 'A4', img: 'https://images.unsplash.com/photo-1603509298986-1d12d4a51e5e?auto=format&fit=crop&w=400&q=80' },
    { brand: 'Mercedes-Benz', model: 'C180', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=400&q=80' }
];

const categories = ['Mecânica', 'Elétrica', 'Reposição', 'Acessórios'];

const products = [];
for (let i = 1; i <= 48; i++) {
    const car = cars[(i - 1) % cars.length];
    const category = categories[(i - 1) % categories.length];
    const price = (Math.random() * 8000 + 1000).toFixed(2);
    
    products.push({
        id: i,
        title: `Sucata ${car.brand} ${car.model} (Para Peças)`,
        price: parseFloat(price),
        category: category,
        brand: car.brand,
        model: car.model,
        image: car.img
    });
}

const content = '// Lista de produtos atualizada com sucatas de carros populares\nconst products = ' + JSON.stringify(products, null, 4) + ';\n';
fs.writeFileSync(path, content, 'utf8');
console.log('data.js updated!');
