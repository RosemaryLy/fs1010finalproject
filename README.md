# FS1010FinalProject

In this project, I am connecting a node.js/Express backend with a React Frontend. 
The goal of this project is to be able to send Form Data from React and have it update a JSON file. 

I also installed concurrently as a npm package so that the server and client can be run together within one terminal. 

All you need to do is `$npm run dev` to start both front and back end. 

This type of architecture is fine if you're the only one who's working on the project and when it's a fairly basic and simple, but not the best way to work for the following reason:

 Maintainability - when the application is basic and small, it's easy to keep track of what needs to be fixed whether it be from the front or back. However, when the application is robust you can easily get lost as to which file/directory you are in. 

 -What if you are working with multiple people and need to colloborate? Let's say one person is in charge of the front and another is in charge of the back, it would make more sense to seperate the front and back so that each person can solely work on thir part without being lost. 
