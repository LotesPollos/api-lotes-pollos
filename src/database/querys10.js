export const queries10 = {
    getConsultaLoteVenta: 'SELECT * FROM Lote_venta',

    crearNuevosLoteVenta: 
    "INSERT INTO Lote_venta (Id_ref_lote, Total_pollos_vendidos, Peso_total_vendido, Valor_promedio_peso, Total_venta_lote, Ganancia_bruta, Promedio_total_peso, Promedio_venta_pollo, Cantidad_ventas  ) VALUES (@Id_ref_lote, @Total_pollos_vendidos, @Peso_total_vendido, @Valor_promedio_peso, @Total_venta_lote, @Ganancia_bruta, @Promedio_total_peso, @Promedio_venta_pollo, @Cantidad_ventas)select SCOPE_IDENTITY() Id_lote_venta_total",

    getConsultaLoteVentaId:
    'SELECT * FROM Lote_venta WHERE Id_lote_venta_total = @Id',

    eliminarLoteVentaId:
    'DELETE FROM Lote_venta WHERE Id_lote_venta_total = @Id',

    getTotalLoteVenta:
    'SELECT COUNT(*) FROM Lote_venta',

    editarLoteVentaId:
    'UPDATE Lote_venta SET Id_ref_lote = @Id_ref_lote, Total_pollos_vendidos = @Total_pollos_vendidos, Peso_total_vendido = @Peso_total_vendido, Valor_promedio_peso = @Valor_promedio_peso, Total_venta_lote = @Total_venta_lote, Ganancia_bruta = @Ganancia_bruta, Promedio_total_peso = @Promedio_total_peso, Promedio_venta_pollo = @Promedio_venta_pollo, Cantidad_ventas = @Cantidad_ventas WHERE Id_lote_venta_total = @Id ',

    getConsultarLoteVentaRef:
    'SELECT Id_lote_venta_total,Id_ref_lote,Total_pollos_vendidos,Peso_total_vendido,Valor_promedio_peso,Total_venta_lote,Ganancia_bruta,Promedio_total_peso,Promedio_venta_pollo,Cantidad_ventas,SUM(gv.Cantidad * gv.Precio) gastos_ventas FROM Lote_venta left join Gastos_ventas gv on Id_ref_lote_venta = Id_lote_venta_total WHERE Id_ref_lote = @Id_ref group by Id_lote_venta_total,Id_ref_lote,Total_pollos_vendidos,Peso_total_vendido,Valor_promedio_peso,Total_venta_lote,Ganancia_bruta,Promedio_total_peso,Promedio_venta_pollo,Cantidad_ventas',

    getConsultaFechaVentaLotes:
    "select Fecha_entrada_pollos from Lote_produccion inner join Lote_venta lv on  lv.Id_ref_lote =  Lote_produccion.Id_ref_lote WHERE  Id_lote_venta_total = @Id",

    }