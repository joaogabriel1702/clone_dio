import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  { yupResolver } from '@hookform/resolvers/yup'
import * as yup from  "yup";

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

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors)

    const onSubmit = data => console.log(data);

    const handleClickLogin = () => {
        navigate('/feed')
    }


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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
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