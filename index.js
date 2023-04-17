const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
]

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given Id not found');
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) return res.status(400).send('Name is required with 3 characters');

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given Id not found');

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required with 3 characters');
        return;
    }
    course.name = req.body.name;
    res.send(course);
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given Id not found');

    const index = courses.indexOf(course)
    courses.splice(index, 1);

    res.send(course);
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`))

