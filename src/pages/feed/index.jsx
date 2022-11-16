import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return(<>
    <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo nome="João Gabriel" image="https://avatars.githubusercontent.com/u/38577266?v=4" percentual={35} />
                <UserInfo nome="João Gabriel" image="https://avatars.githubusercontent.com/u/38577266?v=4" percentual={80} />
                <UserInfo nome="João Gabriel" image="https://avatars.githubusercontent.com/u/38577266?v=4" percentual={50} />
                <UserInfo nome="João Gabriel" image="https://avatars.githubusercontent.com/u/38577266?v=4" percentual={99} />
                <UserInfo nome="João Gabriel" image="https://avatars.githubusercontent.com/u/38577266?v=4" percentual={70} />
            </Column>
        </Container>
    </>
    )
}

export { Feed }