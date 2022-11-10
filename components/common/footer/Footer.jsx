import FooterSecondary from './Footer-Secondary';
import FooterPrimary from './FooterPrimary';

export default function Footer() {
  return (
    <>
      <section className="footer-primary">
        <FooterPrimary></FooterPrimary>
      </section>

      <section className="footer-secondary text-center mt-3">
        <FooterSecondary></FooterSecondary>
      </section>
    </>
  );
}
