import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Links } from "../components/Links";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title } from "../styles/styles";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Manish Khulbe </title>
        <meta
          name="description"
          content="My name is Manish Khulbe, I'm a full stack mern stack developer
          from India."
        />
        <meta property="og:title" content="About | Manish Khulbe" />
        <meta
          property="og:description"
          content="My name is Manish Khulbe, I'm a full stack mern stack developer
          from India."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/manish.jpeg"
                alt="Manish Khulbe profile picture"
              />

              <div className="links">
                <ul>
                  <Link href={"https://github.com/ManishKhulbe"}>
                    <a target="_blank" aria-label="Link to Github">
                      <AiFillGithub size={25} /> @ManishKhulbe
                    </a>
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/manish-khulbe-83b46b20b/"
                    }
                  >
                    <a target="_blank" aria-label="Link to Linkedin">
                      <BsLinkedin size={25} /> @manish-khulbe
                    </a>
                  </Link>
                  <Link href={"https://api.whatsapp.com/send?phone=8979820182"}>
                    <a target="_blank" aria-label="Link to WhatsApp">
                      <RiWhatsappFill size={25} /> +91 89798-20182
                    </a>
                  </Link>
                  <Link href={"https://www.discordapp.com/users/manishmk"}>
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link to Discord"
                    >
                      <FaDiscord size={25} /> @manishmk
                    </a>
                  </Link>
                  <Link href={"mailto:manishkhulbe123@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link to email"
                    >
                      <GrMail size={25} /> @manishkhulbe123@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  {"Let's talk, maybe create an incredible project together?"}
                </h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                {
                  "Hey there! I'm Manish Khulbe, a passionate full-stack MERN stack developer with a knack for building robust web applications. With a background in both front-end and back-end development, I thrive on creating seamless user experiences and scalable solutions."
                }
              </p>
              <p>
                {
                  "I kickstarted my journey into the world of computer science with a Bachelor's degree from DSB Campus, Nainital, where I pursued a BSc in Computer Science. This foundational education provided me with a solid understanding of core principles and ignited my passion for coding. Eager to delve deeper into the realm of software development, I furthered my studies by obtaining a Master's degree in Computer Applications (MCA) from Galgotias University. Here, I had the opportunity to broaden my knowledge, refine my skills, and embark on practical projects that enriched my understanding of the field"
                }
              </p>
              <p>
                My journey into the world of software development began with a
                fascination for technology and a drive to create. As I delved
                deeper into the realm of coding, I discovered my passion for
                crafting elegant solutions to complex problems. From building
                simple web pages to architecting intricate applications, every
                line of code I write is infused with creativity and dedication.
              </p>

              <p>
                {
                  "With years of hands-on experience, I've honed my skills across the MERN stack - MongoDB, Express.js, React.js, and Node.js.Whether it's crafting intuitive user interfaces with React or designing efficient backend systems with Node.js and Express, I'm adept at every stage of the development process."
                }
              </p>
              <p>
                In addition to my proficiency in full-stack development, I also
                have a strong background in DevOps practices. From continuous
                integration and deployment to infrastructure as code, I
                understand the importance of streamlining the development
                pipeline for maximum efficiency and reliability.
              </p>
              <p>
                {
                  "What drives me in this ever-evolving field is the opportunity to constantly learn and innovate. Technology never stands still, and neither do I. Whether it's mastering a new framework or staying updated with the latest industry trends, I'm always eager to expand my knowledge and push the boundaries of what's possible."
                }
              </p>
              <p>
                I thrive in collaborative environments where ideas flow freely
                and teamwork is paramount. Working alongside talented
                individuals who share my passion for technology is where I truly
                thrive, as together, we can turn vision into reality.
              </p>
              <p>
                {
                  "If you're looking for a dedicated full-stack developer with a passion for innovation and a track record of delivering high-quality solutions, I'd love to connect. Feel free to reachout, and let's discuss how we can bring your ideas to life!"
                }
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
