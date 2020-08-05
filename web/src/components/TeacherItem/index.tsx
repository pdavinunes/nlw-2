import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


const TeacherItem = () => {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/33943794?s=400&u=a9697d793f41d80fd9cbfe0a86c6fe8ca069268d&v=4" alt="Item"/>
                        <div>
                            <strong>Davi Nunes</strong>
                            <span>Filosófia</span>
                        </div>
                    </header>
                    <p>
                        Opa neném! Vem nim mim Opa neném!<br /><br/> Vem nim mim Opa neném! Vem nim mim Opa neném! Vem nim mim Opa neném! Vem nim mim Opa neném! Vem nim mim Opa neném! Vem nim mim
                    </p>
                    <footer>
                        <p>Preço/hora
                        <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="ZipZop"/>
                            Entrar em contanto
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;