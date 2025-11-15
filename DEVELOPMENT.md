# Development Guide

Guidelines for contributing to and extending this portfolio.

## Code Style

### TypeScript/React

- Use functional components with TypeScript
- Add JSDoc comments for complex functions
- Use proper type annotations
- Prefer const over let/var

**Example:**

```tsx
/**
 * MyComponent description
 * @param title - Component title
 * @returns Rendered component
 */
const MyComponent: React.FC<{ title: string }> = ({ title }) => {
  return <div>{title}</div>;
};

export default MyComponent;
```

### Naming Conventions

- Components: PascalCase (`Hero.tsx`, `Contact.tsx`)
- Functions: camelCase (`handleSubmit`, `processData`)
- Constants: UPPER_SNAKE_CASE (`API_KEY`, `MAX_ITEMS`)
- Files: Match component name or descriptive name

### File Organization

```
src/
├── components/       # React components
├── hooks/           # Custom React hooks
├── services/        # External services (API, etc.)
├── config/          # Configuration and constants
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Component Development

### Basic Component Template

```tsx
import React, { useState, useEffect } from 'react';

interface MyComponentProps {
  title: string;
  onSubmit?: (data: any) => void;
}

/**
 * MyComponent - Brief description
 * Detailed description of what the component does
 */
const MyComponent: React.FC<MyComponentProps> = ({ title, onSubmit }) => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    // Effect logic here
  }, []);

  const handleClick = () => {
    // Handler logic
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
```

## Performance Best Practices

### 1. Memoization

```tsx
import { memo, useMemo, useCallback } from 'react';

// Memoize component
const MyComponent = memo(({ data }: Props) => {
  return <div>{data}</div>;
});

// Memoize values
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething();
}, [dependency]);
```

### 2. Code Splitting

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 3. Image Optimization

Always optimize images:

```bash
# Using ImageMagick
convert image.jpg -quality 80 -resize 1200x800 optimized.jpg

# Or use online tools like tinypng.com
```

## Styling

### Tailwind CSS Guidelines

- Use existing color variables
- Maintain consistent spacing scale
- Use relative sizing (md:, lg:, etc.)
- Avoid inline styles

**Good:**
```tsx
<div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
```

**Avoid:**
```tsx
<div style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}>
```

## Testing (Optional)

### Setup

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Example Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Git Workflow

### Branch Naming

- `feature/add-contact-form`
- `fix/api-error-handling`
- `docs/update-readme`
- `style/improve-hero-section`

### Commit Messages

```
feat: add AI message generation feature
fix: resolve contact form validation bug
docs: update deployment guide
style: improve Hero section typography
refactor: optimize component rendering
```

### Process

1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes
3. Commit: `git commit -m "feat: your feature description"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

## Adding New Features

### Example: Add a Blog Section

1. **Create Component** (`components/Blog.tsx`)
2. **Add Data** (`config/blog.ts`)
3. **Style** (Use Tailwind)
4. **Integrate** (Add to `App.tsx`)
5. **Test Locally** (`npm run dev`)
6. **Add Documentation** (Update README)

## Environment Setup

### IDE Configuration

#### VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

#### .editorconfig

```editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

## Debugging

### Browser DevTools

1. Open DevTools (F12)
2. Use Elements tab for DOM inspection
3. Use Console for JavaScript debugging
4. Use Network tab for API calls
5. Use React DevTools extension for component inspection

### Common Issues

```tsx
// Issue: Key warning in lists
// ❌ Don't use index
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ Use unique identifier
{items.map((item) => <div key={item.id}>{item}</div>)}

// Issue: State not updating
// ❌ Mutating state directly
state.prop = newValue;

// ✅ Creating new object
setState({ ...state, prop: newValue });

// Issue: Infinite loops
// ❌ Missing dependencies
useEffect(() => {
  setData(fetchData());
}, []); // Missing 'fetchData'

// ✅ Include dependencies
useEffect(() => {
  setData(fetchData());
}, [fetchData]);
```

## Performance Metrics

Monitor these metrics:

- **Lighthouse Score** (target: 90+)
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

Check with: https://pagespeed.web.dev/

## Documentation

Always document:

1. **Complex Functions** - What they do, parameters, return
2. **Custom Hooks** - How to use, what it returns
3. **Prop Types** - What each prop does
4. **Edge Cases** - Special handling or limitations

## Resources

- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [Google Generative AI](https://ai.google.dev/docs)

## Questions?

Feel free to open an issue or check existing discussions.

Happy coding! 🚀
