export interface Country {
    capital: string,
    capitalInfo: {
      latlng: []
    }

    flags: {
      svg: string
    },
    languages: {
      language: []
    },
    maps: {
      googleMaps: string
    }
    name: {
      common: string,
      official: string,
    },
    population: number,
    region: string
    
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