import { useState } from 'react';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import Fim from '../inicio/fim';
import Pag from '../inicio/inicio';
import ItemPage from './Item';
import './Itens.css';




    enum Estado {

            Inicial,
            criar,
            login,
            mudar,

    }

    const ItensPage = function(){
        //let estado = 'INICIAL';

    const [estado, setEstado] = useState(Estado.Inicial);
  

        const botaoCriarClicado = function () {
        setEstado(Estado.criar);
        };

        const botaoLoginClicado = function () {
            setEstado(Estado.login);
            };

        const botaoLoginMudar = function () {
            setEstado(Estado.mudar);
            };

        const botaoLoginCancelar = function () {
            setEstado(Estado.Inicial);
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

        const logotipoClicado = function () {
            setEstado (Estado.Inicial);
        };


    return( 
    
        <>
        
            <Pag logotipoClicado= {logotipoClicado}/>

            <Cabecalho />


                <main className='main'>

                    <nav>
                    
                    <br/>

                    {(estado === Estado.Inicial) && (
                        <h1>PROJETO PARA ADOÇÃO E DIMINUIÇÃO DE CASOS DE ABANDONO DE ANIMAIS.</h1>
                    )}

                        <br/>

                <ul>
                    
                {(estado === Estado.Inicial) && (
                    <h2>  A Organização Mundial da Saúde estima que só no Brasil existam mais de 30 milhões de animais abandonados, entre 10 milhões de gatos e 20 milhões de cães. Em cidades de grande porte, para cada cinco habitantes há um cachorro. Destes, 10% estão abandonados.</h2>
                    )}

                    <br/>

                {(estado === Estado.Inicial) && (
                    <p>Nosso objetivo é tentar diminuir os casos de abandono de animais domésticos, especificamente os cachorros e gatos de rua, temos muitos casos de abandono, e queríamos levar isso em consciência para as pessoas, dentro do aplicativo teríamos uma plataforma de adoção, denuncia de maus tratos, doações (para comida e cuidados), conscientização e dúvidas sobre como ter um animal em casa, e até dicas sobre o assunto, tendo base em estudos ou até conversas com gente especializada na área.</p>
                )}

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
                    <Botao texto= 'LOGIN' click={botaoLoginClicado}/>
                )}

                </div>

                <br/>

                {(estado === Estado.criar) && (
                    
                    <form className="item, box">

                   
            
                        
                        <label>
                            
                            Nome:
                           
                            
                            <input required type="text" placeholder="Digite seu nome" />
                        
                        </label>

                        
                        <label>
                            
                            Email:
                           
                            
                            <input required type="email" placeholder="Digite seu email" />

                        </label>

                        <label>
                            Data de nascimento:

                            <input required type="date" placeholder="Digite a sua data de nascimento"/>

                        </label>

                        <label>
                            
                            Telefone:
                           
                            
                            <input required minLength={11} type="phone" placeholder="Digite seu telefone" />

                        </label>

                        <label>
                            Senha:
                        
                            <input required minLength={8} type='password' placeholder="Crie uma senha"/>
                        
                        </label>
                        
                        <label>
                            
                            Confirme a senha:

                            <input required minLength={8} type='password' placeholder="confirme a senha"/>

                        </label>

                        <div className='botoes'>
                         
                        
                            <Botao texto="Voltar" click= {botaoCriarCancelar} />
                            
                            <Botao texto="Cadastre-se" click={botaoCriarClicado} />

                       
                        
                        </div >

                    </form>
                    
                )}

                {(estado === Estado.login) && ( 

                    <form className='Item, box'>
           
                        
                        <label>
                            
                            Email:
                           
                            
                            <input required type="email" placeholder="Digite seu email" />

                        </label>


                        <label>
                            Senha:
                        
                            <input required minLength={8} type='password' placeholder="Crie uma senha"/>
                        
                        </label>
                        
                        <div className='botoes'>
                        
                        <Botao texto="Cancelar" click= {botaoLoginCancelar} />
                        <Botao texto="Login" click= {botaoLoginMudar} />
                        
                        </div>

                    </form>


                )}


              

                </main>

                <br/>
                {(estado === Estado.Inicial) && (
                <Rodape />
                )}
            <br/>

            < Fim />

        </>
    
    );

};

  
export default ItensPage;