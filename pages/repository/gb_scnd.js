import react from 'react'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <>
        <Title>КОНЦЕПЦИЯ ОТКРЫТЫХ ГОРОДСКИХ ПРОСТРАНСТВ</Title>

        <Article>



            <ul>
                <p>Концепция открытых городских пространств жилого района Скандинавия А101
                    <br/>Новая Москва, Россия</p>
                <p>заказчик: ГК А101, Москва
                <br/>партнеры: MLA+ СПб</p>

                <p>2018 - концепция</p>

            </ul>

                <p><i>Концепция — это инструмент интеграции ценностей и смыслов проекта с их материальным воплощением. Концепция открытых городских пространств жилого района Скандинавия A101 включает три части, каждая часть имеет свое содержание и образ использования.</i></p>

        </Article>
        <Article>
                


                <p><strong>КОНЦЕПЦИЯ [GB]</strong></p>
            
                <p>Концепция открытых городских пространств - рамочный документ, определяющий дизайн-решение открытых городских пространств жилого района, как цельный продукт.</p>
                <Image src='https://unit4.io/files/gb_scnd/01.jpg'/>
                <iframe src="https://e.issuu.com/anonymous-embed.html?u=unit4&d=gb_u4_black_" width="100%" height="400" frameborder="0" allowfullscreen="true"></iframe>


                <p>Cодержит:
                <br/>| базовую смыслообразующую часть, определяющую обоснование всех дизайн-решений, их общий характер и свойства <i>(весь комплекс свойств дизайн-решений выделяет проект и отличает как цельность на фоне других подобных проектов).</i>
                <br/>| пространственный анализ открытых городских пространств всего проекта <i>(определяет области типовых и специальных решений, выделяет идентификацию мест в масштабных проектах при сохранении цельности и характера дизайн-решений).</i></p>


                <p>
                    Смыслообразующая часть проекта также используется для обоснования концепции бренда проекта.
                    <br/>Пространственный анализ определяет разнообразие дизайн-решений дизайн-кода проекта.
                    <br/>Концепция имеет как внешнее обращение <i>(т.к. содержит смысловые обоснования решений)</i>, так и внутреннее техническое справочное использование <i>(границы зон, определяющих различия в дизайн-решениях).</i>
                </p>
                


        </Article>
        <Article>

                <p><strong>ДИЗАЙН-КОД [DC]</strong></p>
                <Image src='https://unit4.io/files/gb_scnd/02.jpg'/>
                <p>
                    Дизайн-код открытых городских пространств - каталог дизайн-решений, применяемых в проекте. дизайн-код необходим в проектах масштаба жилого района, т.к. позволяет перейти от множества частных дизайн-решений к использованию типовых решений в рамках одного проекта с соблюдением цельности и общего характера решений, определенного в концепции ОГП проекта.</p>
                <p>Дизайнкод содержит перечень дизайн-решений, выраженный в кодах дизайн-решений. Все частные решения проекта оперируют кодами решений. Буквенно-цифровой код решений содержит категорию/опции/конструктивные особенности каждой разновидности дизайн-решения. Опыт показывает, что для кодирования всей этой информации достаточно четырехзначного буквенно-цифрового кода. Важно также и машиночитаемый формат кода решений, т.к. он используется для автоматизации процессов <i>(авоматической генерации смет при оценке решений, машинной обработки вариантов дизайн-решений)</i>. Частью дизайн-кода являются программые средства обработки кода <i>(самоисполняющийся скрипт), ускоряющие процессы оценки решений и генерации проектной документации.</i>.
                </p>
                <Image src='https://unit4.io/files/gb_scnd/03.jpg'/>
                <p>
                Дизайн-код содержит визуализацию и краткое пояснение к каждому компоненту дизайн-решений <i>(каждому компоненту кода дизайн-решений)</i>.
                </p>
                <Image src='https://unit4.io/files/gb_scnd/04.jpg'/>

        </Article>
        <Article>

                <p><strong>КОНЦЕПЦИИ ДИЗАЙНА</strong></p>
                <p>Концепции дизайна открытых городских пространств наглядно демонстрируют каким образом ценности и смыслы, содержащиеся в Концепции, выраженные через решения Дизайн-кода, «спускаются» на уровень архитектурного и ландшафтного дизайна конкретных городских пространств. </p>
                <Image src='https://unit4.io/files/gb_scnd/05.jpg'/>
                <p>Концепции дизайна открытых городских пространств содержат примеры решений для всех типов открытых городских пространств, встречающихся в проекте.</p>

        </Article>
    </>
)