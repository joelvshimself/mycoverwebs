"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const ModalOverlay = styled.div `
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
const ModalContent = styled.div `
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  text-align: center;
`;
const Sheet = ({ onClose }) => {
    return (_jsx(ModalOverlay, { onClick: onClose, children: _jsxs(ModalContent, { onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { className: "text-xl font-bold", children: "Let's Get in Touch" }), _jsx("p", { className: "text-gray-600", children: "D\u00E9janos tu mensaje y nos pondremos en contacto." }), _jsxs("div", { className: "mt-4", children: [_jsx("input", { type: "text", placeholder: "Tu Nombre", className: "w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none" }), _jsx("input", { type: "email", placeholder: "Tu Email", className: "w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none mt-2" }), _jsx("textarea", { placeholder: "Tu Mensaje", className: "w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none mt-2", rows: 4 }), _jsx("button", { className: "w-full bg-blue-600 text-white p-2 rounded mt-2", children: "Enviar Mensaje" })] }), _jsx("button", { onClick: onClose, className: "mt-4 text-red-500", children: "Cerrar" })] }) }));
};
export default Sheet;
