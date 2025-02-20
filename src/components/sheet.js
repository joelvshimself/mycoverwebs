"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalContent = styled.div `
  background: #0f0f0f;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;
const Sheet = ({ onClose }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: userMessage,
            subject: `Contacto de ${userName}`,
        };
        try {
            const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
            const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
            console.log("Correo enviado!", response.status, response.text);
            onClose();
        }
        catch (err) {
            const errorObj = err;
            // Imprimimos el error completo en la consola
            console.error("Error al enviar el correo:", errorObj);
            console.error("Detalles del error:", JSON.stringify(errorObj, null, 2));
            // Mostramos un mensaje genérico en la UI
            setError(errorObj?.text ||
                errorObj?.message ||
                "Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx(ModalOverlay, { onClick: onClose, children: _jsxs(ModalContent, { onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { className: "text-2xl font-bold", children: "Contacto" }), _jsx("p", { className: "text-base text-gray-300 mt-1", children: "\u00BFTienes alguna pregunta? No dudes en contactarnos." }), _jsxs("form", { onSubmit: handleSubmit, className: "mt-6 space-y-3", children: [_jsx("input", { type: "text", placeholder: "Tu Nombre", value: userName, onChange: (e) => setUserName(e.target.value), required: true, className: "w-full p-3 bg-gray-800 text-white rounded border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7D5FFF] transition-colors duration-200 text-base" }), _jsx("input", { type: "email", placeholder: "Tu Email", value: userEmail, onChange: (e) => setUserEmail(e.target.value), required: true, className: "w-full p-3 bg-gray-800 text-white rounded border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7D5FFF] transition-colors duration-200 text-base" }), _jsx("textarea", { placeholder: "Tu Mensaje", rows: 4, value: userMessage, onChange: (e) => setUserMessage(e.target.value), required: true, className: "w-full p-3 bg-gray-800 text-white rounded border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7D5FFF] transition-colors duration-200 text-base" }), _jsx("button", { type: "submit", disabled: loading, className: "w-full bg-[#7D5FFF] hover:bg-[#6C4DEE] text-white font-semibold p-3 rounded transition-colors duration-200", children: loading ? "Enviando..." : "Enviar" }), error && _jsx("p", { className: "text-red-400 text-sm mt-2", children: error })] }), _jsx("button", { onClick: onClose, className: "mt-6 text-sm text-red-400 hover:text-red-300 transition-colors duration-200", children: "Cerrar" })] }) }));
};
export default Sheet;
