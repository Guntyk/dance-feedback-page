import Changes from "./components/Changes/Changes";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import List from "./components/List/List";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Changes />
          <List />
        </div>
      </main>
    </>
  );
}
