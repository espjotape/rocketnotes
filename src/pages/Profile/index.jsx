import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiCamera ,FiUser,FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/"> <FiArrowLeft /> </a>
      </header>

      <Form>

      <Avatar>
        <img 
        src="https://github.com/espjotape.png" 
        alt="Foto do usuário"
        />

        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id="avatar"
          type="file" />
        </label>
      </Avatar>


        <Input 
        placeholder="Digite seu nome"
        type="text"
        icon={FiUser}
        />
        <Input 
        placeholder="E-mail"
        type="email"
        icon={FiMail}
        />
        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        />
        <Input 
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        />
        
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}