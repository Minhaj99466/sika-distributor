import { Timestamp } from "firebase/firestore";

export interface Category {
  id?: string;
  slug: string;          // URL-safe, e.g. "adhesive" or "sealants"
  name: string;          // Display name, e.g. "Adhesive Solutions"
  description: string;
  icon: string;          // Emoji, e.g. "🔗"
  accentColor: string;   // Hex color, e.g. "#FFC510"
  createdAt?: Timestamp;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  category: string;       // matches Category.slug
  applications: string[];
  badge?: string;
  imageUrl?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt?: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
