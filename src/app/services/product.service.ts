import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly mockProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop Premium',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      description: 'Laptop de alta performance con procesador Intel i7 y 16GB RAM',
      rating: 4.8,
      reviews: 245,
      stock: 15,
      category: 'Electrónica'
    },
    {
      id: '2',
      name: 'Auriculares Inalámbricos',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      description: 'Auriculares con cancelación de ruido activa y 30 horas de batería',
      rating: 4.6,
      reviews: 1203,
      stock: 42,
      category: 'Accesorios'
    },
    {
      id: '4',
      name: 'Tablet',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
      description: 'Tablet de 11 pulgadas con pantalla LCD y soporte para lápiz',
      rating: 4.5,
      reviews: 389,
      stock: 22,
      category: 'Electrónica'
    },
    {
      id: '5',
      name: 'Smartwatch',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      description: 'Reloj inteligente con monitoreo de salud y resistencia al agua',
      rating: 4.4,
      reviews: 678,
      stock: 35,
      category: 'Accesorios'
    },
    {
      id: '7',
      name: 'Mochila Inteligente',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      description: 'Mochila con carga USB y compartimentos organizados',
      rating: 4.3,
      reviews: 156,
      stock: 50,
      category: 'Accesorios'
    },
    {
      id: '8',
      name: 'Monitor 4K',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      description: 'Monitor 4K UHD de 27 pulgadas con HDR y 144Hz',
      rating: 4.6,
      reviews: 298,
      stock: 18,
      category: 'Electrónica'
    }
  ];

  products = signal<Product[]>(this.mockProducts);

  getProducts() {
    return this.products();
  }

  getProductById(id: string) {
    return this.mockProducts.find(p => p.id === id);
  }

  getProductsByCategory(category: string) {
    return this.mockProducts.filter(p => p.category === category);
  }
}
