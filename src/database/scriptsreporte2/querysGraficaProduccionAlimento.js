export const queriesgraficaproduccionalimento = {
    getConsultaGraficaProduccionAlimento: 
    "SELECT case when SUM(vr.Gastos)  IS NULL then 0 else SUM(vr.Gastos) end Produccion_alimento from Meses m left join (select FORMAT(Fecha_compra,'MM') MES,SUM(Cantidad_alimento * Valor_alimento) Gastos FROM Reg_produccion_alimento gv where year(Fecha_compra) = @Year group by FORMAT(Fecha_compra,'MM')) vr on vr.MES = m.Mes Group by M.Mes order by M.Mes",
}