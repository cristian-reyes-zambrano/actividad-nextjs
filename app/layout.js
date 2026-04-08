import './globals.css';

export const metadata = {
  title: 'Cristian Reyes | Hoja de Vida Digital',
  description: 'Portafolio digital de Cristian Fernando Reyes Zambrano, estudiante de Ingeniería de Sistemas con enfoque en UI/UX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
