export const queriesgraficaloteventa = {
    getConsultaGraficaLoteVenta: 
    "select  case when SUM(sumat.Total_venta)  IS NULL then 0 else SUM(sumat.Total_venta) end Venta from Meses ME  LEFT JOIN (select lvr.MES, Total_venta from Lotes inner join Lote_venta on Id_ref_lote = Id_lote inner join (select  Id_ref_lote_venta Id_ref_lote_venta, FORMAT(Fecha_venta,'MM') MES, SUM(Total_venta) Total_venta FROM Lote_ventas_registro   WHERE  FORMAT(Fecha_venta,'yyyy') =@Year  GROUP BY Id_ref_lote_venta, FORMAT(Fecha_venta,'MM') )lvr on lvr.Id_ref_lote_venta = Id_lote_venta_total and Estado_lote = 'Terminado') AS sumat on (sumat.MES = ME.Mes) group by ME.Mes ORDER BY ME.Mes",
    
}

