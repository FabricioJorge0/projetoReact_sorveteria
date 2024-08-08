import style from '@/app/sobre/Sobre.module.css'
import Image from "next/image"
import imgSobre from '../../../public/sobre-image.jpg'
import imgSorveteria from '../../../public/sorveteria.jpg'

export default function Sobre(){
    return(
        <main>
            <div className={style.banner}>
                <h1>A GELATERIA</h1>
            </div>

            <article className={style.principal}>
                <section className={style.sobre}>
                    <h3>Sobre Nós</h3>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </section>

                <section className={style.sectionImgSobre}>
                    <Image className={style.img} src={imgSobre} alt='Imagemn sobre a sorveteria'/>
                    <Image className={style.img} src={imgSorveteria} alt='Imagem da sorveteria'/>
                </section>
            </article>
        </main>
    )
}