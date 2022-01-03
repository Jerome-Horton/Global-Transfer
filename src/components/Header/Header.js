import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@material-ui/core/IconButton';
import { IconFlagUS } from 'material-ui-flags';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div>
            <AppBar class="Appbar-1">
                <Grid container ml={70} lg={12}>

                    <Grid item lg={5} xs={12}>
                        <Typography style={{ marginLeft:"1em", color: 'white', fontFamily: 'Rancho' }} variant="h2" component="div">

                            GlobalTransfer
                        </Typography>
                    </Grid>

                    <Grid  item lg={6} xs={12}>
                        <Grid container >

                            <Button>   <Typography style={{ color: 'white', marginTop: "1em" }} variant="h6" component="div">

                                Help
                            </Typography>
                            </Button>



                            <IconButton style={{ color: 'white', marginTop: "0.5em", marginLeft: "2.5em" }}  ><IconFlagUS /> <Typography style={{ color: 'white', marginLeft: "4px" }} variant="h6" component="div">

                                EN
                            </Typography> </IconButton>

                        </Grid >

                    </Grid>

                </Grid>



                <Grid lg={12} item container spacing={10} ml={35} >

                    <Grid item lg={2} xs={12} >
                        <Button>   <Typography style={{ color: 'white', marginTop: "1em" ,marginLeft:"1em" }} variant="h6" component="div">

                            Send Money
                        </Typography>
                        </Button>

                    </Grid>
                    <Grid item lg={2} xs={12} >
                        <Button>   <Typography style={{ color: 'white', marginTop: "1em" }} variant="h6" component="div">

                            Track + Receive
                        </Typography>
                        </Button>

                    </Grid>
                    <Grid item lg={1} xs={12} >
                        <Button>   <Typography style={{ color: 'white', marginTop: "1em" }} variant="h6" component="div">

                            Login
                        </Typography>
                        </Button>

                    </Grid>
                    <Grid item lg={2} xs={12} >
                        <Button>   <Typography style={{ color: 'white', marginTop: "1em" }} variant="h6" component="div">

                            Sign Up
                        </Typography>
                        </Button>

                    </Grid>


                </Grid>


            </AppBar>

        </div>

    );
}
export default Header;