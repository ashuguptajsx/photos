import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'YourName Photography',
  description: 'Timeless photography by [Your Name]',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}