import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects | Manish Khulbe </title>
        <meta
          name="description"
          content="Love coding using tools like React, NextJS, Tailwind, Styled Components, Nodejs , MongoDB and much more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Manish Khulbe" />
        <meta
          property="og:description"
          content="Love coding using tools like React, NextJS, Tailwind, Styled Components, Nodejs , MongoDB and much more! Here are some of my favorite projects."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Projects
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work that I developed. Navigate to
          Willingness and explore the projects to see how they were created, as
          Technologies used and functionalities implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search for project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Researcher..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <Image
                          width={35}
                          height={10}
                          src={"/right.png"}
                          alt={project.title}
                        />
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>

                        <div className="tags">
                          {project.tags.map((tag) => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>
                      {project.isLive ? (
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <T.ButtonAlternatives>
                            View Live
                            <ArrowRight
                              style={{
                                marginBottom: "-0.1rem",
                              }}
                              weight="bold"
                              size={16}
                            />
                          </T.ButtonAlternatives>
                        </a>
                      ) : (
                        <Link href={`/project/${project.url}`}>
                          <a>
                            <T.ButtonAlternatives>
                              View project
                              <ArrowRight
                                style={{
                                  marginBottom: "-0.1rem",
                                }}
                                weight="bold"
                                size={16}
                              />
                            </T.ButtonAlternatives>
                          </a>
                        </Link>
                      )}
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}

            <p className="github">
              Hey, hey, hey... check out my github for more{" "}
              <a
                href="https://github.com/ManishKhulbe"
                target="_blank"
                rel="noreferrer"
              >
                my github{" "}
              </a>
              !
            </p>
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <Footer />
    </>
  );
}
