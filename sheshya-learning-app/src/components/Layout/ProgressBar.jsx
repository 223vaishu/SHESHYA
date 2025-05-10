import styles from '../../styles/Game.module.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar