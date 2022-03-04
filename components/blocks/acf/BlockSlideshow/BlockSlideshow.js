import Slide from '@/components/molecules/Slide';
import styles from './BlockSlideshow.module.css';

export default function BlockSlideshow({data}) {
  console.log({data})

  return(
    <>
      <div className={styles.BlockSlideshow}>
        {data?.slide_1_heading && (
          <Slide
            heading={data.slide_1_heading}
            text={data.slide_1_text}
            image={data.slide_1_image}
          />
        )}
        {data?.slide_2_heading && (
          <Slide
            heading={data.slide_2_heading}
            text={data.slide_2_text}
            image={data.slide_2_image}
          />
        )}
        {data?.slide_3_heading && (
          <Slide
            heading={data.slide_3_heading}
            text={data.slide_3_text}
            image={data.slide_3_image}
          />
        )}
        {data?.slide_4_heading && (
          <Slide
            heading={data.slide_4_heading}
            text={data.slide_4_text}
            image={data.slide_4_image}
          />
        )}
      </div>

    </>
  )
}
