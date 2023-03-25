export default interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        name: "Nike Air Max 90",
        description: "Classic sneakers with Max Air cushioning.",
        price: 120,
        image: "nike-air-max-90.jpg",
    },
    {
        name: "Adidas Ultraboost 21",
        description: "High-performance running shoes with Boost cushioning.",
        price: 180,
        image: "adidas-ultraboost-21.jpg",
    },
    {
        name: "Under Armour HOVR Phantom Connected",
        description: "Smart running shoes with UA Record Sensor™ technology.",
        price: 140,
        image: "under-armour-hovr-phantom-connected.jpg",
    },
]