import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <main
      style={{
        backgroundColor: "#B18BE8", // fundo roxo suave (igual ao da arte)
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Tela do perfil"
          layout="fill"
          objectFit="contain"
          priority
          style={{
            borderRadius: "0px",
            display: "block",
          }}
        />

        {/* Exemplo: botão "Voltar ao Início" (clicável) */}
        <Link href="/">
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "50px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </main>
  );
}
