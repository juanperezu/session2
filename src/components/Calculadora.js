
import React, { Component } from 'react';

class Calculadora extends Component{

constructor(props){
super(props)


} //  fin del constructor

render(){
return(
<div>
<form>
<p>ingrese un número
<input type="number" name="valor1"/>

</p>

<p>ingrese un número
<input type="number" name="valor2"/>
</p>
<p><button type="submit">Suma</button> </p>



</form>


</div>



)






}






}// fin de la clase
export default Calculadora