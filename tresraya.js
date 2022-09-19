let tabla;
let tablagan = [[-1,-1, -1]
                [-1, -1, -1]
                [-1, -1, -1]];
let turno = 1;

const crearTabla = () => {
    const rows = []

    for (let i = 0; i < 3; i++) {
        const casillas = []

        for (let j = 0; j < 3; j++) {
            casillas.push({ valor: "",
                            llena:false})
        }
        rows.push(casillas)
    }

    return rows
}

const renderizarTabla = (tabla) => {
        for (let i = 0; i < tabla.length; i++) {
            const casillas = tabla[i]
            for (let j=0; j < casillas.length; j++) {
                const butCasilla = document.getElementById(`${i}_${j}`)
                if (casilla.llena==true){
                    if (turno = 1) {
                        butCasilla.innerText = "X"
                        tablagan[i][j] = 1
                    }else {
                        butCasilla.innerText = "O"
                        tablagan [i][j] = 0
                    }
                }
            }
        }
    }

const cambiarTurno = (turno) => {
    if (turno == 1){
        turno = 2
    }
    else {
        turno = 1
    }
}

const getValue = (tabla, row, col) => {
    return tabla[row][col]
}

const revisarGanador = (tabla) => {
    ganador = ganador(tabla)
    if (ganador==1){
        console.log("Gana el jugador X")
    if (ganador==2){
        console.log("Gana el jugar O")
    }
    }
}
const casillaOnClick = (row, col) => {
        const casilla = getValue(tabla, row, col)
        casilla.llena = true
        renderizarBoard(tabla)
        revisarGanador(tabla)
        cambiarTurno(turno)
    }
    
    const main = () => {
        tabla = crearTabla() 
        renderizarTabla(tabla)
    }
    
    main()