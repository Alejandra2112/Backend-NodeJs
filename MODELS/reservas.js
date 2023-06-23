const {Schema, model} = require ('mongoose');

const ReservaSchema = Schema({
    tipoEspacio :{
        type: String,
        required: [true, 'El tipo de espacio es obligatorio'],
        enum: ['Zona humeda', 'Salon Social', 'Parqueadero']
    },
    espacio: {
        type: String,
        required: [true, 'El espacio es obligatorio'],
        enum: ['Piscina', 'Sauna','Salon Social', 'Parqueadero']
    },
    propietario:{
        type: String,
        required:[true, 'El nombre de propietario es obligatorio']
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    fechaFinal: {
        type: Date,
        required: [true, 'La fecha final es obligatoria'],
        validate: {
          validator: function (value) {
            const fechaActual = new Date();
            return value >= fechaActual;
          },
          message: 'La fecha de reserva debe ser igual o posterior a la fecha actual'
        }
      },      
    vehiculo : {
        type: String,
    },
    parqueadero: {
        type: String 
    },
    capacidad: {
        type:Number
    }
      

})

module.exports = model('Reservas', ReservaSchema)