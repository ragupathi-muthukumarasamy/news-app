"use client"
const { Fragment } = require("react")
const { default: SimpleContainer } = require("../components/dynamiccomponents/SimpleContainer")
import Box from '@mui/material/Box';
import BasicGrid from '../components/dynamiccomponents/BasicGrid';
import Grid from '@mui/material/Unstable_Grid2';
import '../styles/sigin.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "../page.module.css";


const SignIn = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 'auto'
    }));

    let data = {
        data: <Box sx={{
            bgcolor: '#cfe8fc', margin: '4vh', backgroundColor: '#80808029',
            height: 'auto', borderRadius: '10px', minHeight: '60vh'
        }} >
            <div className='first' ></div> <div className='second' ></div>
            <div className="parent-container">
                <div className="child-container"></div>
                <div className="child-container"></div>
            </div>
            {/* <Grid sx={{ flexGrow: 1, margin: 0 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Paper
                                sx={{
                                    height: '25vh',
                                    width: 'auto',
                                    minWidth: '70vh',
                                    maxWidth: '60vh',
                                    overflow: 'hidden',
                                    fontFamily: 'math',
                                    padding: '5px',
                                    margin: '1%',
                                    marginTop: '25%',
                                    textAlign:'center',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >  <div className={styles.description} > <h1>UP2DATE <span style={{fontSize: '1rem'}} > {'news'} </span>
                              </h1></div>
                                <p style={{textAlign:'center', fontStyle:'bold'}} >Signup</p> </Paper>
                        </Grid>
                        <Grid item>
                            <Paper
                                sx={{
                                    height: '55vh',
                                    width: 'auto',
                                    minWidth: '40vh',
                                    maxWidth: '70vh',
                                    fontFamily: 'monospace',
                                    padding: '5px',
                                    margin: '2%',
                                    overflow: 'hidden',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            > {`"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`}
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid> */}
        </Box>
    }
    return (
        <Fragment>
            <SimpleContainer data={data} />
        </Fragment>
    )
}

export default SignIn