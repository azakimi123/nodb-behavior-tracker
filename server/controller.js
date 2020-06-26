

let behaviors = [
    {
        id: 1,
        date: 'June 26, 2020 (1:55pm)',
        place: 'Home',
        behavior: 'tantruming before doing chores'
    },
    {
        id: 2,
        date: 'June 26, 2020 (2:30pm)',
        place: 'Home',
        behavior: 'refusing to take medicine'
    },
    {
        id: 3,
        date: 'June 27, 2020 (8:15am)',
        place: 'Home',
        behavior: 'talking back'
    }
];

let id = 4;


module.exports = {
    displayBehaviors: (req, res) => {
        console.log(req.params)
        res.status(200).send(behaviors);
    }
}







