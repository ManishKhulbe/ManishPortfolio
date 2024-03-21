import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const meta = {
  title: "Manish Khulbe - Full Stack Developer",
  description:
    "Full stack developer from India. Specialized in creating interfaces and functionalities for web applications using React.js , Next.js. and creating scalable and robust APIs using Node.js and MongoDB.",
  image: "https://avatars.githubusercontent.com/u/88510930?v=4",
};

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Manish Khulbe" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="Manish, Manish Khulbe, Developer, website, programmer, front-end, back-end ,full stack developer ,personal website, developer, portfolio, sites, web, sp, JavaScript, TypeScript, ReactJS, NextJS, NodeJS,MongoDB,AWS,aws,software, application, Freelancer, portfolio developer, e- commerce, Manish portfolio"
          />

          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="Manish Khulbe 2024" />
          <meta http-equiv="content-language" content="pt-br" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="pragma" content="no-cache" />
          <meta name="language" content="pt-BR" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="mywebsiteurl" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta property="og:url" content="mywebsiteurl" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Manish Khulbe" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
