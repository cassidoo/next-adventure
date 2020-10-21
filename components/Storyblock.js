import styles from './Storyblock.module.css';

export default function Storyblock({ children }) {
  return <div className={styles.text}>{children}</div>;
}
