/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from "next/link";
import { Form } from "./Form";
import { Description, Section, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { Envelope, TelegramLogo } from "phosphor-react";

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        I am always open to new opportunities for work or collaboration. Some
        amazing new projects. Just fill out the form 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{" "}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=8979820182">
              <a target="_blank">
                <span>+91 89798-20182</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <TelegramLogo size={22} color="#00fffb" /> Email{" "}
            </h4>
            <Link href="mailto:manishkhulbe123@gmail.com">
              <a target="_blank">
                <span>manishkhulbe123@gmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  );
}
