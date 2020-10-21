import styles from './Header.module.css';

export default function Header({ title, zoom }) {
  return (
    <h1 className={`${styles.title} ${zoom ? styles.zoom : ''}`}>{title}</h1>
  );
}
