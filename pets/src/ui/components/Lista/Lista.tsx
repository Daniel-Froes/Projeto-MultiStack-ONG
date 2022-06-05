import { Button } from '@mui/material'
import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from './Lista.styled'

import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListaProps{
    pets: Pet[];
    onSelected: (pet: Pet) => void;
}

export default function Lista(props: ListaProps){
    const tamanhoMaximoTexto = 200;
    return (
        <div>
            <ListaStyled>
                {props.pets.map(pet => (
                <ItemLista key={pet.id}>
                    <Foto src={pet.foto} alt={pet.nome}/>
                    <Informacoes>
                        <Nome> {pet.nome} </Nome>
                        <Descricao>
                            {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
                        </Descricao>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelected(pet)}
                        >Adotar {pet.nome}</Button>
                    </Informacoes>
                </ItemLista>
                ))}
            </ListaStyled>
        </div>
    )
}