import estilos from '@/componentes/topo/topo.module.css';
import Logo from '../../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';


export default function Topo(){
    return(
        <header className={estilos.container}>
            <Image className={estilos.img_logo} src={Logo} alt='Logo Otica'/>
            <nav className={estilos.nav}>
                <Link className={estilos.link} href="#">Produtos</Link>
                <Link className={estilos.link}  href="#">Sobre</Link>
                <Link className={estilos.link}  href="#">Contatos</Link>
            </nav>
        </header>
    )
}