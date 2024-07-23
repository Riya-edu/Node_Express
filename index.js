const express = require('express'); 
const app = express();
/*This variable app represents the api we are building, its value is the 
import of the app function
*/
const PORT = 8080;

app.use(express.json())

app.get('/list', (req, res) => {
    res.status(200).send({
        name: 'tshirt',
        category: 'clothing'
    });
});
/* here '/add' is the route to access the api
 * the arrow function is the handler, it is run when the route is requested
 * the function itself provides access to 2 different objects => request(incoming data) 
    & response(outgoing data) the most imp thing it does is to allow us to send a response 
    back to the client
 * after sending a status code we can send a data payload with it if we pass a js object
    as the arguement then it will send that data back as json as default 

*/

app.post('/list/:id', (req, res) => {
    const { id } = req.params;
    /*
    req.params: This object contains route parameters. 
    In this case, id is extracted from the URL (e.g., /list/123).
    */
    const { name } = req.body;
    /*
    req.body: This object contains the data sent in the body of the request. 
    Here, name is extracted from the request body (e.g., { "name": "xyz" }).
    */
    
    if(!name) {
        res.status(418).send({ message: ' Name is required!'})
    }

    res.send({
        list: `Name: ${name} and ID: ${id}`,
        /*
        list is just a label for the data you are returning. 
        It could be named anything, like info, data, description, etc.
        */
    });
});

app.listen(
    PORT, () =>{
        console.log(`Server is live on http://localhost:${PORT}`)
});
