// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Velvet Nights — Inner Circle Lounge",
  description: "Where the night never ends, and neither does the connection."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background layers */}
        <div className="bg-gradient" />
        <div className="bg-velvet" />
        <div className="bg-grain" />

        <main className="shell">{children}</main>
      </body>
    </html>
  );
}
