import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline}  from '@material-ui/core';
import Header from './components/Header';
import Categories from './components/CategoryHeader';
import CategoryHeader from './components/Categories';
//import Login from './components/Login';
//import SignUp from './components/signup';

const useStyles = makeStyles({
  root: {
    minHeight: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepage.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <CssBaseline/>
      <CategoryHeader/>
      <Categories/>
  </div>
  );
}

