
import React, { Component } from 'react';
class Encabezado extends Component{
render(){
return(
<>
{this.mostrarTitulo('Encabezado Buenos dias Juan')}

</>


);

}
mostrarTitulo(tit){
return(<h1>{tit}</h1>)
}

}
export default Encabezado