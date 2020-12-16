import React from "react";
import { StyledPopup } from "./style";
import {
  Image,
  Button,
  ClosePlace,
  TitlePlace,
  ClosePopUp,
  LineImg,
  LineInfo,
  Column,
} from "./style";
import ViewDescription from "../../components/view-description";

const SaibaMais = ({ user, imageDefault }) => {
  console.log(user);
  return (
    <StyledPopup
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
        <div className="modal">
          <div className="header">
            <ClosePlace>
              <ClosePopUp className="close" onClick={close}>
                &times;
              </ClosePopUp>
            </ClosePlace>
            <TitlePlace>{user.name}</TitlePlace>
          </div>

          <div className="content">
            <LineImg>
              {user.avatar_url ? (
                <Image src={user.avatar_url} alt={`Avatar de ${user.name}`} />
              ) : (
                <Image src={imageDefault} alt={`Avatar de ${user.name}`} />
              )}
            </LineImg>
            <LineInfo>
              <div>
                <h3>Biografia:</h3>
                <div>{user.bio}</div>
              </div>
              <div>
                <h3>Email:</h3> <div> {user.email}</div>
              </div>
              <div>
                <h3>Contato:</h3>
                <div>
                  {user.contact.includes("http://") ||
                  user.contact.includes("https://") ? (
                    <a href={user.contact} target="_blank" rel="noreferrer">
                      {user.contact}
                    </a>
                  ) : (
                    <div>{user.contact}</div>
                  )}
                </div>
              </div>
              <div>
                <h3>Módulo:</h3> <div> {user.course_module}</div>
              </div>
            </LineInfo>
            <Column>
              <div>
                <h3> Techs:</h3>
                {user.techs.length > 0 ? (
                  <div>
                    {user.techs.map((tech, index) => (
                      <div key={index}>
                        {tech.title} {tech.status}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Não possui Techs</div>
                )}
              </div>
              <div>
                <h3>Trabalhos:</h3>
                {user.works.length > 0 ? (
                  <div>
                    {user.works.map((work, index) => (
                      <div key={index}>
                        <div>{work.title}</div>
                        <ViewDescription description={work.description} />
                        <div>
                          {user.contact.includes("http://") ||
                          user.contact.includes("https://") ? (
                            <a
                              href={user.deploy_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ver deploy
                            </a>
                          ) : (
                            <div>Ainda não possui deploy</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Ainda não adicionou nenhum trabalho</div>
                )}
              </div>
            </Column>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};

export default SaibaMais;
