// ─── Celestial Boutique — Static Data ────────────────────────────────────────

export const categories = [
  'All',
  'Lehengas',
  'Sarees',
  'Salwar Suits',
  'Bridal Sets',
  'Dupattas',
  'Accessories',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const products = [
  {
    id: 1,
    name: 'Gulabi Bridal Lehenga',
    category: 'Lehengas',
    price: '₹28,000',
    priceDisplay: '₹28,000',
    description:
      'Handcrafted in pure georgette with intricate zardozi embroidery. This blush-pink bridal lehenga is a timeless masterpiece, finished with a flared silhouette and contrast dupatta.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Blush Pink', 'Ivory', 'Peach'],
    image: '/lehenga.png',
    accent: '#f2c4ce',
  },
  {
    id: 2,
    name: 'Kanjeevaram Silk Saree',
    category: 'Sarees',
    price: '₹12,500',
    priceDisplay: '₹12,500',
    description:
      'A regal Kanjeevaram weave in deep mauve with gold zari border. Perfect for festive occasions, this saree carries the legacy of South Indian handloom artistry.',
    sizes: ['Free Size'],
    colors: ['Mauve', 'Burgundy', 'Teal'],
    image: '/saree.png',
    accent: '#c9a8c0',
  },
  {
    id: 3,
    name: 'Anarkali Salwar Suit',
    category: 'Salwar Suits',
    price: '₹7,200',
    priceDisplay: '₹7,200',
    description:
      'Flowy Anarkali in soft chiffon with threadwork yoke. Paired with churidar and net dupatta, this suit is a classic choice for festive gatherings.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sage Green', 'Dusty Rose', 'Lavender'],
    image: '/suit.png',
    accent: '#b5c4b1',
  },
  {
    id: 4,
    name: 'Royal Velvet Bridal Set',
    category: 'Bridal Sets',
    price: '₹45,000',
    priceDisplay: '₹45,000',
    description:
      'Complete bridal ensemble in rich royal velvet with gold gota patti work. Includes lehenga, blouse, and dupatta — an opulent statement for your wedding day.',
    sizes: ['XS', 'S', 'M', 'L', 'Custom'],
    colors: ['Crimson', 'Navy', 'Forest Green'],
    image: '/velvet_set.png',
    accent: '#9e6b7f',
  },
  {
    id: 5,
    name: 'Banarasi Dupatta',
    category: 'Dupattas',
    price: '₹3,500',
    priceDisplay: '₹3,500',
    description:
      'Handwoven Banarasi silk dupatta with floral buta motifs in zari. Adds an heirloom touch to any ethnic ensemble. Available in multiple weave patterns.',
    sizes: ['Free Size'],
    colors: ['Gold', 'Rose', 'Ivory'],
    image: '/dupatta.png',
    accent: '#d4b896',
  },
  {
    id: 6,
    name: 'Kundan Maang Tikka Set',
    category: 'Accessories',
    price: '₹4,500',
    priceDisplay: '₹4,500',
    description:
      'Handset kundan maang tikka with matching jhumkas. Crafted in 22k gold-plated brass with real gemstone accents. A bridal jewellery essential.',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver'],
    image: '/tikka.png',
    accent: '#e8c97e',
  },
];

export const collections = [
  {
    id: 1,
    title: 'Bridal 2026',
    subtitle: 'Timeless elegance for your forever moment',
    accent: '#c9a8c0',
    category: 'Bridal Sets',
    image: '/lehenga.png',
  },
  {
    id: 2,
    title: 'Festive Kurtas',
    subtitle: 'Crafted for every celebration under the sun',
    accent: '#d4b896',
    category: 'Salwar Suits',
    image: '/suit.png',
  },
  {
    id: 3,
    title: 'Everyday Sarees',
    subtitle: 'Drape yourself in beauty, every single day',
    accent: '#b5c4b1',
    category: 'Sarees',
    image: '/saree.png',
  },
];

export const whyUs = [
  {
    id: 1,
    icon: 'Scissors',
    title: 'Custom Tailoring',
    text: 'Perfect fit guaranteed — every outfit stitched to your exact measurements.',
  },
  {
    id: 2,
    icon: 'PackageOpen',
    title: 'Ships Across India',
    text: 'Secure packaging and tracked delivery to every corner of the country.',
  },
  {
    id: 3,
    icon: 'Star',
    title: '5.0★ on Google',
    text: 'Hundreds of happy brides and families trust Celestial Boutique.',
  },
  {
    id: 4,
    icon: 'CalendarHeart',
    title: 'Bridal Consultation',
    text: 'Free one-on-one session to plan your complete wedding trousseau.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Patna, Bihar',
    review:
      'Found my dream lehenga here! The quality of fabric and embroidery is absolutely stunning. The team was so helpful with measurements. 100% recommended for brides!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Gupta',
    location: 'Frankfurt, Germany',
    review:
      'Ordered a custom bridal lehenga from Germany entirely over WhatsApp — and the quality exceeded every expectation. Delivered perfectly in time for my wedding. Will definitely order again!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meena Jaiswal',
    location: 'Delhi',
    review:
      'The Banarasi saree I purchased for my daughter\'s wedding was exquisite. Celestial Boutique truly lives up to its name — every stitch tells a story of craftsmanship.',
    rating: 5,
  },
];
