import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.container}>
          <div className={styles.element}>
            <h4>Some info</h4>
            <ul className={styles.list}>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
            </ul>
          </div>
          <div className={styles.element}>
            <h4>Some info</h4>
            <ul className={styles.list}>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
            </ul>
          </div>
          <div className={styles.element}>
            <h4>Some info</h4>
            <ul className={styles.list}>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
              <a href="#">qwe</a>
            </ul>
          </div>
          <div className={styles.element}>
            <h4>Follow Us</h4>
            <ul className={styles.socialCircle}>
              <li>
                <a href="#" className={styles.icoFacebook} title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className={styles.icoLinkedin} title="Linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className={styles.icoInstagram} title="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottomContent}>
        <p>&copy; Copyright 2018 - Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
