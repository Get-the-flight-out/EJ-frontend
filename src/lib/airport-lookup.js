import airports from '../data/airports';

export const airportLookup = (code) => {
  for (let airport of airports) {
    if (airport.iata === code) return airport.city;
  }

  return 'unknown';
};
