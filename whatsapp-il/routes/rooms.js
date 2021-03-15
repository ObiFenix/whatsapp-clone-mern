import { getReooms, getRoom, addRoom, editRoom, deleteRoom } from '../../service/rooms';
// import pathCtrl from 'path';

export default function(app) {
    // Whatsapp routes for messages
    app.get('/api/rooms', getReooms);              // GET      request for all items data to the database (mongo db)
    app.get('/api/rooms/:id', getRoom);            // GET      request for single item data to the database (mongo db)
    app.post('/api/rooms', addRoom);               // POST     request for creating new item data
    app.patch('/api/rooms/:id/update', editRoom);  // UPDATE   request for updating the item's data provided by the client
    app.get('/api/rooms/:id/delete', deleteRoom);  // DELETE   request for removing data of the item selected by teh client

    // Unknown Routes Handler
    // app.all("*", (req, res, next) => {                              // REDIRECT back to the front-End (client) for any bacd HTTP Request
    //     res.sendFile(pathCtrl.resolve("./eRevRestaurant/dist/eRevRestaurant/index.html"));
    // });

    // route for handling 404 requests(unavailable routes)
    app.use(function (req, res, next) {
        res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
    });
}