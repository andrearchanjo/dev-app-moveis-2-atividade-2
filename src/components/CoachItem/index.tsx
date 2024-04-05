import React from "react";

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function CoachItem() {
    return (
        <article className="coach-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/20603528?v=4" alt="André" />
                <div>
                    <strong>André Archanjo Nunes Coelho</strong>
                    <span>Aluno da Pós</span>
                </div>
            </header>

            <p>
                Estudante de novas tecnologias de programação mobile.
            </p>

            <footer>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default CoachItem;