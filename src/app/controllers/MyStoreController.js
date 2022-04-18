const Course = require('./../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MyStoreController {
    // [GET] /mystore/courses
    storeCourses(req, res, next) {
        let courseQuery = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        };

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('./my-store/store-courses', { courses: multipleMongooseToObject(courses), deleteCount })
            })
            .catch(next);

        // Course.find({})
        //     .then(courses => {
        //         res.render('./my-store/store-courses', { courses: multipleMongooseToObject(courses) });
        //     })
        //     .catch(next);

        // Course.countDocumentsDeleted()
        //     .then(deleteCount => {

        //     })
        //     .catch(next);
    }

    // [GET] /mystore/recyle/courses
    recyleCourse(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('./my-store/recycle-course', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
    }
}

module.exports = new MyStoreController();
