

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
        // console.log(req.params)
        res.status(200).send(behaviors);
    },

    deleteBehavior: (req, res) => {
        const {id} = req.params;

        const index = behaviors.findIndex(e => e.id === +id);
        behaviors.splice(index , 1);
        res.status(200).send(behaviors);
    },

    postBehavior: (req, res) => {
        console.log(req.body)


        req.body.id = id;
        id++

        behaviors.push(req.body);
        res.status(200).send(behaviors);
    },

    editBehavior: (req, res) => {
        const {id} = req.params;
        const {date} = req.body;
        const {place} = req.body;
        const {behavior} =req.body;


        const index = behaviors.findIndex(e => e.id === +id);
        behaviors[index].date = date;
        behaviors[index].place = place;
        behaviors[index].behavior = behavior;

        res.status(200).send(behaviors);

    }
}







