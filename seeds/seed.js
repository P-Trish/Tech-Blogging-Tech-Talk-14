const sequelize = require('../config/connection');
const { User, Blogpost, Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    const blogposts = await Blogpost.bulkCreate(blogpostData, {
        returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
        returning: true,
    });


    // for (const blogpost of blogpostData) {
    //     await blogpost.create({
    //       ...blogpost,
    //       user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    //   }

      process.exit(0);
};

    seedDatabase();