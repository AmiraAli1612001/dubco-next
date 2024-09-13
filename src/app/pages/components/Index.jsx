import { Box, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image';

export default function Index() {
    return (
        <Box className="index">
            <Box className="fit">
                <Image
                    src="https://html.design/demo/constructed/uploads/building/sep-line-white.png"
                    width={500}
                    height={10}
                    alt="Image from HTML Design"
                />
                <h1>Construction
                </h1>
                <Image
                    src="https://html.design/demo/constructed/uploads/building/sep-line-white.png"
                    width={500}
                    height={10}
                    alt="Image from HTML Design"
                />
                <p>With Landigoo responsive landing page template, you can showcase your <br /> awesome building & construction services!

                </p>
                <Button>view all services</Button>
            </Box>
        </Box>
    )
}
