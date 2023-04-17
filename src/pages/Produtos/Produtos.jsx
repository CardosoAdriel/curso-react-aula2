import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Image from "../../components/Image/Image";
import ContentCard from "../../components/ContentCard/ContentCard";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import ProdutosContext from "../../context/ProdutosContext";
import useProdutos from "../../hook/useProdutos";

export default function Produtos(props) {
  const { info } = useProdutos();

  const [number, setNumber] = useState(2);
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/produtos');

  async function getData() {
    const resposta = await axios.get(url)
    const data = resposta.data

    setCards(data)
  }

  const acaoBotao = () => {
    const nextNumber = number + 1
    setNumber(nextNumber)
  }

  // com segundo parametro [] vazio ele executa em conpilacao
  useEffect(() => {
    getData()
    console.log('PRODUTOS: ', info)
  }, [])

  // com o segundo parametro ele executa toda vez que houver modificação em um estado ou mais e executa uma lógica
  // useEffect(() => {
  //   console.log('CHEGUEI !! ')
  // }, [number])

  if (!cards.length) return <Text elemento="h3" estilo="title" conteudo="Não há produtos disponíveis! =(" />

  return (
    cards.map(
      (card, index) => {
        const { id, srcImage, title, price, paragraph } = card
        return (
          <Card key={id || index}>
            <Image srcImage={srcImage} />

            <ContentCard column="column">

              <Text elemento="h3" estilo="title" conteudo={title} />
              <Text elemento="h1" estilo="price" conteudo={price} />
              <Text elemento="p" estilo="paragraph" conteudo={paragraph} />

              <Button action={acaoBotao}> Saiba Mais {number} </Button>
            </ContentCard>

          </Card>
        )
      }
    )
  )
}