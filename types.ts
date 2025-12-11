import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  image?: string;
}