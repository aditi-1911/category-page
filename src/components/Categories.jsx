import React from 'react';
import{ makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import category from '../static/category'
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: '100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));

export default function Categories() {
    const classes = useStyles();
    const checked = useWindowPosition("header");
    return(
        <div className={classes.root} id="select-category">
            <ImageCard category={category[0]} checked = {checked}/>
            <ImageCard category={category[1]}checked = {checked}/>
            <ImageCard category={category[2]}checked = {checked}/>
            <ImageCard category={category[3]}checked = {checked}/>
            <ImageCard category={category[4]}checked = {checked}/>

        </div>
    );
}