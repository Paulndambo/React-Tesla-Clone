import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Quick Delivery!"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
               <Section
                title="Model Y"
                description="Order Online for Quick Delivery!"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
               <Section
                title="Model 3"
                description="Order Online for Quick Delivery!"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Quick Delivery!"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
               <Section
                title="Low Cost Solar Panels in America"
                description="Money back guarantee!"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Solar for New Roof"
                description="The best energy source for homes!"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section
                title="Accessories"
                description="The best accessories for ood looks!"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
            {/*
            <Section/>
            <Section/>
            <Section/>
            */}
           
        </Container>
    )
}


export default Home


const Container = styled.div`
    height: 100vh;
`