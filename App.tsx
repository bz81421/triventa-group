export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ color: "#16a34a" }}>🛒 Triventa Group</h1>

        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Inicio
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Productos
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            Planes
          </a>
        </nav>
      </header>

      <section
        style={{
          padding: "80px 50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 70,
              marginBottom: 20,
              lineHeight: 1,
            }}
          >
            TU MINI MARKET
            <br />
            <span style={{ color: "#16a34a" }}>A UN CLICK</span>
          </h2>

          <p style={{ fontSize: 22, color: "#475569" }}>
            Compra online de forma rápida y moderna.
          </p>

          <button
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                alert(
                  `Ubicación detectada:\n${position.coords.latitude}, ${position.coords.longitude}`
                );
              });
            }}
            style={{
              marginTop: 30,
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "18px 35px",
              borderRadius: 15,
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Buscar mini markets cercanos
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
          alt="market"
          style={{
            width: "100%",
            height: 500,
            objectFit: "cover",
            borderRadius: 30,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        />
      </section>
    </div>
  );
}
