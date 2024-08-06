import {FC} from 'react';
import styles from "@/styles/Mobile/InfoHotel/InfoHotelMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import Image from "next/image";
import Placeholder from "@/components/UniversalComponents/Placeholder";

interface InfoHotelMobileProps {
  content: {
    heading: string,
    description: {
      title: string,
      address: string,
      phone: string,
      email: string,
    }
  }[],

  mainImg: {
    img: string,
    width: number,
    height: number,
  },

  placeholder: {
    mainText: string,
    additionalText: string,
  }
}

const InfoHotelMobile: FC<InfoHotelMobileProps> = ({content, mainImg, placeholder}) => {
  console.log('Render InfoHotelMobile');

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
            <div className={styles.placeholder}>
              <Placeholder mainText={placeholder.mainText} additionalText={placeholder.additionalText}/>
            </div>
          </div>
        </div>
      </div>
  );
};


export default InfoHotelMobile;