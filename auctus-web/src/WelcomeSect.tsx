import React from 'react'
import styled from 'styled-components'
import Justin from './Background/justin-background.png'

const Welcome = () => {

    return (
        <WelcomeBackground img={Justin}>

        </WelcomeBackground>
    )
}

const WelcomeBackground = styled.div`
    background-image: url(${(props:{img:string})=>props.img});
    background-repeat: no-repeat;
    background-size: cover;
`
export default Welcome;