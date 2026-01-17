# Copilot Instructions - FrontEcommerce

## Project Overview
Angular 21+ e-commerce frontend using **standalone components**, **signals** for state management, and **Vitest** for testing. Modern Angular stack with strict TypeScript and accessibility-first approach (WCAG AA).

## Architecture

### Component Structure
- **Standalone-first**: All components use `standalone: true` (implicit in Angular v20+)
- **Signal-based state**: Use `signal()` for reactive state, `computed()` for derived values
- **OnPush change detection**: Always set `changeDetection: ChangeDetectionStrategy.OnPush`
- **Input/Output functions**: Use `input()` and `output()` instead of decorators

### Routing
Routes defined in [src/app/app.routes.ts](src/app/app.routes.ts). Use lazy loading for feature modules.

### State Management
- **Local state**: Signals in components (`signal()`)
- **Derived state**: `computed()` for calculations
- **Updates**: Use `update()` or `set()` on signals, never `mutate()`
- **Services**: Single responsibility, injected via `inject()`, provided with `providedIn: 'root'`

## Key Conventions

### Templates
- Use native control flow: `@if`, `@for`, `@switch` (not `*ngIf`, `*ngFor`, `*ngSwitch`)
- Use `class="..."` and `style="..."` bindings (not `ngClass`, `ngStyle`)
- Async pipe for observables
- **No arrow functions** in templates—not supported
- **No global assumptions** like `new Date()`—provide via service

### Forms
- Prefer **Reactive Forms** over Template-driven
- Use `@angular/forms` patterns

### Images
- Use `NgOptimizedImage` for all static images
- Exception: inline base64 images are incompatible with `NgOptimizedImage`

### TypeScript
- Strict type checking enabled
- Avoid `any` type; use `unknown` if uncertain
- Type inference preferred when obvious

## Accessibility Requirements
- **WCAG AA compliance** (mandatory)
- Must pass **AXE checks**
- Focus management, color contrast, ARIA attributes required

## Development Workflow

### Build & Serve
```bash
npm start                # Development server (port 4200)
npm run build           # Production build → dist/
npm run watch           # Watch mode during development
```

### Testing
```bash
npm test                # Vitest runner
```

### Code Generation
```bash
ng generate component component-name   # Create new component
ng generate --help                     # List all generators
```

## Build Configuration
- **Main entry**: [src/main.ts](src/main.ts)
- **Assets**: Copied from `public/` directory
- **Global styles**: [src/styles.css](src/styles.css)
- **Production budgets**:
  - Initial bundle: 500kB warning / 1MB error
  - Component styles: 4kB warning / 8kB error

## Common Patterns

### Minimal Component Example
```typescript
import { Component, input, output, signal, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="increment()">Count: {{ count() }}</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(v => v + 1);
  }
}
```

### Service with DI
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  http = inject(HttpClient);
}
```

## Documentation
- [best-practices.md](best-practices.md)—detailed Angular/TS conventions
- [Angular CLI docs](https://angular.dev/tools/cli)

## Package Manager
NPM v11.4.1 (specified in package.json)
