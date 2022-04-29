import React from 'react';
import { TrendingMovies } from './components/TrendingMoviesList';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <TrendingMovies/>
      <GlobalStyle/>
    </>
  );
}
