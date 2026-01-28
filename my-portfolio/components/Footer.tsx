export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Vishwa Nihar. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/vishwapendota" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/spendota" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:saivishwaniharpendota@gmail.com">Email</a>
      </div>
    </footer>
  );
}
