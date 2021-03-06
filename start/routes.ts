/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
    Route.post('/guardarSensor/:request','SensoresController.guardarMongo')
    Route.get('/verSensor/:id','SensoresController.verSensor')
    Route.get('/verSensores','SensoresController.verSensores')
    Route.put('/modificarSensor/:request','SensoresController.modificar')
    Route.post('/guardarMedicion/:request','SensoresController.guardarMedicion')
    Route.get('/cambiarStatus','ServosController.cambiarStatus')
    Route.get('/obtenerStatus','ServosController.obtenerStatus')
    Route.get('/valoresSensores/:id','SensoresController.US')
    Route.delete('/borrarSensor/:id','SensoresController.borrarSensor')
    Route.get('/valoresSensoresx/:id','SensoresController.values')
    Route.get('/logout','AuthController.Logout')
}).middleware('auth:api')
Route.post('/login/:request','AuthController.Login')
Route.post('/storeUser/:request','UsuariosController.store')
Route.get('/', (ctx) => {
  ctx.response.send('hello world')
})

