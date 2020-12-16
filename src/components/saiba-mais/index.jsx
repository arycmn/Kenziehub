import React from "react";
import Popup from "reactjs-popup";
import { Modal, Image, Button } from "./style";

const SaibaMais = ({ user, imageDefault }) => {
  console.log(user);
  return (
    <Popup
      trigger={
        <Button className="button">
          Mais informações
          <img
            alt="more"
            src="https://img.icons8.com/clouds/50/000000/about.png"
          />
        </Button>
      }
      modal
      nested
    >
      {(close) => (
        <Modal>
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {user.name} </div>

          <div className="content">
            {user.avatar_url ? (
              <Image src={user.avatar_url} alt={`Avatar de ${user.name}`} />
            ) : (
              <Image src={imageDefault} alt={`Avatar de ${user.name}`} />
            )}
            <p>Email : {user.email}</p>
            <p>Nível : {user.course_module}</p>

            <p>
              Techs :
              {user.techs ? (
                <ul>
                  {user.techs.map((tech, index) => (
                    <li key={index}>
                      {tech.title} {tech.status}
                    </li>
                  ))}
                </ul>
              ) : (
                <span>Não possui Techs</span>
              )}
            </p>

            <p>
              Trabalhos :
              {user.works ? (
                <ul>
                  {user.works.map((work, index) => (
                    <li key={index}>
                      <span>{work.title}</span>
                      <br />
                      <span>{work.description}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>Não possui Techs</span>
              )}
            </p>

            <p>
              Contato : <a href={user.contact}>LinkedIn</a>
            </p>
            <p>Biografia : {user.bio}</p>
          </div>
        </Modal>
      )}
    </Popup>
  );
};

export default SaibaMais;
