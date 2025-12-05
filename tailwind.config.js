/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: "#FFD53A", // amarelo do fundo
        cartao: "#FFF1B8", // bege claro do cartão
        azulEscuro: "#1E1464", // azul do texto e título
        azulBotao: "#2F9BFF", // azul do botão "Meu Perfil"
        rosaBotao: "#FF80B5", // rosa do botão "Comum"
        sombraAmarela: "#F8B62D", // sombra dos textos e botões
      },
      fontFamily: {
        baloo: ["'Baloo 2'", "cursive", "system-ui"],
      },
      boxShadow: {
        card: "18px 18px 0 0 #E0A52B",
        botao: "0 10px 0 #F8B62D",
      },
      borderRadius: {
        grande: "40px",
      },
    },
  },
  plugins: [],
};
