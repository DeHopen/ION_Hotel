import Image from 'next/image';
import styles from '@/styles/InnopolisPage.module.scss';
import {kanitCyrillic} from '@/styles/fonts/fonts'

const InnopolisPage = () => {
  const descriptions = [
    { title: 'Функциональная архитектура', description: 'Генеральный проект Иннополиса разработал планировщик Сингарупа Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.' },
    { title: 'Университет Иннополис', description: '100% выпускников трудоустраиваются в ведущие IT-компании или открывают свои стартапы.' },
    { title: 'Будущее на старте', description: 'В Иннополисе начали работать Центр обработки данных «Атомдата-Иннополис», технопарк в сфере высоких технологий «ИнноПарк».' },
    { title: 'Университет Иннополис', description: '100% выпускников трудоустраиваются в ведущие IT-компании или открывают свои стартапы.' },
  ];

  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Иннополис</h1>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.imageContainer}>
            <Image src="/InnopolisPage/Innopolis.jpeg" alt="Иннополис" width={962} height={842} className={styles.image}/>
          </div>
          <div className={styles.content}>
            <div className={kanitCyrillic.className}>
              <h2 className={styles.heading}>Город, который тебя удивит</h2>
            </div>
            <ul className={styles.item}>
            {descriptions.map((item, index) => (
                  <li key={index}>
                    <h3 className={styles.subheading}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </li>
              ))}
            </ul>
            <div className={styles.link}>
              <a href="/more-details" >Подробнее</a>
              <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
            </div>

          </div>
        </main>
      </div>
  );
};
export default InnopolisPage;
