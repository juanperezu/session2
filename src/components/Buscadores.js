
import React, { Component } from 'react';

class Buscadores extends Component{
render(){
    const arreglo=[
   'http://www.facebook.com',
   'http://www.google.com',
   'http://www.yahoo.com',
   'http://www.juanperezu.com'
    ];
    const nombres=[
        'Facebook.com',
        'Google',
        'Yahoo',
        'juanperezu'
    ];

return(
<div>
<h1>Arreglo de mis sitios siendo las {new Date().toLocaleDateString()} 
</h1>
<ul>
<li><a href={arreglo[0]}> {nombres[0]}    </a></li>
<li><a href={arreglo[1]}> {nombres[1]}    </a></li>
<li><a href={arreglo[2]}> {nombres[2]}    </a></li>
<li><a href={arreglo[3]}> {nombres[3]}    </a></li>

</ul>

</div>

);




}

}// fin de la clase

export default Buscadores;

