import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Article from '../components/Article';

export default () => (
    <DefaultLayout>
        <Title>О НАС</Title>

        <Article>
            <TextBlock>
                <p>design unit 4 aka Проектная группа 4 созвана в 2016.</p>
                <p>Концепция студии базируется на специфике предприятия креативной индустрии
                    и передовых средств поддержки и тестирования проектных решений. Что позволяет
                    оптимизировать процесс проектирования, сместить распределение времени, ресурсов
                    и усилий в рамках каждого проекта в пользу работы над качеством концепции в основании
                    решений и её реализацией в материале. В каждом проекте студия стремится работать в
                    непосредственном контакте с производителями, чтобы контролировать соблюдение концептуальных
                решений при их материализации как на производстве, так и на стройплощадке.</p>
                <p>Мы знаем силу дизайна и щедро делимся ею.</p>
            </TextBlock>
        </Article>
    </DefaultLayout>
)