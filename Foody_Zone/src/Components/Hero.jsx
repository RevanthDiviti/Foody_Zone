import React from "react";
import styled from "styled-components";
import { Items } from "./All_Products";

const Hero = () => {
  return (
    <HeroSection>
      {Items.map((val, i) => (
        <Card key={i}>
          <img src={val.image} alt={val.Item_Name} />
          <div>
            <h3>{val.Item_Name}</h3>
            <p>{val.description}</p>
            <span><p>{val.price}</p></span>
          </div>
        </Card>
      ))}
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  background-image: url("/Images/bg.png");
  height: 700px;
  width: auto;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 columns
  align-items: center;
  /* gap: 24px; */
  padding: 32px;
  box-sizing: border-box;
  @media(max-width:870px){
    display: flex;
    flex-direction: column;
   gap : 20px;
   height: 100%;
   width: 100%;
  }
  @media(max-width:1160px){
   grid-template-columns: repeat(2, 1fr); // 3 columns
  }
  @media (max-width: 360px) {
    width: 400px;
    height: 100%;
    margin-top: -10px;
  }
`;

const Card = styled.div`
  /* border: 1px solid black; */
  border-radius: 19.45px;
  /* border-image: linear-gradient(135deg, #98f9ff, #fff, #eabfff, #8726b7) 1; */
  width: calc((100% - 48px) / 3);
  min-width: 300px;
  width: 340px;
  height: 167px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3); // semi-transparent
  backdrop-filter: blur(8px); // blur effect
  color: white;
  box-sizing: border-box;

  img{
    width: 133px;
    height: 133px;
  }
  h3{
    font-size: 16px;
    font-weight: 600;
    font-family: Inter;
  }
  p{
    font-size: 12px;
    font-weight: 400;
    font-family: Inter;
  }
  span p{
    position: relative;
    right: 10px;
    top: 20px;
    float: right;
    background: #FF4343;
    width: 59px;
    height: 25px;
    font-size: 14px;
    border-radius: 5px;
    text-align: center;
    padding-top: 4px;
  }
`;
