class Turno{

    #turnoActual
    #simboloJuagadorUno
    #simboloJugadorDos
    constructor(
        _quienInicia,
        _simboloJuagadorUno,
        _simobloJuagadorDos
    ){
        this.#turnoActual = _quienInicia
        this.#simboloJuagadorUno = _simboloJuagadorUno
        this.#simboloJugadorDos = _simobloJuagadorDos
    }

    getTruno(){
        /* Deberia devover el simbolo del jugador al que corresponde el turno acutaul y pasar de turno. Osea cambiar de simbolo. */
    }

    #pasarDeTurno(){
        /* Deberia cambiar el simobolo del jugador. Si esta jugando el jugador 2, el atributo turnoActual deberia pasar a valer el simbolo del jugador 1 y biseversa. */
    }

}