import { Box, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
export default function Services() {
    return (
        <Box className="services">

            <Grid container className='container'>
                <Grid item xs={12} md={5} lg={3} className='item'>
                    <h1>Services
                    </h1>
                    <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!
                    </p>
                </Grid>
                <Grid item  xs={12} md={5} lg={3} className='item'>

                    <Image src={"https://html.design/demo/constructed/images/icon1.png"} width={120} height={72} alt='service' />
                    <h2>Service One
                    </h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.

                    </p>
                </Grid>
                <Grid  xs={12} md={5} lg={3} className='item'>
                    <Image src={"https://html.design/demo/constructed/images/icon4.png"} width={120} height={72} alt='service' />
                    <h2>Service One
                    </h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.

                    </p>
                </Grid>
            </Grid>

<Grid container>
    <Grid item className='item-2'  xs={12} md={6} lg={4}>
    <Image src={"https://html.design/demo/constructed/images/sr1.png"} width={85} height={72} alt='service' />
    <p className='p-1'>Manufacturing</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores molestiae optio voluptates dignissimos incidunt dicta, iure quidem! Nihil tempora non ipsum iure autem. Exercitationem vero consectetur molestias ratione ut?</p>
    </Grid>
    <Grid item className='item-2' xs={12} md={6} lg={4}>
    <Image src={"https://html.design/demo/constructed/images/sr1.png"} width={85} height={72} alt='service' />
    <p className='p-1'>Manufacturing</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores molestiae optio voluptates dignissimos incidunt dicta, iure quidem! Nihil tempora non ipsum iure autem. Exercitationem vero consectetur molestias ratione ut?</p>

    </Grid>
    <Grid item className='item-2' xs={12} md={6} lg={4}>
    <Image src={"https://html.design/demo/constructed/images/sr1.png"} width={85} height={72} alt='service' />
    <p className='p-1'>Manufacturing</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores molestiae optio voluptates dignissimos incidunt dicta, iure quidem! Nihil tempora non ipsum iure autem. Exercitationem vero consectetur molestias ratione ut?</p>

    </Grid>

</Grid>
        </Box>
    )
}
