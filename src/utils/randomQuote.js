const quotes = [
  {
    phrase: 'Cumple todas tus promesas, en especial las hechas a ti mismo.',
    author: 'David Harold Fink',
  },
  {
    phrase: 'Si siempre has hecho lo mismo, siempre obtendrás lo mismo que ya has recibido',
    author: 'Anónimo',
  },
  {
    phrase: 'Todos los hombres deben tropezar con frecuencia para llegar a la verdad.',
    author: 'Og Mandino',
  },
  {
    phrase: '¿Y tu con que sueñas?',
    author: 'Wanna',
  },
  {
    phrase: 'Libre no significa Gratis.',
    author: 'Richard Stallman',
  },
];

/**
 * Return a random quote
 * @returns {{phrase, author}}
 */
export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
