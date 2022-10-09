const Entry = require('./Entry');
const User = require('./User');
// const Like = require('./Like');
const Comment = require('./Comment');


User.hasMany(Entry);
Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

Entry.hasMany(Comment);
Comment.belongsTo(Entry, {
    foreignKey: 'entry_id'
});


module.exports = { User, Entry, Comment };