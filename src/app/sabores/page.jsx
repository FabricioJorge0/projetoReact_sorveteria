import Image from 'next/image'
import Sabor from "../../../public/banner-sabores.jpg"

export default function Sabores(){
    return(
        <main>
            <Image src={Sabor}/>
            <div>
                <h1>PAGINA DE SABORES</h1>
           </div>
        </main>
    )
}