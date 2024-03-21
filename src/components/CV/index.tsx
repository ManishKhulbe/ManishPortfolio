/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles";
import { FiDownload } from "react-icons/fi";

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: "3rem" }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my resume by clicking the download button.
            </p>
            <div className="profile">
              <img src="/manish.jpeg" alt="Imagem of perfil" />
              <div className="name">
                <h3>Manish Khulbe</h3>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <img
              src="/cv.png"
              alt="Home showing a download button of curriculum"
            />
            <a href="/pdf/manish-one-page-resume.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
