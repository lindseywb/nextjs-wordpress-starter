import styles from './BlockSlideshow.module.css'

export default function BlockSlideshow({data}) {
  console.log({data})
  return(
    <>
      <div className={styles.BlockSlideshow}>
        <h1>Slideshow</h1>
        {data?.slide_1_heading && (
          <h2>{data?.slide_1_heading}</h2>
        )}
        {data?.slide_2_heading && (
          <h2>{data?.slide_2_heading}</h2>
        )}
        {data?.slide_3_heading && (
          <h2>{data?.slide_3_heading}</h2>
        )}
        {data?.slide_4_heading && (
          <h2>{data?.slide_4_heading}</h2>
        )}
      </div>

    </>
  )
}
