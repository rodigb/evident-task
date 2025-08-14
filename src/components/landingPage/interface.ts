export interface Album {
  name: string;
  year_released: number;
  tracks: number;
  length: string;
  cover_image_path: string;
  cover_image_id: number;
}

export interface ArtistData {
  artist: string;
  albums: Album[];
}