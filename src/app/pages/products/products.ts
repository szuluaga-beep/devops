import { Component, inject, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  private productService = inject(ProductService);

  selectedCategory = signal<string>('');
  sortBy = signal<string>('name');

  filteredProducts = computed(() => {
    const products = this.productService.getProducts();
    const category = this.selectedCategory();
    const sort = this.sortBy();

    let filtered = category ? products.filter(p => p.category === category) : products;

    // Aplicar ordenamiento
    switch (sort) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
      default:
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  });

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory.set(target.value);
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortBy.set(target.value);
  }

  onAddToCart(product: Product) {
    // TODO: Integrar con servicio de carrito
    console.log('Agregado al carrito:', product);
    alert(`${product.name} agregado al carrito`);
  }
}
