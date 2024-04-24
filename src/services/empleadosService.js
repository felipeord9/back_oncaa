const { models } = require("../libs/sequelize");

const find=()=>{
    const Empleados = models.Empleado.findAll()
    return Empleados
};

const create = async(body)=>{
    const newEmpleado = await models.Empleado.create(body)
    return newEmpleado   
}

const findOne = async (id) => {
    const Empleado = await models.Empleado.findByPk(id)
  
    if(!Empleado) throw boom.notFound('Empleado no encontrado')
  
    return Empleado
}

const remove = async(id)=>{
    const Empleado = findOne(id)
    ;(await Empleado).destroy(id)
}

module.exports={
    find,
    create,
    findOne,
    remove
}