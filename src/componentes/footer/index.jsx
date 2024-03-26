import estilos from '@/componentes/footer/footer.module.css';

export default function footer(){
    return(
        <footer className={estilos.container_global}>
           <div className={estilos.container_texto_topo_pagina}>
            <h4 className={estilos.titulo}>Fale conosco</h4>
            <p className={estilos.paragrafo}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
           </div>
           <div className={estilos.container_redes_sociais}>
            <nav className={estilos.container_links_contatos}>
           <a href="https://www.google.com/maps/place/Assa%C3%AD+Atacadista/@-22.7619353,-43.4451715,17z/data=!3m1!4b1!4m6!3m5!1s0x9967aaedf24dc9:0x11a0b6ad1772e112!8m2!3d-22.7619353!4d-43.4451715!16s%2Fg%2F11h7l0hv3z?hl=pt-BR&entry=ttu" className={estilos.link_contatos_localizacao} target='blank'>Nova Iguaçu,RJ</a>
           <a href="tel:+55219999-9999"  target='blank' className={estilos.link_contatos_telefone}>(21) 9999-9999</a>
           <a href="mailto:contato@oticavida.com"  target='blank' className={estilos.link_contatos_email}>contato@oticavida.com</a>
            </nav>
            <nav className={estilos.container_links_redes_sociais}>
            <a className={estilos.link_redes_sociais_facebook} href="/"  target='blank'>/OticaVida</a>
            <a className={estilos.link_redes_sociais_instagram} href="/"  target='blank'>@oticavidarj</a>
            <a className={estilos.link_redes_sociais_twitter} href="/"  target='blank'>@oticavidarj</a>
            </nav>
           </div>
           <span>© 2022 Óticas Vida. - Todos os direitos reservados.</span>
        </footer>
    )
}