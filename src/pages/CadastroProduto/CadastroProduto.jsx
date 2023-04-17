import FormProduto from "../../components/FormProduto/FormProduto";
import useProdutos from "../../hook/useProdutos";


export default function CadastroProduto(props) {
    const { info } = useProdutos()

    console.log('CADASTRO', info)
    return <FormProduto />
}