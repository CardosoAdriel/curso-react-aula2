import { useEffect, useRef } from 'react';
import Text from '../Text/Text';
import './FormProduto.css';


export default function FormProduto(props) {
    const linkImageRef = useRef(null)
    const tituloRef = useRef(null)
    const precoRef = useRef(null)
    const descricaoRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const produto = {
            srcImage: linkImageRef.current.value,
            title: tituloRef.current.value,
            price: Number(precoRef.current.value),
            paragraph: descricaoRef.current.value
        }
        console.log(produto)

        resetFrom()
    }

    const resetFrom = () => {
        linkImageRef.current.value = null
        tituloRef.current.value = null
        precoRef.current.value = null
        descricaoRef.current.value = null
    }

    useEffect(() => {
        linkImageRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleSubmit} className="form">
            <Text elemento="h3" estilo="paragraph" conteudo='Cadastro de Produto' />
            <input ref={linkImageRef} type="text" name="linkImage" placeholder="Link imagem ..." />
            <input ref={tituloRef} type="text" name="titulo" placeholder="Titulo ..." />
            <input ref={precoRef} type="number" name="preco" placeholder="Preço ..." />
            <input ref={descricaoRef} type="text" name="descricao" placeholder="Descrição ..." />
            <input className='submit' type='submit' value="Cadastrar" />
        </form>
    )

}