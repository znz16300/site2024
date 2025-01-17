import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem}>© 2025 Куликівський ліцей</div>
      <div className={`${classes.footerItem} ${classes.minimal}`}>
        <p>Contact Information:</p>
        <Link to="tel:+380464321208">
          <p>Телефон: +38 (046) 43-2-12-08</p>
          <p>Email: znz16300@gmail.com</p>
        </Link>
      </div>
      <div className={`${classes.footerItem} ${classes.minimal}`}>
        <p>Address:</p>
        <Link to="https://www.google.com/maps/@51.3733966,31.6439662,17.01z">
          <p>Шевченка, 4</p>
          <p>Чернігівська область, с-ще Куликівка</p>
        </Link>
      </div>
      <div className={`${classes.footerItem} ${classes.minimal}`}>
        <p>Follow us on social media:</p>
        <div className={classes.iconWrapper}>
          <Link to="https://x.com/">
            <div className={`${classes.item} ${classes.twitterIcon}`} />
          </Link>
          <Link to="https://www.facebook.com/groups/345453382877991?locale=uk_UA">
            <div className={`${classes.item} ${classes.facebookIcon}`} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
