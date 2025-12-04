@tailwind base;
@tailwind components;
@tailwind utilities;

/* -------- FONTES E BASE GERAL -------- */
:root {
  --font-fredoka: 'Fredoka', sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--font-fredoka);
  background-color: #FFD83A;
  color: #1E1464;
}

/* -------- SCROLL SUAVE E VISUAL LIMPO -------- */
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* -------- TEXTOS -------- */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: #1E1464;
}

/* -------- BOTÕES PADRÃO -------- */
button {
  font-family: var(--font-fredoka);
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(2px);
}

/* -------- SOMBRAS PADRÃO DO APP -------- */
.shadow-yellow {
  box-shadow: 4px 4px 0px #E6BE32;
}

.text-shadow-yellow {
  text-shadow: 3px 3px 0px #FFD83A;
}

/* -------- LINKS (CASO USE NO FUTURO) -------- */
a {
  color: inherit;
  text-decoration: none;
}

/* -------- AJUSTES MOBILE -------- */
@media (max-width: 480px) {
  h1 {
    font-size: 28px;
    line-height: 32px;
  }

  button {
    font-size: 14px;
    padding: 10px;
  }
}
