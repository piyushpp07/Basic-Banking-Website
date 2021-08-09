
import React from 'react';
import { MDBBtn } from 'mdbreact';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary">
                Project by : Piyush Paradkar
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {'Copyright © '}
                <Link color="inherit" href="www.techwanderer.xyz">
                    techwanderer.xyz
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            "#7DEDFF",
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (


        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Copyright />
            </Container>

        </footer>

    );
}