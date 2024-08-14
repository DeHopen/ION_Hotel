import Image from 'next/image';
import styles from '@/styles/Desktop/InnopolisPage/InnopolisPage.module.scss';
import {kanitCyrillic} from '@/styles/fonts/fonts'
import Placeholder from "@/components/UniversalComponents/Placeholder";
import {innoDescription, placeholderText} from "@/types/types";
import {FC} from "react";

interface InnopolisPageProps {
  PlaceholderText: placeholderText
  descriptions: innoDescription[]
}

const InnopolisPage: FC<InnopolisPageProps> = ({descriptions, PlaceholderText}) => {

  return (
      <div className={styles.container} id='inno'>
        <header className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Иннополис</h1>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.imageContainer}>
            <Image src="/InnopolisPage/Innopolis.jpeg" alt="Иннополис" width={962} height={842}
                   className={styles.image}/>
            <div className={styles.placeholder}>
              <Placeholder mainText={PlaceholderText.mainText} additionalText={PlaceholderText.additionalText}/>
            </div>
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
          </div>
        </main>
      </div>
  );
};
export default InnopolisPage;
