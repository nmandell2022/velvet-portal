import "./globals.css";

export const metadata = {
  title: "Velvet Nights — Inner Circle Lounge",
  description: "Where the night never ends, and neither does the connection."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Premium typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Layered sensual background */}
        <div className="bg-gradient" />
        <div className="bg-velvet" />
        <div className="bg-aurora" />
        <div className="bg-grain" />
        <div className="bg-vignette" />
        <main className="shell">{children}</main>
      </body>
    </html>
  );
}
