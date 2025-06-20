import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSection>
      <div className="logo_searchBox">
        <img src="/Images/Logo.svg" alt="Logo Image" />
        <input type="text" placeholder="Search Food..." />
      </div>
      <Categories>
        <ul>
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </Categories>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
  background: #323335;
  height: 241px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .logo_searchBox {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
  }
  img {
    /* width: 185px; */
    height: 39px;
  }
  input {
    width: 285px;
    height: 40px;
    font-family: Inter;
    border-radius: 5px;
    border: 1px solid red;
    color: white;
    font-weight: 400;
    background: transparent;
  }
  input::placeholder{
    color: white;
    opacity: 1;
  }
  @media (max-width: 870px) {
    /* flex-direction: column; */
    .logo_searchBox {
      flex-direction: column;
    }
    input {
      margin-top: 20px;
      width: 200px;
      height: 50px;
      padding: 15px;
    }
  }
  @media (max-width: 360px) {
    width: 400px;
  }
`;

const Categories = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  li {
    font-weight: 400;
    font-size: 16px;
    background: #ff4343;
    color: white;
    height: auto;
    width: auto;
    border-radius: 5px;
    padding: 6px 12px;
  }
  @media (max-width: 870px) {
    ul {
      margin: 0;
      margin-right: 30px;
    }
  }
  @media (max-width: 360px) {
    width: 400px;
  }
`;
