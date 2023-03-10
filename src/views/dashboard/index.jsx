import react, {useState} from 'react'


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './index.scss'


import Catalogos from './catalogos'
import Usuarios from './usuarios'
import Ventas from './ventas'
import Proyectos from './proyectos'
import Capitulos from './capitulos'


const Dashboard = () =>{

    const[vista,setVista] = useState(0)


    let miNombre = localStorage.getItem("apiKeyAcceso");
    console.log("---->", miNombre)

    const changeVista = (id) =>{
        setVista(id)
    }

    return(
        <div className='containerDashBoard'>
            <div className="containerMenu">
                <div className="containerAvatar">
                <AccountCircleIcon sx={{color:"#FFF", fontSize:"120px"}}></AccountCircleIcon>
                <div>
                    <label>Usuario :</label>
                </div>
                </div>
                <ul>
                    <li onClick={()=>changeVista(1)}>CATALOGOS</li>
                    <li onClick={()=>changeVista(2)}>VENTAS</li>
                    <li onClick={()=>changeVista(3)}>USUARIOS</li>                                   
                    <li onClick={()=>changeVista(4)}>PROYECTOS</li>                  
                    <li onClick={()=>changeVista(5)}>CAPITULOS</li>    
 

                    

                </ul>                
            </div>
            <div className="containerPageOne">
                <div className="containerPageOneContent">
                    <div className="containerPageOneContentHeader"></div>
                    <div className="containerPageOneContentView">
                        {
                            vista===0?"Bienvendido":""
                        }
                        {
                            vista===1?<Catalogos />:""
                        }
                        {
                            vista===2?<Ventas />: ""
                        }
                        {
                            vista===3?<Usuarios />:""
                        }
                        {
                            vista===4?<Proyectos />:""
                        }
                        {
                            vista===5?<Capitulos />:""
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Dashboard