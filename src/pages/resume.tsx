import Head from "next/head";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  // const resumeData =
  //   "https://www.canva.com/design/DAF_8XCu3XQ/CaRChRCSpfStcdCz53oIvQ/edit?utm_content=DAF_8XCu3XQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
  // const previewData = `${resumeData.substr(
  //   0,
  //   resumeData.lastIndexOf("/") + 1
  // )}view?embed`;

  return (
    <>
      <Head>
        <title>Resume | Manish Khulbe </title>
        <meta
          name="description"
          content="Here you can see or download my resume."
        />
        <meta property="og:title" content="Resume | Manish Khulbe" />
        <meta
          property="og:description"
          content="Here you can see or download my resume."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Curriculum
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>Here you can see or download my resume.</Description>

        <PageSection>
          <iframe
            src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1jrTdWDsIPCNlwYcqLn7l22g8_3plFvcF&embedded=true"
            allowFullScreen
            width="740"
            height="780"
            title="Manish Khulbe"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}
