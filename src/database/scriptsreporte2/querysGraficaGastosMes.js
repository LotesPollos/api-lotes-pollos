export const queriesgraficagastosmes = {
    getConsultaGraficaGastosMes: 
"SELECT case when SUM(vr.Gastos)  IS NULL then 0 else SUM(vr.Gastos) end Gastos_Mes from Meses m left join (select FORMAT(Fecha_gasto,'MM') MES,SUM(Cantidad * Precio) Gastos FROM Gastos_ventas gv where year(Fecha_gasto) = @Year group by FORMAT(Fecha_gasto,'MM') Union all select FORMAT(Fecha_gasto,'MM') MES,SUM(Cantidad * Precio) Gastos FROM Gastos_produccion gp where year(Fecha_gasto) = @Year group by FORMAT(Fecha_gasto,'MM')) vr on vr.MES = m.Mes Group by M.Mes order by M.Mes",
}