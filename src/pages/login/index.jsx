import { MdEmail, MdLock } from 'react-icons/md';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { 
    Column, 
    Container, 
    Row, 
    Title, 
    Wrapper, 
    TitleLogin, 
    SubtitleLogin, 
    CriarText, 
    EsqueciText 
} from './styles'

const Login = () => {
    return(<>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para voce aprender com experts, domnar as principais tecnologias e entrar mais rapido
                nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make de change._</SubtitleLogin>
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </>
    )
}

export { Login }