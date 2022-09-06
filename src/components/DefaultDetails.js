import React from "react";
import styled from "styled-components";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const DefaultDetails = ({ image, text }) => {
  return (
    <Container>
      <Mainbox>
        <CardBox>
          <ImgContainer>
            <img src={image} alt="" />
          </ImgContainer>
          <TextContainer>
            <Text>{text}</Text>
            {/* <Icon></Icon> */}
          </TextContainer>
        </CardBox>
      </Mainbox>
    </Container>
  );
};

export default DefaultDetails;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Mainbox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 250px;

  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Text = styled.h2`
  font-size: 20px;
  color: #8e718e;
`;

// const Icon = styled(AddCircleOutlineOutlinedIcon)`
//   cursor: pointer;
//   color: #8e718e;
//   stroke: #8e718e;
// `;
