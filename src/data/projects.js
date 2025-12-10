// Project data - Easy to edit and add your own images
// Just replace the image URLs with your actual project images

export const projects = [
  {
    id: 1,
    title: "3BHK Residential Interior Planning",
    subtitle: "Floor Plan & Detailed Elevation Set",
    category: "residential",
    type: "Course Project",
    tools: ["AutoCAD"],
    description: "Developed a fully-dimensioned 3BHK residential interior plan including furniture layout, circulation design, and detailed interior elevations for the kitchen and master bedroom. Ensured accuracy in measurements, clear zoning, functional flow, and CAD-standard sheet presentation.",
    highlights: [
      "Drafted complete 3BHK furniture layout with bedroom, living, dining, balcony, kitchen, and toilet zoning",
      "Designed furniture placements ensuring proper circulation clearances and door swings",
      "Created detailed kitchen floor plan + 3 elevations showing base units, overhead storage, and dimensional detailing",
      "Produced master bedroom plan + wardrobe elevation + study/electrical layout",
      "Applied CAD annotation standards including dimension styles, hatch patterns, symbols, and elevation markers"
    ],
    images: [
      "/images/project1-3bhk-floor-plan.png",
      "/images/project1-3bhk-kitchen-elevations.png",
      "/images/project1-3bhk-master-bedroom-elevations.png"
    ],
    coverImage: "/images/project1-3bhk-floor-plan.png"
  },
  {
    id: 2,
    title: "1BHK Residential Interior Design",
    subtitle: "Space Planning & 3D Visualization",
    category: "residential",
    type: "Residential Project",
    tools: ["AutoCAD", "SketchUp"],
    description: "Complete design and visualization of a 1BHK residential apartment, including floor planning, interior layout development, and 3D visualization. The goal was to create an efficient, aesthetic, and functional home interior within limited square footage, balancing comfort, storage, and modern styling.",
    highlights: [
      "Prepared a detailed 1BHK floor plan with accurate measurements and optimized spatial layout",
      "Designed a cozy and functional bedroom with soft upholstered headboard and full-height wardrobes",
      "Visualized open concept kitchen–dining layout with floating wall shelves and center dining table",
      "Developed a U-shaped modular kitchen with upper & lower cabinetry and textured dado tiles",
      "Designed a modern living room with L-shaped sofa, TV unit, and designer partition panel"
    ],
    images: [
      "/images/project2-1bhk-floor-plan.png",
      "/images/project2-1bhk-living-room.png",
      "/images/project2-1bhk-bedroom.png",
      "/images/project2-1bhk-kitchen.png",
      "/images/project2-1bhk-dining.png"
    ],
    coverImage: "/images/project2-1bhk-living-room.png"
  },
  {
    id: 3,
    title: "Compact 1BHK Apartment",
    subtitle: "Floor Plan & Documentation",
    category: "residential",
    type: "Course Assignment",
    tools: ["AutoCAD"],
    description: "An efficient 1BHK layout design maximizing space utility and storage in a compact footprint. Features clean documentation with standardized CAD blocks and dimension settings.",
    highlights: [
      "Designed compact 1BHK layout maximizing space efficiency and storage",
      "Created clear circulation and functional zoning in small footprint",
      "Used standardized blocks & dimension settings for clean documentation",
      "Exported DWG & PDF sheets ready for printing or 3D modeling"
    ],
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ez361a5d6?w=800&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80"
  },
  {
    id: 4,
    title: "Steel Bridge Structure Analysis",
    subtitle: "Structural Design & Analysis",
    category: "academic",
    type: "Final Year Project",
    tools: ["STAAD.Pro"],
    description: "A comprehensive structural analysis and design of a steel bridge following IS 800 Limit State Design standards. This academic project demonstrates understanding of structural engineering principles.",
    highlights: [
      "Modeled steel bridge structure using nodes, members & bracing",
      "Applied dead load, live load & IS 800-compliant load combinations",
      "Checked bending moments, shear forces, deflection & design stresses",
      "Ensured all members satisfied code performance limits",
      "Optimized member sizes for safety & material economy"
    ],
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
  }
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "visualization", label: "3D Visualization" },
  { id: "academic", label: "Academic" }
];

export const services = [
  {
    id: 1,
    title: "2D Floor Plan Drafting",
    description: "Accurate and detailed floor plans with proper dimensioning, layers, and professional documentation.",
    icon: "PenTool"
  },
  {
    id: 2,
    title: "Space Optimization",
    description: "Furniture layout and circulation planning to maximize functionality and comfort in any space.",
    icon: "Layout"
  },
  {
    id: 3,
    title: "3D Modeling",
    description: "Detailed 3D models of interiors using SketchUp with realistic components and materials.",
    icon: "Box"
  },
  {
    id: 4,
    title: "Realistic Rendering",
    description: "High-quality Enscape renders with proper lighting, materials, and atmospheric effects.",
    icon: "Image"
  },
  {
    id: 5,
    title: "Material Selection",
    description: "Curated material palettes and concept boards that bring your vision to life.",
    icon: "Palette"
  },
  {
    id: 6,
    title: "Presentation Sheets",
    description: "Professional presentation documents ready for client discussions and approvals.",
    icon: "FileText"
  }
];

export const skills = {
  software: [
    { name: "AutoCAD", level: 90, description: "2D drafting, floor plans, layers, blocks, plotting" },
    { name: "SketchUp", level: 85, description: "3D modeling, components, scenes, section planes" },
    { name: "Enscape", level: 80, description: "Real-time rendering, materials, lighting, exports" }
  ],
  design: [
    "Residential Space Planning",
    "Furniture Layout",
    "Color & Material Palettes",
    "Mood Boards",
    "Visual Balance & Zoning",
    "Floor Plans & Elevations",
    "FF&E Understanding",
    "Focal Wall Design"
  ],
  other: [
    "MS Word",
    "MS Excel",
    "MS PowerPoint",
    "STAAD.Pro"
  ]
};

export const education = [
  {
    id: 1,
    degree: "GROVIO's Certificate of Completion",
    institution: "Interior Designer Certification",
    year: "2025",
    description: "Comprehensive training in AutoCAD, SketchUp, Enscape Rendering, architectural visualization, 2D drafting, 3D modeling, lighting setup & rendering techniques."
  },
  {
    id: 2,
    degree: "B.Tech – Civil Engineering",
    institution: "Acharya Nagarjuna University (ANU)",
    year: "2017 – 2021",
    description: "Graduated with 76% aggregate. Strong foundation in structural design, materials, and construction principles."
  },
  {
    id: 3,
    degree: "Intermediate (M.P.C)",
    institution: "Nagarjuna Junior College",
    year: "2015 – 2017",
    description: "Completed with 87.8% in Mathematics, Physics, and Chemistry."
  }
];

export const personalInfo = {
  name: "Anusha Lahori",
  title: "Interior Designer",
  subtitle: "2D Drafting • 3D Modeling • Rendering",
  tagline: "Transforming Spaces into Experiences",
  email: "anushalahori986@gmail.com",
  phone: "+91 79958 19573",
  location: "Andhra Pradesh, India",
  about: "Passionate and detail-oriented Interior Designer with a Civil Engineering background, trained in AutoCAD, SketchUp, and Enscape. Skilled in transforming raw measurements, sketches, or reference images into functional residential layouts and realistic 3D interior views. Seeking opportunities to work with design studios, architects, and freelance clients to deliver creative, well-planned, and visually polished interiors.",
  socialLinks: {
    linkedin: "#",
    instagram: "#",
    behance: "#"
  }
};
