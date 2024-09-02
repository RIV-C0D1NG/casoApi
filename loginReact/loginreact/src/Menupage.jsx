import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const styles = {
  body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
  },
  header: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 0',
  },
  nav: {
      listStyleType: 'none',
      padding: 0,
  },
  navItem: {
      display: 'inline',
      marginRight: '20px',
  },
  navLink: {
      color: 'white',
      textDecoration: 'none',
  },
  container: {
      width: '80%',
      margin: 'auto',
  },
  product: {
      border: '1px solid #ddd',
      padding: '10px',
      margin: '10px',
      display: 'inline-block',
      width: '200px',
  },
  footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      position: 'fixed',
      bottom: 0,
      width: '100%',
  }
};

function Menupag() {
  return (
  <>
   <div style={styles.body}>
            <header style={styles.header}>
                <div style={styles.container}>
                    <h1>Mi Tienda en Línea</h1>
                    <nav>
                        {/*secciones de la pagina  */}
                        {/*aun no estan habilitadas*/}
                        <ul style={styles.nav}>
                            <li style={styles.navItem}><a href="index.jsp" style={styles.navLink}>Inicio</a></li>
                            <li style={styles.navItem}><a href="login.jsp" style={styles.navLink}>Iniciar Sesión</a></li>
                            <li style={styles.navItem}><a href="carrito.jsp" style={styles.navLink}>Carrito</a></li>
                            <li style={styles.navItem}><a href="ayuda.jsp" style={styles.navLink}>Ayuda</a></li>
                        </ul>
                    </nav>
                    <form action="/buscar" method="get">
                        <input type="text" name="q" placeholder="Buscar productos..." />
                        <input type="submit" value="Buscar" />
                    </form>
                </div>
            </header>

            <main style={styles.container}>
                <section id="destacados">
                    <h2>Productos Destacados</h2>
                    {/* productos destacados */}
                </section>

                <section id="productos">
                    <h2>Nuestros Productos</h2>
                    {/* Traer las imágenes desde BD */}
                    <div style={styles.product}>
                        <h3>Producto 1</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div style={styles.product}>
                        <h3>Producto 2</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div style={styles.product}>
                        <h3>Producto 3</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div style={styles.product}>
                        <h3>Producto 4</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div style={styles.product}>
                        <h3>Producto 5</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div style={styles.product}>
                        <h3>Producto 6</h3>
                        <p>Descripción del producto </p>
                        <p>Precio: $XX.XX</p>
                        <button>Agregar al carrito</button>
                    </div>
                    {/* más productos */}
                </section>
            </main>
            <footer style={styles.footer}>
                <p>&copy; noCopiright 2024 -- <a href='https://www.instagram.com/riv_m_gg_x?igsh=d3RicXZxbDNnc3o4'>jhosmandev</a> </p>
            </footer>
        </div>  
  </>
  )
}

export default Menupag
