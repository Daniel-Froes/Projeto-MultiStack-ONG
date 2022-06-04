import type { NextPage } from 'next'
import Titulo from '../ui/components/titulo/titulo'
import Lista from '../ui/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={<span>
        Com um pequeno valor mensal, você<br/> <strong>pode adotar um pet virtualmente</strong>
      </span>}/>

      <Lista pets={[
        {
          id:1,
          nome:'Bigode',
          historia:'Morador de Rua',
          foto:'/images/Bigode.jpg'
        },
        {
          id:1,
          nome:'Max',
          historia:'Putinha',
          foto:'/images/Max.jpg'
        }
      ]}/>
    </div>
  )
}

export default Home
