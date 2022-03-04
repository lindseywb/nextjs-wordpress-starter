import DisplayImage from '@/components/atoms/Image';
import styles from './Slide.module.css';

export default function Slide({
  heading,
  text,
  image
}) {
  return(
    <div
      className={styles.Slide}
    >
      <h2>{heading}</h2>
      <p>{text}</p>
      <DisplayImage id={image} />
    </div>
  )
}
