db.users.deleteMany({'_id':{'$in':inactive_users}})

//Site.deleteMany({ userUID: uid, id: { $in: [10, 2, 3, 5]}}, function(err) {})