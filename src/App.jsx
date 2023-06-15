import Changes from "./components/Changes/Changes";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Changes />
        </div>
      </main>
    </>
  );
}
