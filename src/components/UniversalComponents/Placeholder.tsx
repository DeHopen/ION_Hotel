import {FC} from 'react';
import styles from '@/styles/placeholder.module.scss'

interface PlaceholderProps {
  mainText: string,
  additionalText: string
};

const Placeholder: FC<PlaceholderProps> = ({mainText, additionalText}) => {
  console.log('Render Placeholder');

  return (
      <>
        <div className={styles.container}>
          <span className={styles.text}>{mainText}</span>
          <span className={styles.dot}></span>
          <span className={styles.text}>{additionalText}</span>
        </div>
      </>
  );
};

export default Placeholder;