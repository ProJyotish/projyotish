# Applying Lazy Loading to Other Landing Pages

## Overview
This guide explains how to apply the same lazy loading pattern used on the main homepage to other landing pages.

## Example: Business Landing Page

### Current Structure (BusinessLanding.tsx)
The BusinessLanding component is quite large (~390 lines) and includes many sections that render immediately.

### Optimized Structure

```tsx
"use client";
import { lazy, Suspense } from "react";
import { SectionSkeleton } from "@/src/lib/lazy-loading";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

// Keep critical components as standard imports
// Lazy load sections that appear below the fold

// If the file is split into logical sections, create separate files:
// But if it's a single component, split JSX into separate exportable sections

const BusinessLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Critical sections - render immediately */}
        <section className="hero-section">
          {/* Hero content here */}
        </section>
        
        {/* Below-the-fold sections - lazy load */}
        <Suspense fallback={<SectionSkeleton />}>
          {/* Features section */}
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          {/* Benefits section */}
        </Suspense>
        
        {/* More sections... */}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
```

## Refactoring Strategy (Best Practice)

For large landing pages, split them into smaller components:

### Before (Single file, ~300+ lines)
```
BusinessLanding.tsx (390 lines)
├── Hero
├── Features
├── Benefits
├── Testimonials
├── FAQ
└── CTA
```

### After (Split into multiple files)
```
components/
├── BusinessLanding/
│   ├── index.tsx (main page component, ~50 lines)
│   ├── Hero.tsx (~60 lines)
│   ├── Features.tsx (~80 lines)
│   ├── Benefits.tsx (~70 lines)
│   ├── Testimonials.tsx (~50 lines)
│   ├── FAQ.tsx (~40 lines)
│   └── CTA.tsx (~30 lines)
```

### Lazy Loading Pattern (After)
```tsx
// components/BusinessLanding/index.tsx
import { lazy, Suspense } from "react";
import { SectionSkeleton } from "@/src/lib/lazy-loading";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Hero from "./Hero";

// Lazy load below-the-fold sections
const Features = lazy(() => import("./Features"));
const Benefits = lazy(() => import("./Benefits"));
const Testimonials = lazy(() => import("./Testimonials"));
const FAQ = lazy(() => import("./FAQ"));
const CTA = lazy(() => import("./CTA"));

export default function BusinessLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<SectionSkeleton />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Benefits />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <CTA />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
```

## Pages to Optimize

These pages can benefit from lazy loading:

1. **src/pages/BusinessLanding.tsx** (~390 lines)
   - Split and lazy load: Features, Benefits, Testimonials, CTA
   - Priority: HIGH

2. **src/pages/HealthLanding.tsx** (~296 lines)
   - Similar structure to BusinessLanding
   - Priority: HIGH

3. **src/pages/LoveLanding.tsx**
   - Priority: HIGH (if similar structure)

4. **src/pages/WealthLanding.tsx**
   - Priority: HIGH (if similar structure)

5. **src/pages/CareerLanding.tsx**
   - Priority: MEDIUM

6. **src/pages/PricingPage.tsx**
   - Priority: MEDIUM-LOW (typically users want to see pricing upfront)

7. **src/pages/ContactUs.tsx**
   - Priority: LOW (already relatively lightweight)

## Quick Refactoring Checklist

For each page:

- [ ] Identify hero/above-the-fold content
- [ ] Identify below-the-fold sections
- [ ] Create separate component files for each section
- [ ] Import hero components normally
- [ ] Lazy load other components
- [ ] Wrap in Suspense boundaries
- [ ] Test with npm run dev
- [ ] Run npm run build:analyze to verify bundle reduction
- [ ] Test performance in DevTools Network tab

## Expected Results Per Page

| Page | Current Size | Expected After | Savings |
|------|-------------|-----------------|---------|
| BusinessLanding | ~20KB | ~12KB | ~40% |
| HealthLanding | ~18KB | ~11KB | ~40% |
| LoveLanding | ~18KB | ~11KB | ~40% |
| WealthLanding | ~18KB | ~11KB | ~40% |

## Code Examples

### Simple Inline Lazy Loading (For pages with few sections)

```tsx
// src/pages/BusinessLanding.tsx
"use client";
import { lazy, Suspense } from "react";
import { SectionSkeleton } from "@/src/lib/lazy-loading";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// ... other imports

// Extract lazy-loaded sections at the bottom of the file

// Keep the hero in the main import
const HeroSection = () => (
  <section>
    {/* Hero jsx here */}
  </section>
);

// Lazy load the rest
export default function BusinessLanding() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        {showContent && <HeroSection />}
        
        {/* Rest of component... */}
      </main>
      <Footer />
    </div>
  );
}
```

## Testing Performance

Before and after refactoring:

```bash
# Build and analyze
npm run build:analyze

# You should see:
# 1. Initial page loads Hero quickly
# 2. Other sections appear as you scroll
# 3. Network tab shows staggered chunk loading
# 4. Overall bundle size decreased by ~30-40%
```

## Advanced: Intersection Observer Integration

For even better progressive loading, combine lazy loading with Intersection Observer:

```tsx
import { useEffect, useRef, useState } from "react";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
};

// Usage in component:
const [ref, isInView] = useInView();
return (
  <div ref={ref}>
    {isInView && <ExpensiveComponent />}
  </div>
);
```

## Deployment & Monitoring

1. **Before deploying**, run:
   ```bash
   npm run build:analyze
   ```

2. **Monitor on PageSpeed Insights** after deployment

3. **Track Core Web Vitals** in your analytics

4. **Compare metrics** before and after refactoring

## Common Issues & Solutions

### Issue: Suspense fallback shows too long
**Solution**: Reduce `SectionSkeleton` height or show actual content skeleton

### Issue: Components not loading after scroll
**Solution**: Check if Suspense is wrapping the lazy component correctly

### Issue: Build still large
**Solution**: Run `npm run build:analyze` to find other large dependencies

### Issue: Flash of unstyled content
**Solution**: Ensure CSS is included in parent component or main bundle

---

**Next Action**: Choose one page (BusinessLanding recommended) and apply this pattern first to validate the approach.
