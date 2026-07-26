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
  departmentId: string;
  departmentName: string;
  experienceYears: number;
  qualification: string;
  languages: string[];
  image: string;
  bio: string;
  specializations: string[];
  availableDays: string[];
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  departmentId: string;
}

export interface Department {
  id: string;
  name: string;
  arabicName: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  operatingHours: string;
  headOfDepartment: string;
  specialties: string[];
  keyFacilities: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  category: "technology" | "care" | "emergency" | "comfort";
  image: string;
  highlights: string[];
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

export interface InsuranceProvider {
  id: string;
  name: string;
  type: "Direct Billing" | "Reimbursement Supported" | "Primary Network";
  logo: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Exterior" | "Interior" | "Emergency" | "ICU" | "Operation Theatre" | "Laboratory" | "Reception" | "Patient Rooms" | "Facilities";
  imageUrl: string;
  caption: string;
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
  type: "Full-Time" | "Part-Time" | "Shift Basis";
  location: string;
  experienceRequired: string;
  description: string;
  requirements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Appointments" | "Insurance" | "Emergency" | "Medical Reports";
}