import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [api, setApi] = useState({ respuesta: 'no te encontre'});
  
  useEffect(() => {
    async function consultaAPI(){
      const consulta = await axios({
        method: 'GET',
        url: 'https://backend-ciro.herokuapp.com/ttt'
      });
      console.log(consulta);
      setApi(consulta.data);
    };
 
    consultaAPI();
  }, []);

  return (
    <div className="App">
      <h1>hola</h1>
      <h1>{api.respuesta}</h1>
      <h1>hola diana papucho ya comio?????</h1>
    </div>
  );
}

export default App;
