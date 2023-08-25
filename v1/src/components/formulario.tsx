import React from "react";


export default function FormularioProduct() {
    return (

<div className="formulario">


    <h2>Sugestões</h2>
    <p>
        Caso tenha encontrado algum erro, ou tenha alguma sujestão por favor nós deixe uma mensagem. 😉  
    </p>
    <div className="split style1">
        <section>
            <form method="post" action="#">
                <div className="fields">
                    <div className="field half">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows={5}></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><a href="" className="button submit">Enviar mensagem</a></li>
                </ul>
            </form>
        </section>
        <section>
            <ul className="contact">
                <li>
                    <h3>endereço</h3>
                    <span>12345 Rua das Maginolis Avenida Ulisses Bueno<br />
                    São Paulo, TN 00000-0000<br />
                    BR</span>
                </li>
                <li>
                    <h3>Email</h3>
                    <a href="#">niltondg.30@gmail.com</a>
                </li>
                <li>
                    <h3>Phone</h3>
                    <span>(55) 1193231-3383</span>
                </li>
                <li>
                    <h3>Social</h3>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</div>
    )
}