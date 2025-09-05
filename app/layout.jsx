export const metadata = {
  title: "Velvet Nights — Inner Circle Lounge",
  description: "Where the night never ends, and neither does the connection."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
