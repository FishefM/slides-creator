import type { ReactNode } from 'react';

export interface Template {
  name: string;
  render: () => ReactNode;
  styles?: string; // Optional template-specific styles
}
