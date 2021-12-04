let turnos = +prompt("Cuantas veces quieres jugar?");

for (let i = 0; i < turnos; i++) {
  let jugadausuario = +prompt(
    "Indique su jugada: 1:PIEDRA - 2:PAPEL - 3:TIJERAS"
  );

  if (jugadausuario != 1 && jugadausuario != 2 && jugadausuario != 3) {
    i--;
    alert("Introduce una Jugada Valida");
    console.log("Jugada no valida");
    continue;
  }

  let jugadaPC = Math.floor(Math.random() * 3) + 1;

  //Visualizacion de jugadas
  console.log("(1)=PIEDRA - (2)=PAPEL - (3)-TIJERAS");
  console.log("Jugada user:", jugadausuario, "Jugada Pc:", jugadaPC);

  //Gana el usuario

  let usuarioganador = false;
  if (jugadausuario === 1 && jugadaPC === 3) UsuarioGana = true;
  if (jugadausuario === 2 && jugadaPC === 1) UsuarioGana = true;
  if (jugadausuario === 3 && jugadaPC == 2) Usuariogana = true;
  if (usuarioganador) console.log("Usted gano");
     userWins = false;

  //empate

  if (!(jugadausuario === jugadaPC) && !usuarioganador)
    console.log("Usted perdio contra la pc");

  //gana la pc

  if (jugadausuario === jugadaPC) console.log("Empato contra la pc");

 
}
