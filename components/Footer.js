export default function Footer() {
  return (
    <>
      <footer>
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className="logo" /> for
        you
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 3px solid #3a93af;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  );
}
