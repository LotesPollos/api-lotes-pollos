export const queries9 = {
    getConsultaGastosVentas: 'SELECT * FROM Gastos_ventas',

    crearNuevosGastosVentas: 
    "INSERT INTO Gastos_ventas (Id_ref_lote_venta, Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto ) VALUES (@Id_ref_lote_venta, @Gasto_creado, @Precio, @Cantidad, @Descripcion_gasto, @Fecha_gasto)",

    getConsultaGastosVentasId:
    'SELECT * FROM Gastos_ventas WHERE Id_gastos_venta = @Id',

    eliminarGastosVentasId:
    'DELETE FROM Gastos_ventas WHERE Id_gastos_venta = @Id',

    getTotalGastosVentas:
    'SELECT COUNT(*) FROM Gastos_ventas',

    editarGastosVentasId:
    'UPDATE Gastos_ventas SET Id_ref_lote_venta = @Id_ref_lote_venta, Gasto_creado = @Gasto_creado, Precio = @Precio, Cantidad = @Cantidad,  Descripcion_gasto = @Descripcion_gasto, Fecha_gasto = @Fecha_gasto  WHERE Id_gastos_venta = @Id ',

    getConsultaGastosVentasRef:
    'SELECT * FROM Gastos_ventas WHERE Id_ref_lote_venta = @Id_ref',

    }