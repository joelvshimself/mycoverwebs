import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Espacio para que no se solape con el Navbar */}
      <div className="mt-20 max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-white">Términos y Condiciones</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">1. Introducción</h2>
          <p className="text-gray-400">
            Bienvenido a nuestro sitio web. Al acceder y utilizar nuestros servicios, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestro sitio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">2. Uso del Sitio</h2>
          <p className="text-gray-400">
            El contenido de este sitio es solo para información general y está sujeto a cambios sin previo aviso. No garantizamos la exactitud o actualidad de la información proporcionada.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">3. Propiedad Intelectual</h2>
          <p className="text-gray-400">
            Todos los materiales del sitio (textos, imágenes y logotipos) son propiedad del sitio web o sus licenciantes y están protegidos por derechos de autor.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">4. Limitación de Responsabilidad</h2>
          <p className="text-gray-400">
            No seremos responsables por daños directos o indirectos que surjan del uso del sitio web. No garantizamos que esté libre de errores o interrupciones en el servicio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">5. Enlaces a Terceros</h2>
          <p className="text-gray-400">
            Nuestro sitio puede contener enlaces a sitios de terceros. No nos hacemos responsables del contenido ni de sus políticas de privacidad.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-300">6. Modificaciones</h2>
          <p className="text-gray-400">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Se recomienda revisar esta página periódicamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-300">7. Contacto</h2>
          <p className="text-gray-400">
            Si tienes preguntas sobre estos términos, contáctanos a través de nuestro correo electrónico o formulario de contacto.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
