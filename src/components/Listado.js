import Item from './Item';
import data from './data.json';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
export default function Listado(props) {
  return (

    <div className='container'>
      {
      data.map( prod => {
        return(
        <Item key ={prod.id}
        nombre={prod.producto.nombre}
        descripcion={prod.producto.descripcion}
        stocks={prod.stock}
        contar={props.contar}>
        </Item>
      )
      })
      
      }
      </div>
      )}
