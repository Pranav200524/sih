export interface SpeciesData {
  id: string;
  scientificName: string;
  commonName: string;
  phylum: string;
  class: string;
  family: string;
  genus: string;
  species: string;
  latitude: number;
  longitude: number;
  depth: number;
  temperature: number;
  year: number;
  month: number;
  day: number;
  dataset: 'voucher' | 'indOBIS' | 'fishBase' | 'oceanBiogeographic';
  recordedBy: string;
  institutionCode: string;
  catalogNumber: string;
  locality: string;
  country: string;
  occurrenceStatus: 'present' | 'absent';
  individualCount: number;
}

export interface ChartData {
  name?: string;
  value?: number;
  count?: number;
  month?: string;
  year?: number;
}

// Dummy marine biodiversity data
export const marineSpeciesData: SpeciesData[] = [
  {
    id: '1',
    scientificName: 'Thunnus albacares',
    commonName: 'Yellowfin Tuna',
    phylum: 'Chordata',
    class: 'Actinopterygii',
    family: 'Scombridae',
    genus: 'Thunnus',
    species: 'albacares',
    latitude: -12.5,
    longitude: 130.8,
    depth: 50,
    temperature: 24.5,
    year: 2023,
    month: 6,
    day: 15,
    dataset: 'indOBIS',
    recordedBy: 'Marine Research Station',
    institutionCode: 'AIMS',
    catalogNumber: 'AIMS-2023-001',
    locality: 'Coral Sea',
    country: 'Australia',
    occurrenceStatus: 'present',
    individualCount: 3
  },
  {
    id: '2',
    scientificName: 'Chelonia mydas',
    commonName: 'Green Sea Turtle',
    phylum: 'Chordata',
    class: 'Reptilia',
    family: 'Cheloniidae',
    genus: 'Chelonia',
    species: 'mydas',
    latitude: -23.5,
    longitude: 151.8,
    depth: 10,
    temperature: 26.2,
    year: 2023,
    month: 8,
    day: 22,
    dataset: 'voucher',
    recordedBy: 'Queensland Marine Park',
    institutionCode: 'QMP',
    catalogNumber: 'QMP-2023-045',
    locality: 'Great Barrier Reef',
    country: 'Australia',
    occurrenceStatus: 'present',
    individualCount: 1
  },
  {
    id: '3',
    scientificName: 'Acropora cervicornis',
    commonName: 'Staghorn Coral',
    phylum: 'Cnidaria',
    class: 'Anthozoa',
    family: 'Acroporidae',
    genus: 'Acropora',
    species: 'cervicornis',
    latitude: 25.7,
    longitude: -80.1,
    depth: 15,
    temperature: 27.8,
    year: 2023,
    month: 4,
    day: 10,
    dataset: 'oceanBiogeographic',
    recordedBy: 'Florida Keys Marine Sanctuary',
    institutionCode: 'FKNMS',
    catalogNumber: 'FKNMS-2023-078',
    locality: 'Florida Keys',
    country: 'United States',
    occurrenceStatus: 'present',
    individualCount: 12
  },
  {
    id: '4',
    scientificName: 'Megaptera novaeangliae',
    commonName: 'Humpback Whale',
    phylum: 'Chordata',
    class: 'Mammalia',
    family: 'Balaenopteridae',
    genus: 'Megaptera',
    species: 'novaeangliae',
    latitude: -27.5,
    longitude: 153.4,
    depth: 200,
    temperature: 22.1,
    year: 2023,
    month: 7,
    day: 5,
    dataset: 'indOBIS',
    recordedBy: 'Whale Research Group',
    institutionCode: 'WRG',
    catalogNumber: 'WRG-2023-012',
    locality: 'Moreton Bay',
    country: 'Australia',
    occurrenceStatus: 'present',
    individualCount: 2
  },
  {
    id: '5',
    scientificName: 'Hippocampus kuda',
    commonName: 'Common Seahorse',
    phylum: 'Chordata',
    class: 'Actinopterygii',
    family: 'Syngnathidae',
    genus: 'Hippocampus',
    species: 'kuda',
    latitude: 14.5,
    longitude: 121.0,
    depth: 8,
    temperature: 28.5,
    year: 2023,
    month: 9,
    day: 18,
    dataset: 'fishBase',
    recordedBy: 'Philippine Marine Research',
    institutionCode: 'PMR',
    catalogNumber: 'PMR-2023-089',
    locality: 'Manila Bay',
    country: 'Philippines',
    occurrenceStatus: 'present',
    individualCount: 5
  },
  {
    id: '6',
    scientificName: 'Carcharhinius leucas',
    commonName: 'Bull Shark',
    phylum: 'Chordata',
    class: 'Chondrichthyes',
    family: 'Carcharhinidae',
    genus: 'Carcharhinus',
    species: 'leucas',
    latitude: -16.2,
    longitude: 145.7,
    depth: 75,
    temperature: 25.3,
    year: 2023,
    month: 5,
    day: 28,
    dataset: 'indOBIS',
    recordedBy: 'Shark Research Institute',
    institutionCode: 'SRI',
    catalogNumber: 'SRI-2023-034',
    locality: 'Cairns',
    country: 'Australia',
    occurrenceStatus: 'present',
    individualCount: 1
  },
  {
    id: '7',
    scientificName: 'Tridacna gigas',
    commonName: 'Giant Clam',
    phylum: 'Mollusca',
    class: 'Bivalvia',
    family: 'Cardiidae',
    genus: 'Tridacna',
    species: 'gigas',
    latitude: -8.5,
    longitude: 140.2,
    depth: 25,
    temperature: 29.1,
    year: 2023,
    month: 3,
    day: 12,
    dataset: 'voucher',
    recordedBy: 'Indo-Pacific Research Station',
    institutionCode: 'IPRS',
    catalogNumber: 'IPRS-2023-056',
    locality: 'Torres Strait',
    country: 'Australia',
    occurrenceStatus: 'present',
    individualCount: 3
  },
  {
    id: '8',
    scientificName: 'Manta birostris',
    commonName: 'Giant Manta Ray',
    phylum: 'Chordata',
    class: 'Chondrichthyes',
    family: 'Mobulidae',
    genus: 'Mobula',
    species: 'birostris',
    latitude: -3.5,
    longitude: 98.7,
    depth: 30,
    temperature: 27.9,
    year: 2023,
    month: 10,
    day: 7,
    dataset: 'oceanBiogeographic',
    recordedBy: 'Indonesian Marine Institute',
    institutionCode: 'IMI',
    catalogNumber: 'IMI-2023-091',
    locality: 'Komodo National Park',
    country: 'Indonesia',
    occurrenceStatus: 'present',
    individualCount: 1
  }
];

