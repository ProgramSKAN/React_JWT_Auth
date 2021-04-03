import React, { useState, useEffect } from 'react';
import { AppHeader } from './AppHeader';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import '../styles.css';
const url = 'http://localhost:5000/books';

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setBooks([...json.books]))
      .catch((err) => console.log('Error fetching books ', err.message));
  }, []);

  return (
    <div>
      <AppHeader tabValue={0} />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h3">
            Curated Books
            <span role="img" aria-label="books">
              📚
            </span>
          </Typography>
        </Grid>
        <Grid item container justify="center">
          {books.map((book, key) => {
            return (
              <Book
                key={key}
                id={book.id}
                name={book.name}
                author={book.author}
                color={book.color}
                onClick={() => console.log('My Favorite')}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

const Book = ({ id, name, author, onClick }) => {
  return (
    <Paper elevation={2} className="Book">
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h6">{name}</Typography>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          {author}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => onClick(id)}
        >
          Add To Favorites
        </Button>
      </Grid>
    </Paper>
  );
};
