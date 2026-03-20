export type ProjectStatus = 'built' | 'unbuilt';

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleKn: string; // Kannada placeholder
  category: string;
  categoryKn: string;
  location: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  coverImage: string;
  images: string[];
  narrative: string;
  narrativeKn: string;
  facts: ProjectFact[];
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'wood-and-stone-lounge',
    title: 'Wood & Stone Lounge',
    titleKn: 'ಮರ ಮತ್ತು ಕಲ್ಲಿನ ಲೌಂಜ್',
    category: 'Interior',
    categoryKn: 'ಒಳಾಂಗಣ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/wood-stone-lounge/01.jpg',
    images: [
      '/images/projects/wood-stone-lounge/01.jpg',
      '/images/projects/wood-stone-lounge/02.jpg',
    ],
    narrative:
      'A composition of warm timber and raw stone surfaces creates an atmosphere of grounded luxury. Natural material contrasts anchor the space, allowing light to become the primary design element throughout the day.',
    narrativeKn:
      'ಬೆಚ್ಚನೆಯ ಮರ ಮತ್ತು ಕಚ್ಚಾ ಕಲ್ಲಿನ ಮೇಲ್ಮೈಗಳ ಸಂಯೋಜನೆಯು ಭೂಮಿಯ ಐಷಾರಾಮದ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Area', value: '320 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '02',
    slug: 'soft-minimal-bedroom',
    title: 'Soft Minimal Bedroom',
    titleKn: 'ಮೃದು ಕನಿಷ್ಠ ಮಲಗುವ ಕೋಣೆ',
    category: 'Interior',
    categoryKn: 'ಒಳಾಂಗಣ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/soft-minimal-bedroom/01.jpg',
    images: ['/images/projects/soft-minimal-bedroom/01.jpg'],
    narrative:
      'Silence and softness define this private bedroom retreat. Muted tones and considered materiality yield a space that holds its occupant in calm repose.',
    narrativeKn:
      'ನಿಶ್ಶಬ್ದ ಮತ್ತು ಮೃದುತ್ವವು ಈ ಖಾಸಗಿ ಮಲಗುವ ಕೋಣೆಯ ರಿಟ್ರೀಟ್ ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Area', value: '240 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '03',
    slug: 'floating-timber-stair',
    title: 'Floating Timber Stair',
    titleKn: 'ತೇಲುವ ಮರದ ಮೆಟ್ಟಿಲು',
    category: 'Interior',
    categoryKn: 'ಒಳಾಂಗಣ',
    location: 'Bangalore, India',
    year: '2022',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/floating-timber-stair/01.jpg',
    images: ['/images/projects/floating-timber-stair/01.jpg'],
    narrative:
      'Each tread appears to hover in mid-air, a sculptural procession connecting levels with an economy of means. Structural precision and joinery craft elevate the everyday act of movement.',
    narrativeKn:
      'ಪ್ರತಿ ಹಂತವು ಮಧ್ಯ ಗಾಳಿಯಲ್ಲಿ ತೇಲುವಂತೆ ಕಾಣಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Year', value: '2022' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '04',
    slug: 'open-plan-living',
    title: 'Open Plan Living',
    titleKn: 'ತೆರೆದ ಯೋಜನೆಯ ಜೀವನ',
    category: 'Interior',
    categoryKn: 'ಒಳಾಂಗಣ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/open-plan-living/01.jpg',
    images: [
      '/images/projects/open-plan-living/01.jpg',
      '/images/projects/open-plan-living/02.jpg',
    ],
    narrative:
      'A unified living and dining volume dissolves the boundary between gathering and solitude. Continuous material language and uninterrupted sight-lines amplify the sense of spatial freedom.',
    narrativeKn:
      'ಒಂದು ಏಕೀಕೃತ ವಾಸ ಮತ್ತು ಊಟದ ಸಂಪುಟವು ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ ಮತ್ತು ಏಕಾಂತದ ನಡುವಿನ ಗಡಿಯನ್ನು ಕರಗಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Area', value: '800 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '05',
    slug: 'heritage-verandah-exterior',
    title: 'Heritage Verandah Exterior',
    titleKn: 'ಪರಂಪರೆ ವರಾಂಡಾ ಬಾಹ್ಯ',
    category: 'Architecture',
    categoryKn: 'ವಾಸ್ತುಶಿಲ್ಪ',
    location: 'Bangalore, India',
    year: '2022',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/heritage-verandah-exterior/01.jpg',
    images: ['/images/projects/heritage-verandah-exterior/01.jpg'],
    narrative:
      'Restoration and reinterpretation of a traditional South Indian verandah. Colonial-era proportions are honored while new detailing breathes contemporary life into the threshold.',
    narrativeKn:
      'ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ವರಾಂಡಾದ ಪುನರುಜ್ಜೀವನ ಮತ್ತು ಮರು ವ್ಯಾಖ್ಯಾನ.',
    facts: [
      { label: 'Type', value: 'Heritage Restoration' },
      { label: 'Year', value: '2022' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '06',
    slug: 'terracotta-garden-facade',
    title: 'Terracotta Garden Facade',
    titleKn: 'ಟೆರಾಕೋಟಾ ಗಾರ್ಡನ್ ಫಸಾಡ್',
    category: 'Architecture',
    categoryKn: 'ವಾಸ್ತುಶಿಲ್ಪ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/terracotta-garden-facade/01.jpg',
    images: ['/images/projects/terracotta-garden-facade/01.jpg'],
    narrative:
      'Sun-baked terracotta screens filter tropical light across an interior garden. The facade performs as both solar shading and a living surface, changing character with the arc of the day.',
    narrativeKn:
      'ಸೂರ್ಯ-ಬೇಯಿಸಿದ ಟೆರಾಕೋಟಾ ಪರದೆಗಳು ಒಳ ಉದ್ಯಾನದ ಮೇಲೆ ಉಷ್ಣವಲಯದ ಬೆಳಕನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತವೆ.',
    facts: [
      { label: 'Type', value: 'Residential' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '07',
    slug: 'white-charcoal-corner-building',
    title: 'White–Charcoal Corner Building',
    titleKn: 'ಬಿಳಿ-ಇದ್ದಲು ಕೋನ ಕಟ್ಟಡ',
    category: 'Architecture',
    categoryKn: 'ವಾಸ್ತುಶಿಲ್ಪ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/white-charcoal-corner/01.jpg',
    images: ['/images/projects/white-charcoal-corner/01.jpg'],
    narrative:
      'Bold tonal contrast at the urban corner anchors the intersection. The interplay of white plaster and charcoal-painted volumes creates an architectural landmark in the neighbourhood fabric.',
    narrativeKn:
      'ನಗರ ಮೂಲೆಯಲ್ಲಿ ಧೈರ್ಯಶಾಲಿ ಸ್ವರ ವ್ಯತಿರಿಕ್ತತೆಯು ಛೇದಕವನ್ನು ಆಧಾರಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Mixed Use' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '08',
    slug: 'window-seat-detail',
    title: 'Window Seat Detail',
    titleKn: 'ಕಿಟಕಿ ಆಸನ ವಿವರ',
    category: 'Interior',
    categoryKn: 'ಒಳಾಂಗಣ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/window-seat-detail/01.jpg',
    images: ['/images/projects/window-seat-detail/01.jpg'],
    narrative:
      'A recessed window seat becomes a room within a room — a place of contemplation framed by daylight. Joinery, upholstery and threshold detail are considered as a unified composition.',
    narrativeKn:
      'ಒಂದು ತೆಗೆದ ಕಿಟಕಿ ಆಸನವು ಒಂದು ಕೋಣೆಯೊಳಗಿನ ಕೋಣೆಯಾಗುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '09',
    slug: 'double-height-living',
    title: 'Double-Height Living',
    titleKn: 'ದ್ವಿ-ಎತ್ತರದ ವಾಸ',
    category: 'Architecture',
    categoryKn: 'ವಾಸ್ತುಶಿಲ್ಪ',
    location: 'Bangalore, India',
    year: '2024',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/double-height-living/01.jpg',
    images: ['/images/projects/double-height-living/01.jpg'],
    narrative:
      'A soaring double-height volume redefines the scale of domestic living. Mezzanine insertions and a sweeping ceiling give the space a civic grandeur rarely found in residential architecture.',
    narrativeKn:
      'ಏರುತ್ತಿರುವ ದ್ವಿ-ಎತ್ತರದ ಸಂಪುಟವು ಗೃಹ ಜೀವನದ ಪ್ರಮಾಣವನ್ನು ಮರು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.',
    facts: [
      { label: 'Type', value: 'Private Residence' },
      { label: 'Area', value: '1,200 sq ft' },
      { label: 'Year', value: '2024' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '10',
    slug: 'landscapes-01-courtyard-revival',
    title: 'Overgrown Courtyard Revival',
    titleKn: 'ಅಂಗಳದ ಪುನರುಜ್ಜೀವನ',
    category: 'Landscapes',
    categoryKn: 'ಭೂದೃಶ್ಯ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/landscapes-01-courtyard-revival/after.jpg',
    images: [
      '/images/projects/landscapes-01-courtyard-revival/before.jpg',
      '/images/projects/landscapes-01-courtyard-revival/after.jpg',
    ],
    narrative:
      'Before: A neglected inner courtyard consumed by uncontrolled vegetation and broken paving, its potential hidden beneath years of disuse. After: A serene garden courtyard with curated tropical planting, flush stone paving, and a central water vessel that anchors the space in quiet contemplation.',
    narrativeKn:
      'ಮೊದಲು: ಅನಿಯಂತ್ರಿತ ಸಸ್ಯಗಳಿಂದ ತುಂಬಿದ ಅಂಗಳ. ನಂತರ: ಶಾಂತ ಉದ್ಯಾನ ಅಂಗಳ ಮತ್ತು ಕೇಂದ್ರ ಜಲ ಪಾತ್ರೆ.',
    facts: [
      { label: 'Type', value: 'Residential Landscape' },
      { label: 'Area', value: '450 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '11',
    slug: 'landscapes-02-dry-garden-terrace',
    title: 'Dry Garden Terrace',
    titleKn: 'ಒಣ ಉದ್ಯಾನ ಟೆರೇಸ್',
    category: 'Landscapes',
    categoryKn: 'ಭೂದೃಶ್ಯ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/landscapes-02-dry-garden-terrace/after.jpg',
    images: [
      '/images/projects/landscapes-02-dry-garden-terrace/before.jpg',
      '/images/projects/landscapes-02-dry-garden-terrace/after.jpg',
    ],
    narrative:
      'Before: A bare concrete terrace exposed to harsh afternoon sun, lacking shade or planting. After: A contemplative dry garden with raked gravel, specimen boulders, and drought-tolerant succulents arranged in considered asymmetry — drawing on Japanese karesansui principles adapted to the Deccan climate.',
    narrativeKn:
      'ಮೊದಲು: ಬರಿ ಕಾಂಕ್ರೀಟ್ ಟೆರೇಸ್. ನಂತರ: ರಾಶಿ ಜಲ್ಲಿ ಮತ್ತು ಶಿಲೆಗಳೊಂದಿಗೆ ಧ್ಯಾನದ ಒಣ ಉದ್ಯಾನ.',
    facts: [
      { label: 'Type', value: 'Terrace Landscape' },
      { label: 'Area', value: '280 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '12',
    slug: 'landscapes-03-tropical-water-garden',
    title: 'Tropical Water Garden',
    titleKn: 'ಉಷ್ಣವಲಯ ಜಲ ಉದ್ಯಾನ',
    category: 'Landscapes',
    categoryKn: 'ಭೂದೃಶ್ಯ',
    location: 'Bangalore, India',
    year: '2022',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/landscapes-03-tropical-water-garden/after.jpg',
    images: [
      '/images/projects/landscapes-03-tropical-water-garden/before.jpg',
      '/images/projects/landscapes-03-tropical-water-garden/after.jpg',
    ],
    narrative:
      'Before: An unused rear garden, compacted earth and sparse informal planting offering no reprieve from the urban context. After: A lush tropical garden centred on a reflecting pool edged in black granite. Layers of palm, heliconia, and broad-leaf plantings create a private rainforest atmosphere within the city.',
    narrativeKn:
      'ಮೊದಲು: ಬಳಕೆಯಿಲ್ಲದ ಹಿಂಭಾಗದ ಉದ್ಯಾನ. ನಂತರ: ಕಪ್ಪು ಗ್ರಾನೈಟ್ ಕೊಳ ಮತ್ತು ಉಷ್ಣವಲಯ ಸಸ್ಯಗಳೊಂದಿಗೆ ಸಮೃದ್ಧ ಉದ್ಯಾನ.',
    facts: [
      { label: 'Type', value: 'Residential Landscape' },
      { label: 'Area', value: '620 sq ft' },
      { label: 'Year', value: '2022' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '13',
    slug: 'landscapes-04-heritage-garden-restoration',
    title: 'Heritage Garden Restoration',
    titleKn: 'ಪರಂಪರೆ ಉದ್ಯಾನ ಪುನರುದ್ಧಾರ',
    category: 'Landscapes',
    categoryKn: 'ಭೂದೃಶ್ಯ',
    location: 'Bangalore, India',
    year: '2023',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/landscapes-04-heritage-garden-restoration/after.jpg',
    images: [
      '/images/projects/landscapes-04-heritage-garden-restoration/before.jpg',
      '/images/projects/landscapes-04-heritage-garden-restoration/after.jpg',
    ],
    narrative:
      'Before: A once-formal colonial-era garden reduced to overgrown hedges and deteriorating pathways, its original geometry lost to decades of neglect. After: Careful restoration of the axial layout, clipped box parterres, and period-appropriate planting reestablish the garden\'s historic dignity while introducing a contemporary utility for family living.',
    narrativeKn:
      'ಮೊದಲು: ನಿರ್ಲಕ್ಷ್ಯದಿಂದ ಹಾಳಾದ ವಸಾಹತು-ಯುಗದ ಉದ್ಯಾನ. ನಂತರ: ಐತಿಹಾಸಿಕ ಕ್ರಮ ಮತ್ತು ಆಧುನಿಕ ಉಪಯೋಗಕ್ಕಾಗಿ ಪುನರುದ್ಧರಿಸಿದ ಉದ್ಯಾನ.',
    facts: [
      { label: 'Type', value: 'Heritage Landscape' },
      { label: 'Area', value: '1,800 sq ft' },
      { label: 'Year', value: '2023' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    id: '14',
    slug: 'landscapes-05-urban-rooftop-retreat',
    title: 'Urban Rooftop Retreat',
    titleKn: 'ನಗರ ಟೆರೇಸ್ ಆಶ್ರಯ',
    category: 'Landscapes',
    categoryKn: 'ಭೂದೃಶ್ಯ',
    location: 'Bangalore, India',
    year: '2024',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/landscapes-05-urban-rooftop-retreat/after.jpg',
    images: [
      '/images/projects/landscapes-05-urban-rooftop-retreat/before.jpg',
      '/images/projects/landscapes-05-urban-rooftop-retreat/after.jpg',
    ],
    narrative:
      'Before: An exposed rooftop slab used only for storage, isolated from the life of the house below. After: A verdant rooftop garden with raised planting beds, a timber deck, and a pergola draped in seasonal creepers — transforming an overlooked surface into the home\'s most cherished outdoor room.',
    narrativeKn:
      'ಮೊದಲು: ಶೇಖರಣೆಗಾಗಿ ಮಾತ್ರ ಬಳಸಲಾದ ತೆರೆದ ಛಾವಣಿ. ನಂತರ: ಎತ್ತರಿಸಿದ ತೋಟ, ಮರದ ಡೆಕ್ ಮತ್ತು ಪರ್ಗೋಲಾದೊಂದಿಗೆ ಹಸಿರು ಛಾವಣಿ ಉದ್ಯಾನ.',
    facts: [
      { label: 'Type', value: 'Rooftop Landscape' },
      { label: 'Area', value: '750 sq ft' },
      { label: 'Year', value: '2024' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
