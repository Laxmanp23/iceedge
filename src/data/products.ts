export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Thermodynamic Indoor Units",
    description: "High-efficiency indoor cooling matrices designed for precise temperature control in commercial cold rooms.",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
    category: "Cooling Units",
    features: ["Precision Climate Control", "Low Noise Operation", "Smart Defrost"]
  },
  {
    id: "p2",
    name: "Heavy-Duty Condensing Arrays",
    description: "Rugged outdoor condensing units built to withstand extreme environments while maintaining peak performance.",
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop",
    category: "Outdoor Units",
    features: ["Weatherproof Casing", "High Capacity Output", "Corrosion Resistant"]
  },
  {
    id: "p3",
    name: "Industrial Chiller Cores",
    description: "Massive scale chilling systems for manufacturing plants and continuous-operation facilities.",
    image: "https://images.unsplash.com/photo-1574621100236-d25bb5cb47ce?q=80&w=800&auto=format&fit=crop",
    category: "Industrial Chillers",
    features: ["Ammonia/Freon Compatible", "Energy Recovery", "Automated Diagnostics"]
  },
  {
    id: "p4",
    name: "Cryogenic Deep Freezers",
    description: "Ultra-low temperature storage solutions for pharmaceutical and critical organic materials.",
    image: "https://images.unsplash.com/photo-1563207905-1e35359cdcb1?q=80&w=800&auto=format&fit=crop",
    category: "Deep Freezers",
    features: ["Sub-Zero Integrity", "Dual Compressor System", "Thermal Backup"]
  },
  {
    id: "p5",
    name: "Aero-Grade Storage Panels",
    description: "Modular, high-density polyurethane cold storage panels for custom facility construction.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    category: "Structural",
    features: ["Interlocking CAM Locks", "Fire Retardant", "Max Insulation Factor"]
  },
  {
    id: "p6",
    name: "Vertex Refrigeration Compressors",
    description: "The beating heart of our systems. High-displacement compressors designed for infinite runtime.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    category: "Compressors",
    features: ["Variable Frequency", "Vibration Dampening", "IoT Monitoring"]
  }
];
