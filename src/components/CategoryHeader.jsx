import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import './style.css';
//import useWindowPosition from '../hook/useWindowPosition';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
        backgroundColor: '#5AFF3D'
    },
    text:{
        color: '#282726'
    }
  }));



export default function CategoryHeader() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    );
}