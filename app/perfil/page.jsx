"use client";

import Image from "next/image";

export default function Perfil() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #B38FE8 !important; /* Lilás exato da imagem */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        main {
          background-color: #B38FE8;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }

        #perfil-container {
          position: relative;
          width: 480px;
          height: 950px;
          overflow: hidden;
        }
      `}</style>

      <main>
        <div id="perfil-container">
          <Image
            src="/perfil.jpeg"
            alt="Meu Perfil"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
