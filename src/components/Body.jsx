import React, {useContext} from 'react'
import { GlobalContext } from '../context'



const Body = () => {
  const {state} = useContext(GlobalContext);
  return (
    <div>
        <h1>{state.count}</h1>
        <h2>Aprendiendo a trabajar con contexto</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quod praesentium dignissimos dolores totam, ex adipisci natus temporibus ducimus omnis? Dolores cum temporibus debitis, nihil nostrum impedit odio cupiditate, rerum laborum dolorem iure modi, consectetur obcaecati! Autem exercitationem rerum repudiandae minus dolore eligendi assumenda, magnam itaque quibusdam natus error quis ex veritatis optio nisi dolorem voluptates nobis est non voluptas.</p>
    </div>
  )
}

export default Body
