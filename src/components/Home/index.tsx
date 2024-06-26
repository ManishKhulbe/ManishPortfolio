/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { ButtonPrimary, Container } from "../../styles/styles";
import { Content, ImgHome, HomeText, DisplayNoneOnMobile } from "./styles";
import { FiArrowRight } from "react-icons/fi";
import ParticlesComponent from "../Particles";

export function HomeHero() {
  return (
    <Container>
      <DisplayNoneOnMobile>
        <ParticlesComponent id="particles" />
      </DisplayNoneOnMobile>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello. My name is
          </p>
          <h1>
            Manish Khulbe
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="Image of a triangle with rotating animation"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "DevOps Enthusiast ",
                  "BackEnd Developer",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h2>

          <div className="button">
            <Link href={"#projects"}>
              <ButtonPrimary>
                <a>
                  <b>Discover my portfolio</b>
                  <FiArrowRight style={{ marginBottom: "-0.3rem" }} size={20} />
                </a>
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Home image" />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinosaur image with code on the screen"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  );
}
