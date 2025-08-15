
export type Pricing = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  name: string;
  purpose: string;
  link: string;
  pricing: Pricing;
}

export interface Category {
  title: string;
  tools: Tool[];
}
