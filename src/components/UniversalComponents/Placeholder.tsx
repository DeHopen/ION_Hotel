import {FC} from 'react';
import styles from '@/styles/UniversalComponents/placeholder.module.scss'

interface PlaceholderProps {
  mainText: string,
  additionalText: string
}

const Placeholder: FC<PlaceholderProps> = ({mainText, additionalText}) => {
  console.log('Render Placeholder');

  return (
      <>
        <div className={styles.container}>
          <span className={styles.text}>{mainText}</span>
          <div className={styles.img}>
            <img src='/Placeholder/placeholder_dot.svg' alt='Placeholder'/>
          </div>
          <span className={styles.text}>{additionalText}</span>
        </div>
      </>
  );
};

export default Placeholder;