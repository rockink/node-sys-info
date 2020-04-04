Description 
--------
This repo is solely for showing the power of Kubernetes. 

How to run? 
--------
Since this is a node app, you can run with this
`npm start`


How to run in Docker? 
----------
You can run the image that is currently uploaded in DockerHub using this. You will need to have Docker installed. 
`docker run -p 3000:3000 -d rockink/node-sys-info`


How to create the image? 
-------
You can actually containerize this in your local docker and even upload in the DockerHub. 

**To create an image:**

`docker build -t <dockerHubId>/node-sys-info:v1 .`

**To upload the image:"
`docker push <dockerHubId>/node-sys-info`

