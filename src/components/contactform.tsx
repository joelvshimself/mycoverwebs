"use client";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  text-align: center;
`;

const Sheet = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold">Let's Get in Touch</h2>
        <p className="text-gray-600">
          Déjanos tu mensaje y nos pondremos en contacto.
        </p>

        <div className="mt-4">
          <input type="text" placeholder="Tu Nombre" className="w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none" />
          <input type="email" placeholder="Tu Email" className="w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none mt-2" />
          <textarea placeholder="Tu Mensaje" className="w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none mt-2" rows={4} />
          <button className="w-full bg-blue-600 text-white p-2 rounded mt-2">Enviar Mensaje</button>
        </div>

        {/* Botón para cerrar */}
        <button onClick={onClose} className="mt-4 text-red-500">
          Cerrar
        </button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Sheet;
