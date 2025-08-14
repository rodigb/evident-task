import { RootState } from "../../store";

export const selectArtist = (state: RootState) => state.album.artist;
export const selectAlbums = (state: RootState) => state.album.albums;
