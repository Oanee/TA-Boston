import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track my order">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns*">
              Free Returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & tricks">
              Tips & tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">
              Loyalty programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to The Simons">
              Sign up to The Simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About US">
              About US
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Story">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title=" Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <header>
          <h1 className="footer-contact-title">
            <span>Thread Affair</span> Milano
          </h1>
        </header>

        <ul>
          <li>
            <a
              href="https://www.google.com/maps/place/Largo+Augusto,+3,+20122+Milano+MI,+Italia/@45.4634385,9.1950498,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c6a5b79f9a7d:0xd8354dbe488ab1ee!8m2!3d45.4634385!4d9.1972385"
              target="_blank"
              rel="noopener noreferrer"
              title="Our address"
            >
              Largo Augusto 3, Milano, 20122, Milano, IT
            </a>
          </li>

          <li>
            <a href="tel:+Tel: 0039 02 760 003 66" title="Call us">
              Tel: 0039 02 760 003 66
            </a>
          </li>

          <li className="footer-contact-mail">
            <a href="mailto:office@thread-affair.com" title="Our Email">
              office@thread-affair.com
            </a>
          </li>
        </ul>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+1-877-666-1840" title="Call us">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a href="/" title="Chat">
              <i className="fa-solid fa-comments"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto: office@traidaffairs.com" title="Chat">
              <i class="fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
