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