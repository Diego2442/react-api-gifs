import {useState, useEffect} from 'react';
import { getGifs } from '../actions/getGifs';


export const useFetchGifs = (category) => {

    const [isLoading, setLoading] = useState(true);

    //Esto codigo hacia abajo sin el hook personalizado de arriba igual funciona colocando directamente en GifGrid arriba del return dentro del componente
    const [images, setImages] = useState([]);

    
    //utilización del useEffect
    /* useEffect(() => {
      
        getGifs(category)
        .then( newImages => setImages(newImages));
        console.log(images);
    
    }, []) */

    //segunda forma de utilizar el useEffect, para llamar los gifs pero con una promesa por separado 
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        //console.log(newImages)
        setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])



  return {
    //images: images, //de forma clara,pero también se puede colocar solo el nombre y se asigna directamente el arreglo
    images,
    //también puedo colocar isLoading:isLoading o lo puedo enviar directamente y es lo mismo
    isLoading: isLoading
    //isLoading
  }
}
