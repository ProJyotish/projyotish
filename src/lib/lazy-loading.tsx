/**
 * Utility functions for progressive loading and code splitting
 */

import { lazy, Suspense, ReactNode } from 'react';
import { ComponentType } from 'react';

/**
 * Loading skeleton for sections
 */
export const SectionSkeleton = ({ height = 'h-96' }: { height?: string } = {}) => (
  <div className={`w-full ${height} bg-gradient-to-b from-muted to-muted/50 animate-pulse rounded-lg`} />
);

/**
 * Wrapper component for lazy loaded sections with fallback
 */
export const LazySection = ({
  component: Component,
  fallback = <SectionSkeleton />,
  ...props
}: {
  component: ComponentType<any>;
  fallback?: ReactNode;
  [key: string]: any;
}) => (
  <Suspense fallback={fallback}>
    <Component {...props} />
  </Suspense>
);

/**
 * Dynamic import helper with better error handling
 */
export const dynamicImport = <T extends {}>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) => lazy(importFunc);

/**
 * Generate intersection observer options for lazy loading
 */
export const getLazyLoadOptions = () => ({
  threshold: 0.1,
  rootMargin: '50px',
});

/**
 * Hook to defer non-critical component rendering
 */
export const useDeferredComponent = (isVisible: boolean, Component: ComponentType<any>) => {
  return isVisible ? <Component /> : null;
};
