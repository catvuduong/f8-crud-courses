const Course = require('./../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] courses/:slug
    show(req, res, next) {
        // res.send("show");
        // res.send("show detail" + req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next)
    }

    //[GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[GET] courese/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/0.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    //[GET] courese/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => { res.render('courses/edit', { course: mongooseToObject(course) }) })
            .catch(next);
    }

    //[PUT] courese/:id
    update(req, res, next) {
        s
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => { res.redirect('/my-store/courses') })
            .catch(next);
    }

    //[DELETE] courese/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => { res.redirect('back') })
            .catch(next);
    }

    index(req, res, next) {
        res.render('news');
    }
}

module.exports = new CourseController();
