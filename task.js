module.exports = (sequelize, type) => {
    return sequelize.define('tasks', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremwnt: true
        },
        description: type.STRING,
        done : type.BOOLEAN
    })
}