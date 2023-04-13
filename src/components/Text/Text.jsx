import './Text.css'

// Aqui podemos ver claramente uma forma completa de como criar um componente dinâmico, 
// utilizando props, extraindo seu valor e injetando dentro do contexto do componente
// renderizando na tela

export default function Text(props) {
    //desestruturação 
    const { elemento, estilo, conteudo } = props
    const Element = elemento;

    return <Element className={estilo}> {conteudo} </Element>
}




