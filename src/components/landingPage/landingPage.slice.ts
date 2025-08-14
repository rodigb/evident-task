import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ArtistData } from "./interface";
import { fetchArtistDetails } from "./actions";


export interface ArtistState extends ArtistData {
  loading: boolean;
  error: string | null;
}
 
const initialState: ArtistState = {
  artist: '',
  albums: [],
  loading: false,
  error: null,
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtistDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.artist = action.payload.artist;
        state.albums = action.payload.albums;
      })
      .addCase(fetchArtistDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch albums";
      });
  },
});

 
export const selectArtist = (state: RootState) => state.album.artist
export const selectAlbums = (state: RootState) => state.album.albums;

export default albumSlice.reducer;
