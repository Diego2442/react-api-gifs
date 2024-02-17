//import { getGifs } from "../actions/getGifs";
// {useState, useEffect} from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //este se realiza con un hook personalizado
    const {images, isLoading} = useFetchGifs(category);
    
    

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
            <div className="card-grid">
            {
            //También se puede tomar los datos de forma desestructurada
            //images.map(({id title}) => (
                //<li key={id}>{title}</li>
            //));
            images.map((imagen) => (

                //<li key={imagen.id}>{imagen.title}</li>
                <GifItem key={imagen.id} imagen={imagen}
                //para enviar datos de un objeto y que se tomen como valores separados en el contenedor hijo se puede utilizar
                {...imagen}//esto envia las propiedades de ese objeto por separado asignandolo al componente
                />
            ))
            }
            </div>
      

    </>
  )
}
