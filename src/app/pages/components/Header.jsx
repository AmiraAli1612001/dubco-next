import { Box, Grid } from '@mui/material'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/images/logo-icon.png"
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    let links = [
        {link :"HOME" , path:"#"},
        {link :"ABOUT US*" , path:"#"},
        {link :"SERVICES" , path:"#"},
        {link :"OUR WORK" , path:"#"},
        {link :"TESTIMOIALS" , path:"#"},
        {link :"CONTACT US" , path:"#"},

    ]
  return (
    <Box className="header">
        <Grid  className="top" container >
            <Grid item xs={12} lg={3}>
            <p><span><FaPhone/></span> <span>0112950783</span></p>

            </Grid>
            <Grid item xs={12} lg={8} className='right'>
            <p><FaFacebookF/><FaLinkedinIn/><FaXTwitter/></p>

            </Grid>
        </Grid>
        <Grid container className='bottom'>
            <Grid item className='logo' xs={12} lg={3}>
               {/* <Image
        src="./assets/images/logo-icon.png"
        alt="My Image"
        width={500}
        height={300}
      />*/}
      <span>Dubco</span> 
            </Grid>
            <Grid item xs={12} lg={8} className='links'>
                {
                    links.map((item , index)=>{
                        return(

                            <Link href={item.path}>{item.link}</Link>
                        )
                    })
                }
            </Grid>
        </Grid>
    </Box>
  )
}
