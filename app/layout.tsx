export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', background: '#333', color: '#fff' }}>
          <h1>Tech Dashboard</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
