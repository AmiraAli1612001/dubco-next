import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import { FaHome } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUS() {
    return (
        <Box className="contact">
            <h1>Contact Us
            </h1>
            <p className='p-1'>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non <br /> aliquam risus. Sed a tellus quis mi rhoncus dignissim.

            </p>
            <Grid container   className="container">
                <Grid item  xs={12} md={3} lg={2}>
                    <p><span><FaHome /></span> <span><span>Address:
                    </span> <span>1010 Berkler avenue, Brooklyn New York City, NY 10018 US
                        </span></span></p>
                </Grid>
                <Grid item  xs={12} md={6} lg={8}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="First Name" variant="standard" />
                        <TextField id="standard-basic" label="Last Name" variant="standard" />

                    </Box>
                </Grid>
            </Grid>
            <Grid container  className="container">
                <Grid item   xs={12} md={3} lg={2}>
                    <p><span><FaPhoneVolume /></span> <span><span>Phone No:
                    
                    </span> <span>+212 386 5575

                        </span></span></p>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" type='email' label="Your Email" variant="standard" />
                        <TextField id="standard-basic" label="Your Website" variant="standard" />

                    </Box>
                </Grid>
            </Grid>
            <Grid container  className="container">
                <Grid item   xs={12} md={3} lg={2}>
                    <p><span><MdEmail /></span> <span><span>Email Address:

                    
                    </span> <span>Demo@gmail.com


                        </span></span></p>
                </Grid>
                <Grid item  xs={12} md={6} lg={8}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Give US More Details" variant="standard" />

                    </Box>
                    <Button type='submit'>Submit</Button>
                </Grid>
                
            </Grid>
        </Box>
    )
}
