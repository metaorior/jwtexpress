module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("properties", {
            ownerID: {
                type: Sequelize.INTEGER,
            },
        heroName: {
            type: Sequelize.STRING,
            },
            hero_stats: {
            type: Sequelize.JSON,
            },
            game_token: {
            type: Sequelize.STRING,
            },            
            timestamps: false
            });
    return Property;
    };