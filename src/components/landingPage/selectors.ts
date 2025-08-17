import { RootState } from "../../store";

export const selectArtist = (state: RootState) => state.album.artists;
export const selectAlbums = (state: RootState) => state.album.albums;
export const chosenArtist = (state: RootState) => state.album.chosenArtist
