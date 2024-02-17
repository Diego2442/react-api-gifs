import {useState} from 'react';
//import {AddCategory} from './components/AddCategory'
//import { AddCategory2 } from './components/AddCategory2';
//import { GifGrid } from './components/GifGrid';

//Hacer importanciones de los componentes con archivo barril o indices, que se puede colocar el nombre de index.js o index.jsx, no importa ya que la nomenclatura es propia de javascript, y si se coloca index, al momento de traerlo solo hace falta apuntar al folder, que automaticamente se detecta, junto con las importaciones.
import { AddCategory2, GifGrid } from './components';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kimetsu']);

    const onAddCategory = (nuevaCategoria) => {

        if (categories.includes(nuevaCategoria)) return;
        
        //setCategories( cat => [...cat, nuevaCategoria]); //una forma
        setCategories([nuevaCategoria, ...categories]);//segunda forma
        console.log(nuevaCategoria)

    }

  return (
    <>
    {/*  titulo */}
    <h1>GifExpertApp</h1>

    {/* input */}
    {/* <AddCategory setCategories={setCategories}/> */}
    <AddCategory2  onNewCategory={(categoriaNueva) => onAddCategory(categoriaNueva)}/>

    {/* lista de gifs */}
    
        {/* forma de manejar con indice, pero no es recomendada en react */}
        {/* {categories.map( (elemento, indice) => {
            return <li key={indice}>{elemento}</li>
        })} */}

        {/* esta forma si es recomendada en react en  cuanto a que recibe un dato*/}
        {/* {categories.map( (category) => {
            return (
                <div key={category}>
                    <li>{category}</li>
                </div>
            )
        })} */}

        {/* Esta forma es la mas acertada en cuanto a la eliminación del return y devolver el contenido implicito */}
        {categories.map( (category) =>
             (
                <GifGrid category={category} key={category}/>
            )
        )}
       
    </>
  )
}

export default GifExpertApp;