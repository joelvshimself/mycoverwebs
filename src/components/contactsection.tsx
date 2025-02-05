"use client";
import { useState } from "react";
import styled from "styled-components";
import Sheet from "./sheet"; // Importamos el componente de modal

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el modal */}
      <StyledWrapper>
        <button onClick={() => setIsOpen(true)}>Contáctanos</button>
      </StyledWrapper>

      {/* Sheet Modal */}
      {isOpen && <Sheet onClose={() => setIsOpen(false)} />}
    </>
  );
};

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
