import { obtenerGasolinerasDisponibles, obtenerStockPorTipo } from './visualizacion.js';

export function renderGasolineras(gasolineras) {
  const contenedor = document.getElementById('gasolineras-lista');
  contenedor.innerHTML = '';

  const activas = obtenerGasolinerasDisponibles(gasolineras);

  activas.forEach((gasolinera) => {
    const item = document.createElement('div');
    item.className = 'gasolinera';

    const titulo = document.createElement('h3');
    titulo.textContent = gasolinera.nombre;

    const magna = document.createElement('p');
    magna.textContent = `Magna: ${obtenerStockPorTipo(gasolinera, 'magna')} L`;

    const premium = document.createElement('p');
    premium.textContent = `Premium: ${obtenerStockPorTipo(gasolinera, 'premium')} L`;

    const diesel = document.createElement('p');
    diesel.textContent = `Diesel: ${obtenerStockPorTipo(gasolinera, 'diesel')} L`;

    item.append(titulo, magna, premium, diesel);
    contenedor.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const datos = [
    {
      nombre: 'Gasolinera 1',
      estaActiva: true,
      stock: { magna: 100, premium: 50, diesel: 25 }
    },
    {
      nombre: 'Gasolinera 2',
      estaActiva: false,
      stock: { magna: 0, premium: 0, diesel: 0 }
    }
  ];

  renderGasolineras(datos);
});