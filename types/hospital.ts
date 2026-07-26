export interface HospitalInfo {
  name: string;
  arabicName: string;
  tagline: string;
  address: string;
  district: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
  emergencyPhone: string;
  whatsapp: string;
  email: string;
  workingHours: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  googlePlaceId: string;
}

export interface Doctor {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  arabicTitle?: string;
  departmentId: string;
  departmentName: string;
  arabicDepartmentName?: string;
  experienceYears: number;
  qualification: string;
  languages: string[];
  image: string;
  bio: string;
  arabicBio?: string;
  specializations: string[];
  availableDays: string[];
  isFeatured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  arabicName: string;
  shortDescription: string;
  arabicShortDescription?: string;
  fullDescription: string;
  iconName: string;
  image: string;
  operatingHours: string;
  arabicOperatingHours?: string;
  headOfDepartment: string;
  specialties: string[];
  keyFacilities: string[];
}

export interface Service {
  id: string;
  title: string;
  arabicTitle?: string;
  category: string;
  shortDescription: string;
  arabicShortDescription?: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  departmentId: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  highlights: string[];
}

export interface InsuranceProvider {
  id: string;
  name: string;
  type: string;
  logo: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  department: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experienceRequired: string;
  description: string;
  requirements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
