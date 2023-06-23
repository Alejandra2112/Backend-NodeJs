const {Schema, model} = require ('mongoose');

const RolSchema = Schema({
    nombreRol:{
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['Administrador', 'Vigilante', 'Residente']
    },
    descripcionRol: {
        type: String,
        required: [true, 'La descripción es obligatorio']
    },
    permisos:{
        type: Array,
        required:[true, 'Debes seleccionar al menos un permiso']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
      }

})

module.exports = model('Roles', RolSchema)