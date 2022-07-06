import { NONAME } from "dns";
import { Carousel } from "react-bootstrap";
import './carrossel.css';


const Carrossel = function () {

    return (

        <footer >

            <Carousel fade>

                <Carousel.Item>

                    <p > <img

                        className="d-20 w-80"

                        src="https://th.bing.com/th/id/R.d46b3b90c3a407b15f8e786e8d84392e?rik=YjsqUuMhnQ80uQ&pid=ImgRaw&r=0" height={550} width={1000}

                        alt="Third slide" ></img></p>


                    <Carousel.Caption >

                        <h3>MAX</h3>

                        <p className="bigu">Ajude esse pequeno a encontrar um lar</p>    

                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <p > <img

                        className="d-20 w-80"

                        src="https://www.ovale.com.br/image/policy:1.186174.1631615235:1631615235/image.jpg?f=3x2&w=1200" height={550} width={1000}

                        alt="Third slide" ></img></p>


                    <Carousel.Caption>

                        <h3>Penelope e Joaquim</h3>

                        <p className="bigu">Ajude esses pequenos a encontrar um lar</p>

                    </Carousel.Caption>




                </Carousel.Item>

                <Carousel.Item>

                    <p > <img

                        className="d-20 w-80"

                        src="https://th.bing.com/th/id/OIP.6oXZzNDwmAFXsOkSItA5GQHaE8?pid=ImgDet&rs=1" height={550} width={1000}

                        alt="Third slide" ></img></p>
                        
                    <Carousel.Caption>

                <h3>Bibi</h3>

                <p className="bigu">Ajude essa pequena a encontrar um lar</p>

                </Carousel.Caption>



                </Carousel.Item>

            </Carousel>




        </footer>





    );
}

export default Carrossel; 