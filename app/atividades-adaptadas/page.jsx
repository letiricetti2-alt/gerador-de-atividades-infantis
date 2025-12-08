"use client";

export default function AtividadesAdaptadasPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#A9E6FF", // azul mais clarinho
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src="/adaptada.jpeg"
        alt="Tela de Atividades Adaptadas"
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}
