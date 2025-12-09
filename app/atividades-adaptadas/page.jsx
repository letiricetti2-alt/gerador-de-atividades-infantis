"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC !important; /* Azul exato da imagem */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        main {
          background-color: #9DDEFC;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }

        /* Garante que nada de fora do contêiner apareça */
        #adaptadas-container {
          position: relative;
          width: 480px;
          height: 950px;
          overflow: hidden;
        }
      `}</style>

      <main>
        <div id="adaptadas-container">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
