import { Grid, makeStyles, Typography, useTheme, useMediaQuery, Button } from '@material-ui/core';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';


const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "15em",
        width: "15em",
        [theme.breakpoints.down("sm")]: {
            height: "15em",
            width: "15em",
            maxHeight: 300,
            maxWidth: 300
        }
    }
}))



export default function AboutUs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Grid container direction='column'>
            <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? '1em' : '1em' }}>
                <Typography align='center' variant='h2'>
                    About Me
                </Typography>
            </Grid>
            <Grid
                item
                container
                justifyContent='center'
                className={classes.rowContainer}
                style={{ marginTop: '3em' }}
            >
                <Typography variant='h4' align='center' className={classes.missionStatement}>
                    Web developer with a strong interest in projects that require both conceptual and analytical thinking. Fully-committed to develop innovative applications that users will love. Always eager to learn more.
                </Typography>
            </Grid>
            <Grid
                item
                container
                direction='column'
                className={classes.rowContainer}
                alignItems='center'
                style={{ marginBottom: '10em', marginTop: '3em' }}
            >
                <Grid item>
                    <Typography variant='h4' gutterBottom align="center">
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Piyush Paradkar, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        Web Developer
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        style={{ color: "black" }}
                        onClick={() => window.open("https://github.com/piyushpp07", '_blank')}
                    >
                        <GitHub />
                    </Button>
                    <Button style={{ color: "black" }}
                        onClick={() => window.open("https://twitter.com/PiyushParadkar9", '_blank')}
                    >
                        <Twitter />
                    </Button>
                    <Button style={{ color: "black" }}
                        onClick={() => window.open("https://www.linkedin.com/in/piyush-paradkar-61a2a11b1/", '_blank')}
                    >
                        <LinkedIn />
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    )
}