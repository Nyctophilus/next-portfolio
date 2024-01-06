import "./globals.css";

export const metadata = {
  title: "Muhammed Yousry | Portfolio",
  description: "Muhammed Youssry Fayad personal portfolio webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
