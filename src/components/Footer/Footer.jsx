import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <span className="time">06.2023</span>
          <a
            href="https://tapmybio.com/sate"
            target="_blank"
            rel="noreferrer"
            className="ref"
          >
            <span className="mini">Зроблено за підтримкою</span> Sate
          </a>
        </div>
      </div>
    </footer>
  );
}
