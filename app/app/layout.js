import 'styles/globals.css';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Footer />
    </html>
  );
}

