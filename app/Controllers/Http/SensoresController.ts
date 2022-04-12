// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from "mongoose"
import SensorModelo from "App/Models/Sensor"
export default class SensoresController 
{
        public async guardarMongo({request,response})
    {   
        const trigger=request.input('trigger')
        const echo=request.input('echo')  
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new SensorModelo.SensorModelo({
                "id": request.input('id'),
                "pin": [
                    trigger,
                    echo
                ],
                "tipo": request.input('tipo'),
                "clave": request.input('clave'),
            })
            response.save()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new SensorModelo.SensorModelo({
                "id": request.input('id'),
                "pin": [
                    trigger,
                    echo
                ],
                "tipo": request.input('tipo'),
                "clave": request.input('clave'),
            })
            response.save()
            return response
        }
    }
    public async verSensor({params,response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find({"id":params.id})
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find({"id":params.id})
            return response
        }
    }
    public async verSensores({response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find()
            return response
        }
    }  
}
 
