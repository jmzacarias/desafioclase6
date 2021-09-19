const clientes = [
    {nroCliente: 1, nombre: 'Lo de Carlitos', cuit: 'xx-xxxxxxxx-xx', domicilio: 'Curupaití 4215', pais: 'Argentina'},
    {nroCliente: 2, nombre: 'Vamo arriba', cuit: 'xx-xxxxxxxx-xx', domicilio: 'Artigas 1251', pais: 'Uruguay'},
    {nroCliente: 3, nombre: 'Ueoneando', cuit: 'xx-xxxxxxxx-xx', domicilio: 'O Higgins 96', pais: 'Chile'},
    {nroCliente: 4, nombre: 'Ferreteria el bulón', cuit: 'xx-xxxxxxxx-xx', domicilio: 'Sarmiento 132', pais: 'Argentina'}
];


let nombre = prompt('Ingresá tu nombre o el de tu empresa');
let cuit = prompt('Ingresá tu número de CUIT');
let domicilio = prompt('Ingresá tu domicilio');
let pais = prompt('Ingresá tu país');


clientes.push({nroCliente: 5, nombre, cuit, domicilio, pais});

console.log(clientes);

