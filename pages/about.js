import React from 'react'
import { Title } from '../src/components/Title'
import TextBlock from '../components/TextBlock'
import Article from '../components/Article'
import { Image } from '../src/components/Image'
import SwitchImage from '../components/SwitchImage'

export default () => (
    <Article>
        <Title>О НАС</Title>
        <p>
        Проектная студия design unit 4 созвана в 2016.
        </p>
        <p>
        Концепция студии базируется на специфике предприятия креативной индустрии
        и передовых средств поддержки и тестирования проектных решений. Что позволяет
        оптимизировать процесс проектирования, сместить распределение времени, ресурсов
        и усилий в рамках каждого проекта в пользу работы над качеством концепции в основании
        решений и её реализацией в материале.
        </p>

<SwitchImage
    images={[
        {
            src: 'https://unit4.io/files/about/team.jpg',
            buttonText: 'добавить чёткости',
        },
        {
            src: 'https://unit4.io/files/about/team.gif',
            buttonText: 'stop it',
        },
    ]}
/>
        
        {/* <h2>Аналитика и консалтинг</h2>
        <h2>Градостроительное и архитектурное проектирование</h2>
        <h2>Социально-культурное проектирование</h2>
        <h2>Дизайн городской среды</h2>
        <h2>Архитектурное проектирование</h2>
        <h2>Предметный дизайн</h2>
        <h2>Брендинг</h2>
        <h2>Авторский надзор</h2> */}

        <TextBlock> 
        
            <p>
                В каждом проекте студия стремится работать в
                непосредственном контакте с производителями, чтобы контролировать соблюдение концептуальных
                решений при их материализации как на производстве, так и на стройплощадке.
            </p>
            <p>
                Мы знаем силу дизайна и щедро делимся ею.
            </p>
            <p> <a href={'https://issuu.com/unit4/docs/design_unit_4_portfolio'} target="_blank">Компетенции студии</a>
            <br/><a href={'https://issuu.com/unit4/docs/mla_design_unit_4_products'} target="_blank">Линейка продуктов по развитию городской среды </a></p>
        </TextBlock>

        <TextBlock>    
            <p>Данияр Юсупов<br/>
            Владимир Петросян<br/>
            Надежда Кузнецова<br/>
            Елизавета Владимирова</p>
            <p>
            Марина Цай<br/>
            Сергей Барышев<br/>
            Николай Медведенко<br/>
            Роман Тимашев<br/>
            Григорий Балуев<br/>
            Вероника Серебрякова
            </p>
        </TextBlock>

    </Article>
)