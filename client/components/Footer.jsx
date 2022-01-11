const Footer = () => {
  return (
    <div className="footer">
      <div>2022 Minyong Park - All rights reserved</div>
      <style jsx>{`
        .footer {
          position: fixed;
          width: 100vw;
          height: 8vh;
          bottom: 0;
          color: white;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Footer;
