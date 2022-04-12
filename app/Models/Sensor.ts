import {Schema,model} from 'mongoose'
export default class SensorModelo
{
    static sensorschema=new Schema({
    id:Number,
    pin:[Number],
    tipo:String,
    clave:String
  },{
    versionKey:false
  });
  static SensorModelo:any=model('Sensor',this.sensorschema)  
}