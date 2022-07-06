import { NONAME } from "dns";
import { Carousel } from "react-bootstrap";
import Botao from "../components/Botao";



const Animais = function () {

    return (

        <footer>

            <Carousel fade>

                <Carousel.Item>

                    <p> <img

                        className="d-20 w-80"

                        src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png" height={550} width={1000}

                        alt="Third slide" ></img></p>


                    <Carousel.Caption>

                        <h3>A procura do dono</h3>

                        <p>Ajude esse pequeno a encontrar seu dono </p>  
                        <p>Porte pequeno, filhote/Macho.</p>  

                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <p> <img

                        className="d-20 w-80"

                        src="https://th.bing.com/th/id/R.12afb9cf6a5c06613c154eb7d6a449f7?rik=BGjx82mud6kCcQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-hhRC5U9Mrz4%2fUpPjM7z-oDI%2fAAAAAAAABcE%2fyBC1FVkZqBA%2fs1600%2fCOLEIRA.JPG&ehk=UHoCvF%2bwGaFe3rlQHVdaJYx0i2thEcY4cks8NTMLimY%3d&risl=&pid=ImgRaw&r=0" height={550} width={1000}

                        alt="Third slide" ></img></p>


                    <Carousel.Caption>

                    <h3>A procura do dono</h3>

                    <p>Ajude essa pequeno a encontrar seu dono </p>  
                    <p>Porte pequeno/Fêmea.</p>  

                    </Carousel.Caption>




                </Carousel.Item>

                <Carousel.Item>

                    <p> <img

                        className="d-20 w-80"

                        src="https://th.bing.com/th/id/R.71b0c942a262b8f70ab40543e2c30b9f?rik=NvKU1Kxk3ADjXQ&pid=ImgRaw&r=0" height={550} width={1000}

                        alt="Third slide" ></img></p>
                        
                    <Carousel.Caption>

                    <h3>A procura do dono</h3>

                    <p>Ajude esse pequeno a encontrar seu dono </p>    

                </Carousel.Caption>



                </Carousel.Item>

                <Carousel.Item>

                    <p> <img

                        className="d-20 w-80"

                        src="https://chacarapet.com.br/blog/wp-content/uploads/2021/02/o-que-calopsita-pode-comer-1140x624.png" height={550} width={1000}

                        alt="Third slide" ></img></p>
                        
                    <Carousel.Caption>

                    <h3>A procura do dono</h3>

                    <p>Ajude esse pequeno a encontrar seu dono </p>    

                    </Carousel.Caption>



                    </Carousel.Item>

            </Carousel>

        <br/>
        <br/>


        <div className="botoes">

            <Botao texto="Clique aqui para mais informações" />

        </div>

        </footer>





    );
}

export default Animais ; 