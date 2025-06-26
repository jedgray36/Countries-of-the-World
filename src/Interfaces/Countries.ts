export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital?: string[]; // some countries may have multiple capitals or none
  capitalInfo?: {
    latlng: number[];
  };
  latlng?: number[];
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: {
    [languageCode: string]: string;
  };
  maps?: {
    googleMaps: string;
    openStreetMaps?: string;
  };
}

  export const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic"
    ];


   export const sorts = [
      "A - Z",
      "Z - A",
      "Population, H - L",
      "Population, L - H",
    ]