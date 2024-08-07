import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Link from 'next/link'
import style from '@/components/Topo/Topo.module.css'

export default function Topo(){
    return(
        <header className={style.topo}>
            <div className={style.navegacao}>
                <Image className={style.imgTopo} src={Logo} alt='Imagem logo'/>

                <nav className={style.listNavegacao}>
                    <ul>
                        <li><Link href='\'>Home</Link></li>
                        <li><Link href='\sabores'>Sabores</Link></li>
                        <li><Link href='\Sobre'>Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}