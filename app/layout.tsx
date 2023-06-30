import { NavBar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cars Shop",
  description:
    "The best place to find customers in the world with the latest available Cars information ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='relative'
    >
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
