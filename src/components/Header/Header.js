import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'



import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import USFlag from "../../assets/images/flag.png"
import swal from 'sweetalert';

import './Header.css'


const Header = (props) => {


    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    let navigate = useHistory();

    function aboutPage() {
        navigate.push('/aboutPage')
    }

    function handleSend() {
        navigate.push('/')
    }

    function myAccount() {
        navigate.push('/myAccount')
    }

    function transactionHistory() {
        navigate.push('/transactionHistory')
    }

    const handleLoginClick = () => {
        navigate.push('/login')
    }

    const handleSignOut = () => {

        swal({
            title: "Are you sure you want to sign out?",
            text: "You will lose all progress",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch({ type: 'CLEAR_CURRENCY' })
                    dispatch({ type: 'CLEAR_RECEIVER_INFO' })
                    dispatch({ type: 'CLEAR_USER_INFO' })
                    dispatch({ type: 'CLEAR_TRANSACTION' })
                    dispatch({ type: 'CLEAR_REFERENCE_NUMBER' })
                    dispatch({ type: 'LOGOUT' })
                    swal("Signed out Successfully!", {
                        icon: "success",
                    });
                    navigate.push('/')
                } else {
                    swal("Awesome! Continue with your transaction");
                }
            });

    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className='nav-grid' container spacing={2}>
                    <Grid textAlign="right" item xs={6} md={6} >
                        <h1 className='title-text'>GlobalTransfer</h1>
                    </Grid>
                    {user.id &&
                        <Grid textAlign="center" item xs={4} md={4} >
                            <h1 className='title-text'>Welcome : {user.firstname}</h1>
                        </Grid>
                    }
                    {/* <Grid textAlign="center" item xs={3} md={2}>
            <p style={{color:"white",fontSize:"16px",float:"right"}}>HELP <img width="25px" src={USFlag} /> EN</p>
        </Grid> */}

                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid className='nav-grid' container spacing={2}>

                <Grid className='nav-items' textAlign="center" item xs={3} md={2} >
                        <li onClick={() => aboutPage()} style={{ cursor: "pointer" }}>

                            About Us
                        </li>
                    </Grid>

                    <Grid className='nav-items' textAlign="center" item xs={3} md={2} >
                        <li onClick={() => handleSend()} style={{ cursor: "pointer" }}>

                            Send/Track Money
                        </li>
                    </Grid>

                    {!user.id &&
                        <>
                            <Grid className='nav-items' textAlign="center" item xs={3} md={2}>
                                <li onClick={() => handleLoginClick()} style={{ cursor: "pointer" }}>

                                    Log In
                                </li>

                            </Grid>
                            <Grid className='nav-items' textAlign="center" item xs={3} md={2}>
                                <li onClick={() => navigate.push('/sender-info')} style={{ cursor: "pointer" }}>

                                    Sign Up
                                </li>
                            </Grid>
                        </>
                    }

                    {user.id &&
                        <Grid className='nav-items' style={{ cursor: "pointer" }} textAlign="center" item xs={3} md={2}>
                            <li onClick={() => handleSignOut()}>

                                Sign Out
                            </li>
                        </Grid>
                    }

                    {user.id &&
                        <Grid className='nav-items' style={{ cursor: "pointer" }} textAlign="center" item xs={3} md={2}>
                        <li onClick={() => myAccount()}>

                            My Account
                        </li>
                        </Grid>
                    }

                    {user.id &&
                        <Grid className='nav-items' style={{ cursor: "pointer" }} textAlign="center" item xs={3} md={2}>
                        <li onClick={() => transactionHistory()}>

                            Transactions History
                        </li>
                        </Grid>
                    }
                </Grid>
            </Box>
        </div>
    );
}

export default Header;