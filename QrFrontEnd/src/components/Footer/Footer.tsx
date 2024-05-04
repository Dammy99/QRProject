import styles from "./Footer.module.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { IconButton } from "@mui/material";

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
                <a href="#" className={styles.icoLinkedin} title="Instagram">
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
    //           </div>
    //         </div>
    //         <div className="col-md-3">
    //           <h4>Follow Us</h4>
    //           <ul className={styles.socialCircle}>
    //             <li>
    //               <a href="#" className={styles.icoFacebook} title="Facebook">
    //                 <i className="fa fa-facebook"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className={styles.icoLinkedin} title="Linkedin">
    //                 <i className="fa fa-linkedin"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-12 copy">
    //           <p className="text-center">
    //             &copy; Copyright 2018 - Company Name. All rights reserved.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
