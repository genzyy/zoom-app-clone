<div align='center'>
    <h1>Zoom Clone using WebRTC and PeerJS</h1>
</div>

## Dependencies ##

- [express]
- [ejs]
- [nodemon]
- [peerjs]
- [socket.io]
- [uuid]
center
## File System ##

`server.js`: This file will contain all the dependencies and will be the main file for connecting all the files and rendering the ejs file for the homepage.

`views/room.ejs`: This file is rendered when the user directs to `/` route and will create a unique session id and unique user id for the user which connected first or is the host.

`public/script.js`: This file is connected to the room.ejs and ultimately to the server.js file handling the socket calls for creating closing and removing the user from the session.

You can view all the dependencies in the `package.json` file and the required version of the dependencies.

## How it works ##

So, when a user directs to / route a unique uid is created for only that session. This uid can be shared to other people when the user wants them to join his/her session. Various different session can be created at once and multiple sessions can be created.
The user can also create their own unique id by editing the url and adding desired unique id after / at the end.