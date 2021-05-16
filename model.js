const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
});

const db = mongoose.connection();
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log("Hooray! We're connected to mongodb!!!");

    // Define schema for a Kitty, which has one attribute: a name with a String data type
    const kittySchema = new mongoose.Schema({
        name: String
    })

    kittySchema.methods.speak = () => {
        const greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
        console.log(greeting);
    }

    // Define a new model (which is just a class we use to construct documents)
    const Kitten = mongoose.model('Kitten', kittySchema);

    // instantiate a new Kitten named Silence
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);

    // instantiate a new Kitten named Fluffy
    const fluffy = new Kitten({ name: 'Fluffy'});
    fluffy.speak();

    // saves a specific document to the database
    fluffy.save((err, fluffy) => {
        if (err) return console.error(err);
        fluffy.speak();
    })

    // finds all documents associated with the 'Kitten' model
    Kitten.find((err, kittens) => {
        if (err) return console.error(err);
        console.log(kittens);
    })
})