export default interface Product {
    name: string;
    description: string;
    type: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        name: "Nike Air Max 90",
        description: "Classic sneakers with Max Air cushioning.",
        type: 'sportswear',
        price: 120,
        image: "nike_air_max_90.png",
    },
    {
        name: "Adidas Ultraboost 21",
        description: "High-performance running shoes with Boost cushioning.",
        type: 'sportswear',
        price: 180,
        image: "adidas-ultraboost-21.jpg",
    },
    {
        name: "Under Armour HOVR Phantom Connected",
        description: "Smart running shoes with UA Record Sensor™ technology.",
        type: 'sportswear',
        price: 140,
        image: "under-armour-hovr-phantom-connected.jpg",
    },
    {
        name: "Puma Backpack",
        description: "Carry your gear in style with Puma's sleek and spacious backpack, perfect for everyday use or weekend trips.",
        type: 'sportswear',
        price: 59.99,
        image: "puma_backpack.jpg",
    },
    {
        name: "Reebok Yoga Mat",
        description: "Find your inner peace and balance with Reebok's durable and comfortable yoga mat.",
        type: 'sportswear',
        price: 39.99,
        image: "reebok_yoga_mat.jpg",
    }
]