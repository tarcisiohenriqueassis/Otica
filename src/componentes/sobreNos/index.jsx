import estilos from '@/componentes/sobreNos/sobre_nos.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Atendimento from '@/../public/atendimento.png';
import Loja from '@/../public/loja.png';

export default function SobreNos(){
    return(
        <section className={estilos.container_global}>
            <div className={estilos.container_texto_quem_somos}>
                <h2 className={estilos.subtitulo_quem_somos}>Quem somos nós?</h2>
                <p className={estilos.paragrafo_quem_somos}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>
            <div className={estilos.container_limitar_tamanho_container_imagens}>
                <article className={estilos.container_imagens}>
                    <Image className={estilos.imagens} src={Loja} alt='Loja'/>
                </article>
                
                 <article className={estilos.container_textos}>
                    <h2 className={estilos.subtitulo}>Nossas Filiais</h2>
                    <p className={estilos.paragrafo}>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </article>
                <article className={estilos.container_textos}>
                    <h2 className={estilos.subtitulo}>Atendimento flexivel</h2>
                    <p className={estilos.paragrafo}>Nossa equipe possui é treinada para te atender</p>
                </article>
                <article className={estilos.container_imagens}>
                    <Image className={estilos.imagens} src={Atendimento} alt='Atendimento'/>
                </article>
            </div>
        </section>
    )
        
    
}