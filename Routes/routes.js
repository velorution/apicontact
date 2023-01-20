
// Register the route to get a new token
// In a real world scenario we would authenticate user credentials
// before creating a token, but for simplicity accessing this route
// will generate a new token that is valid for 2 minutes
server.get('/token', function(req, res){
    const token = jwt.sign({username:'ado'}, 'supersecret',{expiresIn: 120});
    res.send(token)
  })

// Register the home route that displays a welcome message
// This route can be accessed without a token
server.get('/', function(req, res){
    res.send('Welcome to our API');
  })
  
  
// Register a route that requires a valid token to view data
server.get('/api', function(req, res){
    const token = req.query.token;
    jwt.verify(token, 'supersecret', function(err, decoded){
      if(!err){
        const secrets = {'accountNumber' : '938291239','pin' : '11289','account' : 'Finance'};
        res.json(secrets);
      } else {
        res.send(err);
      }
    })
  })
  
server.post('/objet', (req, res, next) => {
      console.log(req.body);
      res.status(201).json({
          message: 'Objet créé !'
          });
        });
  
        
server.post("/contact", async (req, res, next) => {
      const { yourname, youremail, yoursubject, yourmessage } = req.body;
      try {
          await sendMail(yourname, youremail, yoursubject, yourmessage);
            
            res.send("Message Successfully Sent!");
          } catch (error) {
            res.send("Message Could not be Sent");
          }
        });
  