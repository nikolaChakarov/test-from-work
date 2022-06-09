import React from 'react'
import styled from 'styled-components';


const Banner = () => {
    return (
        <BannerContainer>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
  height: 35vh;
    background-image:  linear-gradient(to right, rgba(54, 214, 62, 0.794), rgba(53, 201, 157, 0.794), rgba(32, 155, 212, 0.794)),url("assets/images/mountain.jpg");
    background-position: center;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default Banner