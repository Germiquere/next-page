import { About, ContactForm, Footer, Header, Interests } from "./components";


export default function Home() {
  return (
    <>
    <Header/>
    <main>
        <About/>
        <Interests/>
        <ContactForm/>
    </main>
    <Footer/>
    </>
  );
}
