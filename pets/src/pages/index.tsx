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
          nome:'Bidu',
          historia:'sdasjkdashdjaskdasjdhjaks',
          foto:'https://love.doghero.com.br/wp-content/uploads/2019/09/Dachshund.jpg.jpg'
        },
        {
          id:1,
          nome:'Scooby',
          historia:'sdasjkdashdjaskdasjdhjaks',
          foto:'https://love.doghero.com.br/wp-content/uploads/2019/09/Husky.jpg.jpg'
        }
      ]}/>
    </div>
  )
}

export default Home
