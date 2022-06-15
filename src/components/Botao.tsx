import { FunctionComponent } from 'react';
import './Botao.css';

type Props = {
    texto: string
    click?: () => void
}

const Botao: FunctionComponent<Props> = function(props) {
    return (
        <>
        <button onClick={props.click}>{props.texto}</button>
        </>
    );
};

export default Botao;

