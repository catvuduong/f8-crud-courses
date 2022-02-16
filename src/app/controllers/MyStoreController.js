const Course = require('./../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MyStoreController {
    // [GET] /mystore/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('./my-store/store-courses', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
    }
}

module.exports = new MyStoreController();
