import ContentCard from "../ContentCard/ContentCard";
import Image from "../Image/Image";
import Text from "../Text/Text";
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";



export default function Header(props) {

    return (
        <ContentCard between='between'>
            <Image srcImage={viteLogo} />
            <a style={{ fontSize: '22px' }} href='/'>Home</a>
            <a style={{ fontSize: '22px' }} href='/produtos'>Produtos</a>
            <a style={{ fontSize: '22px' }} href='/cadastro'>Cadastro</a>
            {/* <Text elemento="h3" estilo="title" conteudo={`Trainning Education`} /> */}
            <Image srcImage={reactLogo} />
        </ContentCard>
    )
}