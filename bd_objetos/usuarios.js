const config = require('../config/sql_config')
const sql = require('mssql')

class ConsultasUsuario{
    
    // constructor(){}

    obtenerTabla(){
        sql.connect(config, error => {
            if(error)
                console.log(`Ha ocujido un ejoj: ${error}`)
            new sql.Request().query('SELECT * FROM dbo.USUARIOS',(error, result) => {
                if(error)
                    console.log(`Ha ocurrido un error: ${error}`)
                console.log(`resultado: ${result}`)
            })
        }) 
        //utiliza return
    }
}

module.exports = ConsultasUsuario