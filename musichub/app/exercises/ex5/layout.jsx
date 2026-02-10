import "@/app/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "TravelHub",
  description: "Descubre destinos increíbles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}