"use client";
import { useState } from "react";
import styled from "styled-components";
import Sheet from "./sheet"; // Importamos el componente de modal

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledSection>
        <Container>
          <TextColumn>
            <h2>Contacta con Nosotros</h2>
            <p>Escríbenos y te responderemos lo antes posible.</p>
            <StyledWrapper>
              <button onClick={() => setIsOpen(true)}>Contáctanos</button>
            </StyledWrapper>
          </TextColumn>
          <ImageColumn>
            <StyledImage>
              <img
                src="/ss/contentview.png" // Cambia esto por la ruta correcta de tu imagen
                alt="Ilustración de contacto"
              />
            </StyledImage>
          </ImageColumn>
        </Container>
      </StyledSection>

      {/* Sheet Modal */}
      {isOpen && <Sheet onClose={() => setIsOpen(false)} />}
    </>
  );
};

const StyledSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;
  text-align: center; /* 🔥 Centra el texto en móviles */

  h2 {
    font-size: 32px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* 🔥 Oculta la imagen en móviles */
  }
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  img {
    width: 25vw;
    height: auto;
    max-width: 400px;
    margin: auto;
    display: block;
  }
    @media (max-width: 768px) {
    display: none; /* 🔥 Oculta la imagen en móviles */
  }
`;

const StyledWrapper = styled.div`
  text-align: center;

  button {
    padding: 17px 40px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;
    color: black;
  }

  button:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }

  button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;

export default Contact;
