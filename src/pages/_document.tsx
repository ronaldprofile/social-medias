import Document, { Head, Html, Main, NextScript } from "next/document";

class MyComponent extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <meta
          name="description"
          content="Olá, Sou o Ronald Tomaz. Veja minhas outras redes e bora se conectar!"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyComponent;
