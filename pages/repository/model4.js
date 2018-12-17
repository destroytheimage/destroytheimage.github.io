import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <DefaultLayout>
        <Title>МОДЕЛЬ : : 4</Title>

        <Article>



            <ul>
                <p>Серия изделий для Центрального бульвара
                    <br/>Чистополь, Республика Татарстан, Россия</p>
                <p>заказчик: Фонд "Институт развития городов Республики Татарстан"
                <br/>партнеры: ЛСК, knappt</p>
            
            <p>2017 концепция, эскизный проект, авторский надзор, реализация</p>
            </ul>

            <Image src='https://unit4.io/files/model4/23.gif'/>
            <p>Три площади с навесами и павильонами, тематические кулуары, серия малых архитектурных форм и дизайн оборудования отсылают к важным смысловым аспектам жизни и истории города: агрокультура, часовой завод, велокультура и компоненты умного города.</p>


        </Article>

        <Article>
                    <p><strong>ОГРАЖДЕНИЕ ИЗ КОРТЕН-СТАЛИ</strong></p>
                    <p>Ограждение перфорированное со встроенной линейной подсветкой</p>
                    
                    <Image src='https://unit4.io/files/model4/01.jpg'/>
                    <Image src='https://unit4.io/files/model4/02.jpg'/>

            </Article> 
            <Article>
                                    
                    <p><strong>УРНА-СВЕТИЛЬНИК</strong></p>
                    <Image src='https://unit4.io/files/model4/04.jpg'/>
                    <Image src='https://unit4.io/files/model4/05.jpg'/>
                    <Image src='https://unit4.io/files/model4/20.gif'/>
                    <Image src='https://unit4.io/files/model4/24.jpg'/>
                    <Image src='https://unit4.io/files/model4/03.jpg'/>
                    
                    <Image src='https://unit4.io/files/model4/06.jpg'/>

            </Article> 
            <Article>
                    
                    <p><strong>НАВЕС</strong></p> 
                    <p>Металлокаркас с обшивкой из кортен-стали, покрытие полимочевиной по аквапанели</p>
                    <Image src='https://unit4.io/files/model4/09.jpg'/>
                    <Image src='https://unit4.io/files/model4/21.gif'/>
                    <Image src='https://unit4.io/files/model4/08.jpg'/>
                    
            </Article> 
            <Article>
                    <p><strong>БОЛЛАРД-СВЕТИЛЬНИК</strong></p>
                    <Image src='https://unit4.io/files/model4/12.jpg'/>
                    <Image src='https://unit4.io/files/model4/13.jpg'/>
                    <Image src='https://unit4.io/files/model4/11.jpg'/>

            </Article>

            <Article>

                    <p><strong>СКАМЬИ ИЗ ФИБРОБЕТОНА</strong></p>                
                    <p>Скамьи модульные фибробетонные с покрытием полимочевиной со встроенными розетками</p>
                    <Image src='https://unit4.io/files/model4/16.jpg'/>
                    <Image src='https://unit4.io/files/model4/17.jpg'/>

                    
            </Article>
    </DefaultLayout>
)