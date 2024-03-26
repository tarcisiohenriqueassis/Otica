import estilos from '@/componentes/secaoCapa/banner.module.css';
import banner from '../../../public/capa.png';
import Image from 'next/image';

export default function Banner(){
    return(
        <section className={estilos.container_global}>
        <Image className={estilos.banner} src={banner} alt='Banner'/>
        <div className={estilos.containerTitulo}>
            <div className={estilos.div}>
                <p className={estilos.paragrafo}>Preços baixos em</p>
                <h1 className={estilos.titulo}> Óculos de<br/>grau e de sol</h1>
                <p className={estilos.paragrafo}>Você só encontra aqui</p>
            </div>
        </div>
        </section>
    )
}