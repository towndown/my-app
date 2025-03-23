import Header from '../components/Header';
import Button from '../components/Button';
import UserCard from '../components/UserCard';
import styles from '../styles/UserCard.module.css'
export default function Home() {
  return (
   <div>
    <Header />
    <main>
      <h1>Hello</h1>
      <p>main page</p>
      <a href="/about">
      <Button text="Узнать больше"></Button>
      </a>
      <div className={styles.container}>
        <UserCard name='Гоша' age={16} hobby='web-dev'></UserCard>
      </div>
    </main>
   </div>
  );
}
