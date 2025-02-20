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
          <Column>
            <h2>Contacta con Nosotros</h2>
            <p>
              ¿Tienes preguntas o necesitas ayuda? Nuestro equipo está listo para
              asistirte. Escríbenos y te responderemos lo antes posible.
            </p>
            <StyledWrapper>
              <button onClick={() => setIsOpen(true)}>Contáctanos</button>
            </StyledWrapper>
          </Column>
          <Column>
            <StyledImage>
              <img
                src="/ss/contentview.png" // Cambia esto por la ruta correcta de tu imagen
                alt="Ilustración de contacto"
              />
            </StyledImage>
          </Column>
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
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    color:rgb(255, 255, 255);
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const StyledImage = styled.div`
  text-align: center;

  img {
    width: 25vw;
    height: auto;
  }
`;

const StyledWrapper = styled.div`
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
