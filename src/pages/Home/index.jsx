import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";


export function Home(){
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive/></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="JavaScript" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
       <Section title="Minhas Notas">
          <Note data={{
            title: 'React Modal',
            tags: [
              {id : '1', name: 'react'},
              {id : '2', name: 'rocketseat'}
            ]
          }}/>
          
       </Section>
      </Content>

      <NewNote >
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}