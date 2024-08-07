import Logo from '../../../public/logo.png'
import Image from 'next/image'
import style from '@/components/Footer/Footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.boxFooter}>

                <Image className={style.imgFooter} src={Logo} alt='imagem logo'/>


                <div className={style.boxFooterInfo}>
                    <div className={style.boxInfo}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernadinho de campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div className={style.boxInfo}>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>Tel (11) 3456-7890</p>
                    </div>
                    <div className={style.boxInfo}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>

                
            </div>
  
            <span className={style.span}>Gelatera Orgulhosamente desenvolvido por Fabricio Jorge</span>

        </footer>
    )
}