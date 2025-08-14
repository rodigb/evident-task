import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ArtistData } from "./interface";
import { fetchArtistDetails } from "./actions";


export interface ArtistState extends ArtistData {
  loading: boolean;
  error: string | null;
  chosenArtist: string;
}
 
const initialState: ArtistState = {
  artists: [],
  albums: [],
  loading: false,
  error: null,
  chosenArtist:''
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
      setArtist: (state, action: PayloadAction<string>) => {
      state.chosenArtist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtistDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = action.payload.artists;
        state.albums = action.payload.albums;
      })
      .addCase(fetchArtistDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch albums";
      });
  },
});

 
export const selectArtist = (state: RootState) => state.album.artists
export const selectAlbums = (state: RootState) => state.album.albums;
export const { setArtist } = albumSlice.actions;


export default albumSlice.reducer;
