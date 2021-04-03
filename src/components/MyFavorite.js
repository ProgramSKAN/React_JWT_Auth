import React from 'react';
import { AppHeader } from './AppHeader';
import { Grid, Paper, Typography } from '@material-ui/core';
import '../styles.css';

const books = [
  {
    name: 'Surrounded by idiots',
    author: 'Thomas Erikson',
  },
  {
    name: 'Stillness is the key',
    author: 'Ryan Holiday',
  },
];

export const MyFavorite = () => {
  return (
    <div>
      <AppHeader tabValue={1} />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Your Favorite Books
            <span role="img" aria-label="books">
              👍
            </span>
          </Typography>
        </Grid>
        <Grid item>
          {books.map((book, key) => {
            return (
              <Paper key={key} elevation={2} className="Book">
                <Grid container direction="column">
                  <Typography variant="h6">{book.name}</Typography>
                </Grid>
                <Typography varaint="subtitle1" gutterBottom>
                  {book.author}
                </Typography>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};