// Chart data for species distribution
export const speciesDistributionData: ChartData[] = [
  { name: 'Fish', value: 45, count: 3240 },
  { name: 'Coral', value: 25, count: 1800 },
  { name: 'Marine Mammals', value: 15, count: 1080 },
  { name: 'Mollusks', value: 10, count: 720 },
  { name: 'Other', value: 5, count: 360 }
];

// Monthly occurrence data
export const monthlyOccurrenceData: ChartData[] = [
  { month: 'Jan', count: 245 },
  { month: 'Feb', count: 189 },
  { month: 'Mar', count: 322 },
  { month: 'Apr', count: 398 },
  { month: 'May', count: 456 },
  { month: 'Jun', count: 523 },
  { month: 'Jul', count: 478 },
  { month: 'Aug', count: 612 },
  { month: 'Sep', count: 589 },
  { month: 'Oct', count: 434 },
  { month: 'Nov', count: 356 },
  { month: 'Dec', count: 298 }
];

// Depth distribution data
export const depthDistributionData: ChartData[] = [
  { name: '0-10m', value: 35, count: 2520 },
  { name: '10-50m', value: 30, count: 2160 },
  { name: '50-100m', value: 20, count: 1440 },
  { name: '100-500m', value: 10, count: 720 },
  { name: '500m+', value: 5, count: 360 }
];

// Dataset contribution data
export const datasetContributionData: ChartData[] = [
  { name: 'indOBIS', value: 40, count: 2880 },
  { name: 'voucher', value: 25, count: 1800 },
  { name: 'fishBase', value: 20, count: 1440 },
  { name: 'oceanBiogeographic', value: 15, count: 1080 }
];