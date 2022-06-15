import { useState } from 'react';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import Pag from '../inicio/inicio';
import './Itens.css';




    enum Estado {

            Inicial,
            criar,

    }

    const ItensPage = function(){
        //let estado = 'INICIAL';

    const [estado, setEstado] = useState(Estado.Inicial);
  

        const botaoCriarClicado = function () {
        setEstado(Estado.criar);
        };

        const botaoSalvarClicado = function () {
        setEstado (Estado.Inicial);
        };

        const botaoCriarCancelar = function () {
        setEstado (Estado.Inicial);

        const botaoCriarClicado = function () {
        setEstado (Estado.Inicial);
        };

        
        };


    return( 
    
        <>
        
            <Pag/>

            <Cabecalho />


                <main>

                    <nav>
                    
                    <br/>

                        <h1>PROJETO PARA ADOÇÃO E DIMINUIÇÃO DE CASOS DE ABANDONO DE ANIMAIS.</h1>

                        <br/>

                <ul>
                    
                    <h2>  A Organização Mundial da Saúde estima que só no Brasil existam mais de 30 milhões de animais abandonados, entre 10 milhões de gatos e 20 milhões de cães. Em cidades de grande porte, para cada cinco habitantes há um cachorro. Destes, 10% estão abandonados.</h2>
                    
                    <br/>

                    <p>Nosso objetivo é tentar diminuir os casos de abandono de animais domésticos, especificamente os cachorros e gatos de rua, temos muitos casos de abandono, e queríamos levar isso em consciência para as pessoas, dentro do aplicativo teríamos uma plataforma de adoção, denuncia de maus tratos, doações (para comida e cuidados), conscientização e dúvidas sobre como ter um animal em casa, e até dicas sobre o assunto, tendo base em estudos ou até conversas com gente especializada na área.</p>
                
                </ul>

                    </nav>

                <br/>

                <div>
                
                {(estado === Estado.Inicial) && (
                    <Botao texto= 'CADASTRE-SE' click={botaoCriarClicado}/>
                )}

                </div>

                    <br/>

                <div>
                
                {(estado === Estado.Inicial) && (
                    <Botao texto= 'LOGIN' click={botaoCriarClicado}/>
                )}

                </div>

                <br/>

                {(estado === Estado.criar) && (
                    
                    <form className="item">

                   
            
                        
                        <label>
                            
                            Nome:
                           
                            
                            <input type="text" placeholder="Digite seu nome" />
                        
                        </label>

                        
                        <label>
                            
                            Email:
                           
                            
                            <input type="email" placeholder="Digite seu email" />

                        </label>

                        <label>
                            Data de nascimento:

                            <input type="date" placeholder="Digite a sua data de nascimento" />

                        </label>

                        <label>
                            
                            Telefone:
                           
                            
                            <input type="phone" placeholder="Digite seu telefone" />

                        </label>

                        <label>
                            Senha:
                        
                            <input type='password' placeholder="Crie uma senha"></input>
                        
                        </label>
                        
                        <label>
                 Confirme a senha:

                            <input type='password' placeholder="confirme a senha"></input>

                        </label>

                        <div className='botoes'>
                        
                            <Botao texto="Cadastre-se" click={botaoSalvarClicado} /> 
                        
                            <Botao texto="Voltar" click= {botaoCriarCancelar} />
                            
                            <Botao texto="Login" click={botaoCriarClicado} />

                       
                        
                        </div >

                    </form>
                )}

                </main>

                <br/>

            <Rodape />

            <br/>

        </>
    
    );

};

  
export default ItensPage;