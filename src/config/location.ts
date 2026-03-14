/** OpenStreetMap embed bbox (minLon, minLat, maxLon, maxLat) and marker (lat, lon) for Calle de la Infanta Mercedes, 56, Madrid */
export const MAP_EMBED = {
  bbox: "-3.7100,40.4550,-3.6900,40.4650",
  marker: "40.4600,-3.7000",
} as const;

export const MAP_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(MAP_EMBED.bbox)}&layer=mapnik&marker=${encodeURIComponent(MAP_EMBED.marker)}`;
