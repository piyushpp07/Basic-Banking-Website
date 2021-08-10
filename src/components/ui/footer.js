import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles, Link } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.common.blue,
        top: "auto",
        bottom: "0px",
    },
    center: {
        margin: "0 auto"
    },
}))

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.footer}>
                <Toolbar className={classes.center} >
                    <div>
                        <Typography variant="body2" style={{ color: 'black', textAlign: 'center' }}>
                            Project Made By Piyush Paradkar
                        </Typography>
                        <Typography variant="body2" style={{ color: 'black', textAlign: 'center' }}>
                            {'Copyright © '}
                            <Link color="inherit" href="https://www.techwanderer.xyz">
                                techwanderer.xyz
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}