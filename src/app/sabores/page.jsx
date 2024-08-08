import styles from  "@/app/sabores/Sabores.module.css"
import Image from "next/image"
import Cookiess from "../../../public/sabor-cookies-avela.png"
import Oreo from "../../../public/gelato-cookie.webp"
import Pistache from "../../../public/sabor-pistache.png"
import Kiwi from "../../../public/sorbet-kiwi.png"
import Limao from "../../../public/sorbet-limao.png"
import Morango from "../../../public/sorbet-morango.png"


export default function Sabores(){
    return(
        <main>
            <div className={styles.banner}>
                <h1>NOSSOS SABORES</h1>
            </div>

            <article className={styles.article}>
                <h3>SABORES DE SORVETE</h3>

                <section className={styles.principal}>
                    <div className={styles.cardSabores}>

                        <Image className={styles.imgCard} src={Oreo}/>

                        <span> Sorvete de Oreo</span>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={styles.cardSabores}>

                        <Image className={styles.imgCard} src={Pistache}/>

                        <span> Sorvete de Pistache</span>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={styles.cardSabores}>

                        <Image className={styles.imgCard} src={Cookiess}/>

                        <span> Sorvete Cookies & Avelã</span>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={styles.cardSabores}>

                        <Image className={styles.imgCard} src={Kiwi}/>

                        <span> Sorvete de Kiwi</span>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={styles.cardSabores}>

                        <Image className={styles.imgCard} src={Morango}/>
 
                        <span> Sorvete de Morango</span>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={styles.cardSabores}>

                         <Image className={styles.imgCard} src={Limao}/>
  
                        <span> Sorvete de Limão Siliciano</span>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>


                </section>
            </article>
        </main>
    )
}