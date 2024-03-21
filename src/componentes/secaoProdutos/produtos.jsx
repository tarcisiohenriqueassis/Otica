import estilos from '@/componentes/secaoProdutos/produtos.module.css';
import Image from 'next/image';
import Oculos1 from '@/../../public/oculos01.png';
import Oculos2 from '@/../../public/oculos02.png'
import Oculos3 from '@/../../public/oculos03.png'
import Oculos4 from '@/../../public/oculos04.png'



export  default function Produtos(){
    return(
<section className={estilos.container_geral}>

<article  className={estilos.container_texto}>
<h2  className={estilos.subtitulo}>Nossos produtos</h2>
<p className={estilos.paragrafo} >Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
</article>

<article className={estilos.container_cards}>

<div className={estilos.card}>
<h3 className={estilos.titulo_card}>Óculos de grau</h3>
 <Image className={estilos.img_oculos} src={Oculos1} alt='Oculos'/>
 <p className={estilos.paragrafo}>R$ 500,00</p>
</div>
<div className={estilos.card}>
<h3 className={estilos.titulo_card}>Óculos de grau</h3>
 <Image className={estilos.img_oculos} src={Oculos2} alt='Oculos'/>
 <p className={estilos.paragrafo}>R$ 500,00</p>
</div>

<div className={estilos.card}>
<h3 className={estilos.titulo_card}>Óculos de grau</h3>
  <Image className={estilos.img_oculos} src={Oculos3} alt='Oculos'/>
 <p className={estilos.paragrafo}>R$ 500,00</p>
</div>

<div className={estilos.card}>
<h3 className={estilos.titulo_card}>Óculos de grau</h3>
 <Image className={estilos.img_oculos} src={Oculos4} alt='Oculos'/>
 <p className={estilos.paragrafo}>R$ 500,00</p>
</div>

</article>
</section>
    )
}