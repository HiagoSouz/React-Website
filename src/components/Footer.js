import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Want to know everything about the universe? Subscribe to our Newsletter!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How are we</Link>
            <Link to='/'>Our Team</Link>
            <Link to='/'>Our Partners</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Content</h2>
            <Link to='/'>Write to our blog</Link>
            <Link to='/'>Send us a photo</Link>
            <Link to='/'>Send us a video</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/hiago.souz/?hl=pt-br'>Instagram</a>
            <a href='https://www.facebook.com/hiago.souz'>Facebook</a>
            <a href= 'https://github.com/HiagoSouz'>LinkedIn</a>
            <a href='https://www.linkedin.com/in/hiagorsouza/'>Github</a>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HRS
              <i class='fab fa-react' />
            </Link>
          </div>
          <small class='website-rights'>HRS © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/hiago.souz'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/hiago.souz/?hl=pt-br'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link'
              href= 'https://github.com/HiagoSouz'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link'
              href='https://www.linkedin.com/in/hiagorsouza/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
