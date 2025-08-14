import { createAsyncThunk } from "@reduxjs/toolkit";
import albumService from "./services";
import ServiceError from "../../ServiceError";

export const fetchArtistDetails = createAsyncThunk(
  "album/fetchAlbumDetails",
  async (_, thunkAPI) => {
    try {
      return await albumService.fetchAlbumDetails();
    } catch (err) {
      if (err instanceof ServiceError) {
        return thunkAPI.rejectWithValue(err.value);
      }
    }
  }
);

