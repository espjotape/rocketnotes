import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/espjotape.png" 
        alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>João Pedro Espindola</strong>
        </div>
      </Profile>
    </Container>
  )
}