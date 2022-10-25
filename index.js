const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

const courses = require('./data/courses.json');
const course = require('./data/course.json');
app.use(cors());



app.get('/', (req, res) => {
    res.send('Server is setting up!');
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(course);
    }
    else {
        const choiceCourse = course.filter(n => n.course_id === id);
        res.send(choiceCourse);
    }

});
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(course);
    }
    else {
        const choiceCourse = course.filter(n => n.course_id === id);
        res.send(choiceCourse);
    }

});



app.listen(port, () => {
    console.log(`Server running on the port:${port}`);
});
