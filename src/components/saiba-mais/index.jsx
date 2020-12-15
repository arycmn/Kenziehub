import React from "react";
import Popup from "reactjs-popup";
import { Modal, Image } from "./style";

const SaibaMais = ({ user }) => {
  console.log(user);
  return (
    <Popup
      trigger={<button className="button"> Saiba Mais </button>}
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
            <Image src={user.avatar_url} alt={`Avatar de ${user.name}`} />
            <p>Email : {user.email}</p>
            <p>Nível : {user.course_module}</p>

            <p>
              Techs :
              {/* {user.techs ? (
                <ul>
                  {user.techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              ) : (
                <p>Não possui Techs</p>
              )} */}
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
