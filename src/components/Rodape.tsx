import { findByLabelText } from "@testing-library/react";
import { NONAME } from "dns";
import { Carousel } from "react-bootstrap";

const Rodape = function() {
    
    return (
      
        <footer>

    <Carousel fade>
        <Carousel.Item>
        <img
        className="d-5 w-10"
        src="https://gcmais.com.br/wp-content/uploads/2021/04/ADOCAO.jpg" height="350" width="650"
        alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-20 w-80"
        src="https://th.bing.com/th/id/OIP.C5FenTD4K6VkucXRTfPVBAHaEr?w=297&h=187&c=7&r=0&o=5&pid=1.7" height="350" width="650"
        alt="Second slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
    </Carousel.Item>
    
        <Carousel.Item>

        <img
        className="d-20 w-80"
        src="https://assets.querobolsa.com.br/assets/covers/courses/medicina-veterinaria-2443ccd82cd2089948fac3f5fa77389b839fb1ccdfa3155e8fa4ec87e1bf4e9a.jpg" height="350" width="650"
        alt="Third slide"
        />

        </Carousel.Item>

    </Carousel>

           {/* <p><img src="https://gcmais.com.br/wp-content/uploads/2021/04/ADOCAO.jpg" height="950" width="1300" ></img></p>
        */}
        </footer>

    );
}

export default Rodape;