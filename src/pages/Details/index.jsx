import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details(){
  return (
    <Container>
      <Header></Header>

      <ButtonText title="Excluir nota"/>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://rocketseat.com.br/</a></li>
          <li><a href="#">https://rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
       <Tag title="express"></Tag>
       <Tag title="node"></Tag>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}