import express from 'express'
import config from './config'
import usersRoutes from './routes/users.routes'
import reg_produccion_alimentoRoutes from './routes/reg_produccion_alimento.routes'
import clienteRoutes from './routes/cliente.routes'
import reg_produccion_mortalidadRoutes from './routes/reg_produccion_mortalidad.routes'
import reg_sacrificio_polloRoutes from './routes/reg_sacrificio_pollo.routes'
import gastos_produccionRoutes from './routes/gastos_produccion.routes'
import lote_produccionRoutes from './routes/lote_produccion.routes'
import lote_ventas_registroRoutes from './routes/lote_ventas_registro.routes'
import gatos_ventasRoutes from './routes/gatos_ventas.routes'
import lote_ventaRoutes from './routes/lote_venta.routes'
import produccion_ventaRoutes from './routes/produccion_venta.routes'
import estado_usuarioRoutes from './routes/estado_usuario.routes'
import lotesRoutes from './routes/lotes.routes'
import valor_unidad_medidaRoutes from './routes/valor_unidad_medida.routes'
import filtro_principalRoutes from './routes/principal/filtro.routes'
import consulta_sistema from './routes/consultas_sistema/sistema.routes'
import terminar_loteRoutes from './routes/terminar/terminarlote.routes'
import comboboxRoutes from './routes/combobox/combobox.routes'
import grafica_lote_ventaRoutes from './routes/reporte2/grafica_lote_venta.routes'
import grafica_mortalidad_totalRoutes from './routes/reporte/grafica_mortalidad_total.routes'
import gasto_totalRoutes from './routes/reporte/gasto_total.routes'
import gasto_ventasRoutes from './routes/reporte/gasto_ventas.routes'
import gasto_produccionRoutes from './routes/reporte/gasto_produccion.routes'
import lote_venta_registroRoutes from './routes/reporte/lote_venta_registro.routes'
import reg_produccion_alimentosRoutes from './routes/reporte/reg_produccion_alimentos.routes'
import conversionRoutes from './routes/reporte/conversion.routes'
import total_ventaRoutes from './routes/reporte2/total_venta.routes'
import total_gastoRoutes from './routes/reporte2/total_gastos.routes'
import total_ganancia_netaRoutes from './routes/reporte2/total_ganancia_neta.routes'
import total_pollos_sacrificadosRoutes from './routes/reporte2/total_pollos_sacrificados.routes'
import grafica_gastos_mesRoutes from './routes/reporte2/grafica_gastos_mes.routes'
import grafica_produccion_alimentoRoutes from './routes/reporte2/grafica_produccion_alimento.routes'
import grafica_sacrificio_polloRoutes from './routes/reporte2/grafica_sacrificio_pollo.routes'
import grafica_mortalidadRoutes from './routes/reporte2/grafica_mortalidad.routes'
import validacionRoutes from './routes/validacion/validacion.routes'
import indicadoresRoutes from './routes/indicadores/indicadores.routes'
import rolRoutes from './routes/rol/rol.routes'

const app= express()
const cors = require('cors')

//setting -configuracion del puerto 

app.set('port',config.port)
app.use(cors()) //todos los origenes

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(comboboxRoutes)
app.use(usersRoutes)
app.use(clienteRoutes) 
app.use(reg_produccion_alimentoRoutes) 
app.use(reg_produccion_mortalidadRoutes) 
app.use(reg_sacrificio_polloRoutes) 
app.use(gastos_produccionRoutes)
app.use(lote_produccionRoutes)
app.use(lote_ventas_registroRoutes)
app.use(gatos_ventasRoutes)
app.use(lote_ventaRoutes)
app.use(produccion_ventaRoutes)
app.use(estado_usuarioRoutes)
app.use(lotesRoutes)
app.use(valor_unidad_medidaRoutes)
app.use(filtro_principalRoutes)
app.use(consulta_sistema)
app.use(terminar_loteRoutes)
app.use(grafica_lote_ventaRoutes)
app.use(grafica_mortalidad_totalRoutes)
app.use(gasto_totalRoutes)
app.use(gasto_ventasRoutes)
app.use(gasto_produccionRoutes)
app.use(lote_venta_registroRoutes)
app.use(reg_produccion_alimentosRoutes)
app.use(conversionRoutes)
app.use(total_ventaRoutes)
app.use(total_gastoRoutes)
app.use(total_ganancia_netaRoutes)
app.use(total_pollos_sacrificadosRoutes)
app.use(grafica_gastos_mesRoutes)
app.use(grafica_produccion_alimentoRoutes)
app.use(grafica_sacrificio_polloRoutes)
app.use(grafica_mortalidadRoutes)
app.use(validacionRoutes)
app.use(indicadoresRoutes)
app.use(rolRoutes)

export default app