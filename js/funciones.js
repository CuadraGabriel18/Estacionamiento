const enviarDatos = () => {
    //Datos
    let Cantidad = parseInt( document.getElementsByName('txtCantidad')[0].value);
    let NombreC = document.getElementsByName('txtNomClien')[0].value;
    let Marca = document.getElementsByName('txtNomMarca')[0].value;

    if (isNaN(Cantidad) || Cantidad <= 0) {
        alert('Ingrese una cantidad válida de Horas De Estacionamiento');
        return;
    }
    let pagoTotal = 0;

    if(Cantidad <=2){
        pagoTotal = Cantidad * 10;
    } else if (Cantidad <=5) {
        pagoTotal = 2 * 10 + (Cantidad - 2) * 7;
    } else if (Cantidad <= 10) {
        pagoTotal = 2 * 10 + 3 * 7 + (Cantidad - 5) * 5;
    } else {
        pagoTotal = 2 * 10 + 3 * 7 + 5 * 5 + (Cantidad - 10) * 3;
    }
 
   
    alert(`Nombre del Cliente: ${NombreC}\nMarca Del Automovil: ${Marca}\nCantidad: ${Cantidad}\nTotal a Pagar: $${pagoTotal}
           `);
  }