import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ArtistData } from "./interface";
import { fetchAlbumDetails } from "./actions";


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
      .addCase(fetchAlbumDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbumDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = action.payload.artists;
        state.albums = action.payload.albums;
      })
      .addCase(fetchAlbumDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch albums";
      });
  },
});

export const { setArtist } = albumSlice.actions;


export default albumSlice.reducer;
