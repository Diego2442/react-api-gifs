
import {useState} from 'react'

export const AddCategory2 = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    /* Se puede utilizar esta función o la de abajo la diferencia es que la de abajo desestructura el evento para traer directamente el target*/
    /* const onInputChange = (evento) =>{
        console.log(evento.target.value)
        setInputValue(evento.target.value)
    } */
    const onInputChange = ({target}) =>{
        //console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmitEvento = (evento) =>{
        evento.preventDefault();
        //console.log(inputValue);
        
        //valida que al menos haya dos valores en el input
        if (inputValue.trim().length <=1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ evento => onSubmitEvento(evento)}>
        <input type="text" name="" id="categoria" placeholder='Buscar Gifs...' 
        value={inputValue}
        //la función onchange se puede utilizar asi o también colocandola directamente ya que por defecto se esta enviando el evento.
        //onChange={(evento) => onInputChange(evento)}
        onChange={onInputChange}
        />
    </form>
  )
}
