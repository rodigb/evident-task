import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './components/register/register.slice';
import albumsReducer from './components/landingPage/landingPage.slice';
import quizReducer from './components/quiz/quiz.slice';
 
export const store = configureStore({
  reducer: {
    register: registerReducer,
    album: albumsReducer,
    quiz: quizReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

