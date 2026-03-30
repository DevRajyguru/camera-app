import summicron from '../assets/images/SummicronMirrorless.jpg'
import edgePrime from '../assets/images/EdgePrimeLens.jpg'
import rogueFlash from '../assets/images/rogueflash.png'
import atlasDSLR from '../assets/images/atlasdslr.png'
import novaLens from '../assets/images/novacinelens.png'
import horizonBody from '../assets/images/horizonbody.png'
import apexLens from '../assets/images/apex.png'
import prismKit from '../assets/images/prism.png'

export const featuredBrands = ['Canon', 'Sony', 'Nikon', 'Fujifilm']

export const categoryTiles = [
  {
    title: 'DSLR',
    subtitle: 'Pro Capture',
  },
  {
    title: 'Mirrorless',
    subtitle: 'Lightweight power',
  },
  {
    title: 'Lenses',
    subtitle: 'Sharp optics',
  },
  {
    title: 'Accessories',
    subtitle: 'Finish the kit',
  },
]

const products = [
  {
    id: 1,
    name: 'Summicron Mirrorless',
    brand: 'Sony',
    category: 'MIRRORLESS',
    image: summicron,
    sensor: 'Full Frame',
    megapixels: 24,
    iso: '100 - 102400 expandable to 204800',
    autofocus: 'Linear phase-detect AF',
    video: '4K/60p 10-bit',
    weight: '650g',
    battery: 'NP-FZ100 (~720 shots)',
    priceValue: 199117,
    priceLabel: '₹1,99,117',
    createdAt: '2026-03-16T08:00:00Z',
    summary: 'Cinematic mirrorless for hybrid storytellers who demand refined motion and still capture.',
    description:
      'Summicron Mirrorless blends flagship diffraction-limited optics with a lightning-fast AF system. The 24MP stacked sensor and 5-axis in-body stabilization deliver sharp detail across stills and 10-bit 4K footage, while a rugged magnesium alloy body stays cool during extended shoots.',
    specs: [
      { label: 'Resolution', value: '24MP backside-illuminated sensor' },
      { label: 'Video', value: '4K/60p 10-bit with S-Log3' },
      { label: 'ISO Range', value: '100 - 51200 expandable to 102400' },
      { label: 'Stabilization', value: '5-axis IBIS with active priority' },
    ],
  },
  {
    id: 2,
    name: 'Edge Prime Lens',
    brand: 'Canon',
    category: 'LENSES',
    image: edgePrime,
    sensor: 'Full Frame',
    megapixels: 'N/A',
    iso: '—',
    autofocus: 'Linear STM',
    video: 'N/A',
    weight: '900g',
    battery: 'N/A',
    priceValue: 99517,
    priceLabel: '₹99,517',
    createdAt: '2026-03-14T08:00:00Z',
    summary: 'Ultra-fast prime engineered for portrait and cinematic work.',
    description:
      'Edge Prime Lens delivers razor-sharp clarity and a creamy bokeh thanks to its f/1.4 aperture and precision-ground elements. ASC and Subwavelength coatings keep flares in check, while the linear STM autofocus ensures whisper-quiet performance for both photo and video.',
    specs: [
      { label: 'Mount', value: 'RF mount with electronic aperture control' },
      { label: 'Aperture', value: 'f/1.4 constant' },
      { label: 'Elements', value: '10 elements in 8 groups' },
      { label: 'Coating', value: 'ASC + Subwavelength anti-reflective' },
    ],
  },
  {
    id: 3,
    name: 'Rogue Studio Flash',
    brand: 'Nikon',
    category: 'ACCESSORIES',
    image: rogueFlash,
    sensor: 'APS-C',
    megapixels: 'N/A',
    iso: 'N/A',
    autofocus: 'TTL + HSS support',
    video: 'Modeling lamp for video',
    weight: '1.1kg',
    battery: 'AC powered',
    priceValue: 62167,
    priceLabel: '₹62,167',
    createdAt: '2026-03-12T08:00:00Z',
    summary: 'High-speed studio flash with TTL precision and dust-resistant housing.',
    description:
      'Rogue Studio Flash charges in a flash and supports TTL, HSS, and multi-flash sync. The built-in diffusion dome is perfect for soft portraits, while durable circuitry keeps color temperature locked even after marathon sessions.',
    specs: [
      { label: 'Power', value: '650Ws with stepless control' },
      { label: 'Guide Number', value: '60m @ ISO 100' },
      { label: 'Recycling', value: '0.05 - 1.5 seconds' },
      { label: 'Compatibility', value: 'TTL + HSS for Nikon/Canon' },
    ],
  },
  {
    id: 4,
    name: 'Atlas DSLR Pro',
    brand: 'Nikon',
    category: 'DSLR',
    image: atlasDSLR,
    sensor: 'Full Frame',
    megapixels: 26,
    iso: '100 - 64000 expandable to 102400',
    autofocus: 'Multi-CAM 37-point',
    video: '4K/30p + 1080/120p',
    weight: '840g',
    battery: 'EN-EL15c (~980 shots)',
    priceValue: 145067,
    priceLabel: '₹1,45,067',
    createdAt: '2026-03-10T08:00:00Z',
    summary: 'Tactile DSLR built for editorial, wildlife, and adventure stories.',
    description:
      'Atlas DSLR Pro combines a 26MP full-frame sensor with a responsive 1/8000s shutter and refined ergonomics. The deep grip, dual command dials, and weather-sealed body keep you steady across long expeditions.',
    specs: [
      { label: 'Resolution', value: '26MP full-frame CMOS' },
      { label: 'ISO Range', value: '100 - 64000 expandable to 102400' },
      { label: 'Shutter', value: '1/8000s mechanical + 1/32000s electronic' },
      { label: 'Flash Sync', value: '1/250s max' },
    ],
  },
  {
    id: 5,
    name: 'Nova Cine Lens',
    brand: 'Fujifilm',
    category: 'LENSES',
    image: novaLens,
    sensor: 'APS-C',
    megapixels: 'N/A',
    iso: '—',
    autofocus: 'Linear STM with click clutch',
    video: 'Cinema-grade focus breathing control',
    weight: '780g',
    battery: 'N/A',
    priceValue: 244850,
    priceLabel: '₹2,44,850',
    createdAt: '2026-03-08T08:00:00Z',
    summary: 'Cinema-grade prime for narrative filmmakers.',
    description:
      'Nova Cine Lens brings exquisite bokeh, smooth focus breathing, and solid build quality. The nano GI and HT-EBC coatings prevent flares while offering accurate color for film and high-end video.',
    specs: [
      { label: 'Type', value: 'Prime cine lens' },
      { label: 'Aperture', value: 'f/1.2 constant' },
      { label: 'Coating', value: 'Nano-GI + HT-EBC' },
      { label: 'Focus Drive', value: 'Linear STM motor' },
    ],
  },
  {
    id: 6,
    name: 'Horizon APS-C Body',
    brand: 'Sony',
    category: 'MIRRORLESS',
    image: horizonBody,
    sensor: 'APS-C',
    megapixels: 26,
    iso: '100 - 32000 expandable to 102400',
    autofocus: 'Hybrid phase/contrast 693-point',
    video: '4K/60p 10-bit (S-Log3)',
    weight: '520g',
    battery: 'NP-FZ100 (~700 shots)',
    priceValue: 174500,
    priceLabel: '₹1,74,500',
    createdAt: '2026-03-06T08:00:00Z',
    summary: 'APS-C body with flagship-inspired video tools.',
    description:
      'Horizon APS-C Body pairs a 26MP stacked sensor with fast burst shooting and 5-axis IBIS. Dual card slots and crisp EVF keep professionals confident on-set, while S-Cinetone ensures beautiful skin tones.',
    specs: [
      { label: 'Resolution', value: '26MP stacked sensor' },
      { label: 'Burst', value: '12fps with AE/AF tracking' },
      { label: 'Stabilization', value: '5-axis IBIS with Active mode' },
      { label: 'Connectivity', value: 'Dual card + HDMI Type-A' },
    ],
  },
  {
    id: 7,
    name: 'Prism Grip Kit',
    brand: 'Canon',
    category: 'ACCESSORIES',
    image: prismKit,
    sensor: 'Full Frame',
    megapixels: 'N/A',
    iso: 'N/A',
    autofocus: 'Mechanical grip controls',
    video: 'Supports HDMI monitoring',
    weight: '450g',
    battery: 'Accessory powered',
    priceValue: 83800,
    priceLabel: '₹83,800',
    createdAt: '2026-03-04T08:00:00Z',
    summary: 'Modular grip kit for handheld and rigged workflows.',
    description:
      'Prism Grip Kit adds counterbalanced handles, dedicated shutter releases, and HDMI monitoring support. Its magnesium alloy frame stays rigid but light, making long handheld takes more comfortable.',
    specs: [
      { label: 'Material', value: 'Magnesium alloy chassis' },
      { label: 'Weight', value: '450g complete kit' },
      { label: 'Compatibility', value: 'Canon EOS + mirrorless bodies' },
      { label: 'Workflow', value: 'Left + right hand controls' },
    ],
  },
  {
    id: 8,
    name: 'Apex Prime 85',
    brand: 'Fujifilm',
    category: 'LENSES',
    image: apexLens,
    sensor: 'Full Frame',
    megapixels: 'N/A',
    iso: '—',
    autofocus: 'Linear STM with focus hold',
    video: 'Cinema-grade focus breathing',
    weight: '950g',
    battery: 'N/A',
    priceValue: 211500,
    priceLabel: '₹2,11,500',
    createdAt: '2026-03-02T08:00:00Z',
    summary: 'Timeless portrait prime with modern coatings and autofocus.',
    description:
      'Apex Prime 85 is built for character portraits and editorial cinema. Its 11-element design keeps highlights in check while the silent linear STM AF and high-precision aperture ring give you tactile control.',
    specs: [
      { label: 'Aperture', value: 'f/1.8' },
      { label: 'Focal Length', value: '85mm' },
      { label: 'Elements', value: '11 elements / 9 groups' },
      { label: 'Autofocus', value: 'Linear STM with focus hold button' },
    ],
  },
]

export const productsCatalog = products
export const trendingProducts = products.slice(0, 3)
export const newLaunches = products.slice(3, 6)
