import {FC} from 'react';
import Image from 'next/image';
import styles from '@/styles/InfoHotel.module.scss';
import {kanitCyrillic} from '@/styles/fonts/fonts'
import Placeholder from "@/components/UniversalComponents/Placeholder";

const content = [
  {
    heading: 'Как нас найти?',
    description: 
    {
      title: 'Генеральный проект Иннополиса разработал планировщик Сингапура Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
      address: 'г. Иннополис, ул. Университетская, д. 1',
      phone: '+7 (495) 234-12-06',
      email: 'ionhotel@ioncompany.ru',
    },

  },
];

const mainImg = {
  img: '/InfoHotel/ION.jpeg',
  width: 1280,
  height: 960,
}

const placeholder = {
  mainText: 'ION',
  additionalText: 'Отель',
}

const InfoHotel: FC = () => {
  return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.textSection}>
            {content.map((item, index) => (
                <div key={index} className={styles.textContent}>
                  <div className={kanitCyrillic.className}>
                    <h1 className={styles.heading}>{item.heading}</h1>
                  </div>
                  <p className={styles.title}>{item.description.title}</p>
                  <div className={styles.info}>
                    <p className={styles.address}>
                      <div className={styles.icon}>
                        <Image src='/InfoHotel/address.svg' alt='address' width={28} height={28}/>
                      </div>
                      <div className={styles.content}>
                        <span>Адрес:</span>
                        <p>{item.description.address}</p>
                        <a href='#'>Как проехать?</a>
                      </div>
                    </p>
                    <p className={styles.phone}>
                      <div className={styles.icon}>
                        <Image src='/InfoHotel/phone.svg' alt='phone' width={28} height={28}/>
                      </div>
                      <div className={styles.content}>
                        <span>Телефон для бронирования:</span>
                        <p>{item.description.phone}</p>
                      </div>
                    </p>
                    <p className={styles.email}>
                      <div className={styles.icon}>
                        <Image src='/InfoHotel/email.svg' alt='email' width={28} height={28}/>
                      </div>
                      <div className={styles.content}>
                        <span>E-mail:</span>
                        <p>{item.description.email}</p>
                      </div>
                    </p>
                  </div>
                </div>
            ))}
          </div>

          <div className={styles.imageSection}>
            <Image
                src={mainImg.img}
                alt="Building"
                width={mainImg.width}
                height={mainImg.height}
                className={styles.image}
            />
          </div>
          <div className={styles.placeholder}>
            <Placeholder mainText={placeholder.mainText} additionalText={placeholder.additionalText}/>
          </div>
        </div>

      </div>
  );
};

export default InfoHotel;
