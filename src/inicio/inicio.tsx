
import './inicio.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../content/logo.pet.png';

const Pag = function(){
    
  
        enum Estado {

            Inicial,

        }

            //let estado = 'INICIAL';

            const [estado, setEstado] = useState(Estado.Inicial);


            const botaoInicioClicado = function () {
            setEstado(Estado.Inicial);
            };  


  return (



      <>

        <Navbar>

          <Container>

            <Navbar.Brand href="#Inicio">

              <img
                className="d-20 w-80"
                src={logo} height="100" width="auto"
       
               />


            </Navbar.Brand>

              <Nav className="me-auto">



          
                  <Nav.Link href="#Facebook" >

                <img  
                  className="d-20 w-80"
                  src="https://confradesp.com.br/wp-content/uploads/2019/01/logo-face.png" height="25" width="30"
              
                />

                  </Nav.Link>
             

                  <Nav.Link href="#Instagram">
                  
                <img  
                  className="d-20 w-80"
                  src="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png" height="25" width="30"
                />

                  </Nav.Link>
                  
                  <Nav.Link href="#Twitter">
                  
                <img  
                  className="d-20 w-80"
                  src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone-1.png" height="25" width="30"
                />
                  
                  </Nav.Link>

              </Nav>

          </Container>
      
        </Navbar>
      
      </>

    );
};

export default Pag;