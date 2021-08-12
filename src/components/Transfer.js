import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { Button } from "react-bootstrap";
const useStyles = makeStyles(() => ({

}));


export default function Transfer() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    const [sender, setSender] = useState("");
    let [reciver, setReciver] = useState("");
    const [amt, setAmt] = useState(0);
    const [status, setStatus] = useState("done");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getDataFromFirebase = [];
        const subscriber = db.collection('students-list').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataFromFirebase.push({ ...doc.data(), key: doc.id });
            });
            setPosts(getDataFromFirebase);
        });
        return () => subscriber();
    }, [])


    const sendToTransfer = async () => {

        db.collection("students-list").doc("transfer").collection("lists").add({
            from: sender,
            to: reciver,
            amount: amt,
            status: status,
            time: new Date().toLocaleString()
        }).then(() => { alert("transaction completed") }).catch((error) => { alert(error.message) });
    }
    const onAmountChange = (e) => {
        const amt = e.target.value;
        if (!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmt(amt);
        }
    }
    const transferMoney = async (e) => {

        e.preventDefault();
        var rusr = posts.filter(p => { return p.email === reciver });
        var susr = posts.filter(p => { return p.email === sender });
        if (susr[0].email === rusr[0].email) {
            alert("both Sender and Reciver Cant Be same")

        } else if (parseFloat(susr[0].Amount) < parseFloat(amt)) {
            alert("Sender dont have enough funds");
        }
        else {
            setStatus("done");
            var ramt = parseFloat(rusr[0].Amount) + parseFloat(amt);
            var sena = parseFloat(susr[0].Amount) - parseFloat(amt);
            var sup = await db.collection("students-list").doc(susr[0].key).update({
                Amount: parseFloat(sena)
            })
            var rup = await db.collection("students-list").doc(rusr[0].key).update({
                Amount: parseFloat(ramt)
            })

            setAmt(0);
            setReciver("");
            setSender("");

            console.log('reupdate:', rup);
            console.log('seupdate:', sup);


            sendToTransfer();
        }
    }


    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            style={{
                marginTop: matchesSM ? '4em' : matchesMD ? '5em' : undefined,
                marginBottom: matchesMD ? '5em' : undefined
            }}
        >
            <Grid item>
                <Grid item container direction='column' style={{ alignItems: 'center' }}>
                    <h1 style={Styles.hea}>Transfer Money</h1>

                    <Grid
                        item
                        container
                        direction='column'
                        style={{ maxWidth: matchesSM ? '25em' : '40em' }}
                    >
                        <Grid item style={{ marginTop: '2em', marginBottom: '0.5em' }}>
                            <Typography style={{ color: theme.palette.common.blue }}>From</Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    native

                                    value={sender}
                                    onChange={(e) => setSender(e.target.value)}
                                    label="From"
                                >
                                    <option aria-label="None" value="" />
                                    {posts.map((data) => {
                                        return (<option key={Math.random().toString(36).substr(2, 9)}>{data.email}</option>)
                                    })}
                                </Select>
                            </FormControl>


                        </Grid>
                        <Grid item style={{ marginBottom: '0.5em' }}>
                            <Typography style={{ color: theme.palette.common.blue }}>To</Typography>
                            <FormControl variant="outlined" fullWidth >
                                <Select
                                    native
                                    value={reciver}
                                    onChange={(e) => setReciver(e.target.value)}
                                    label="From"
                                >
                                    <option aria-label="None" value="" />
                                    {posts.map((data) => {
                                        return (<option key={Math.random().toString(36).substr(2, 9)}> {data.email}</option>)
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item style={{ marginBottom: '0.5em' }}>
                            <Typography style={{ color: theme.palette.common.blue }}>
                                Amount
                            </Typography>
                            <TextField
                                id="amount"
                                style={{ marginTop: '1' }}
                                variant="outlined"
                                fullWidth
                                value={amt}
                                onChange={onAmountChange}
                            />
                        </Grid>
                        <Grid item container justifyContent='center' style={{ marginTop: '2em' }}>
                            <Button
                                disabled={
                                    reciver.length === 0 ||
                                    sender.length === 0

                                }

                                variant='primary'
                                className={classes.sendButton}
                                onClick={transferMoney}
                            >
                                Transfer
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
const Styles = {
    hea: {
        color: "#5C527F",

    },
}