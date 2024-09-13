import Image from "next/image";
import styles from "./page.module.css";
import Header from "./pages/components/Header";
import Index from "./pages/components/Index";
import Services from "./pages/components/Services";
import ContactUS from "./pages/components/ContactUS";

export default function Home() {
  return (
    <main className={styles.main}>
    <Header/>
    <Index/>

    <Services/>
    <ContactUS/>
    </main>
  );
}
