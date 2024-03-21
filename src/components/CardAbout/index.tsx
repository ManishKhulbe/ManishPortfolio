import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Profile image"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Let me introduce</h2>
            <p>
              I am a full stack developer passionate about designing and code.
              My specialty is creating interfaces and functionalities for web
              applications using React.js and Next.js and making scalable and
              robust backend architectures using Node.js and MongoDB.
              <br />
              You can learn more about my profile and my work by browsing the
              website.
            </p>

            <strong>
              P.S. if you want to see source code of this site then please
              contact{" "}
              {false && (
                <Link href={"https://github.com/ManishKhulbe/Portfolio"}>
                  <a target="_blank">Github</a>
                </Link>
              )}
            </strong>
          </div>

          <div className="aboutButton">
            <Link href={"/contact"}>
              <a>
                <Button>
                  Contact
                  <TelegramLogo
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
                <ButtonAlternatives>
                  Read more
                  <ArrowRight
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
