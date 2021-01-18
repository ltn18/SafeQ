# Firebase Setup

## Table of Content
- [About](https://github.com/ltn18/SafeQ/blob/main/FirebaseSetup.md#about)
- [Technical](https://github.com/ltn18/SafeQ/blob/main/FirebaseSetup.md#technical)
  * [Initialization](https://github.com/ltn18/SafeQ/blob/main/FirebaseSetup.md#initialization)
  * [Project Setup](https://github.com/ltn18/SafeQ/blob/main/FirebaseSetup.md#project-setup)
  * [Database Setup](https://github.com/ltn18/SafeQ/blob/main/FirebaseSetup.md#database-setup)

## About
[Firebase](https://firebase.google.com/) is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.
This post is an instruction on how to set up firebase project.
While developing [SafeQ](https://github.com/ltn18/), I faced some difficulties in setting up Firebase project.
I hope that this may help you one way or another. Okay let's get to work!

## Technical
### Initialization
`firebase init`: this will initialize your firebase project\
After this, you will choose the services that firebase provides. I this project, I clicked `SPACE` on 
the services I want to utilize.
- [x] Database: Configure Firebase Realtime Database and deploy riles
- [x] Functions: Configure and deploy Cloud Functions
- [x] Hosting: Configure and deploy Firebase Hosting sites
![image](/public/firebaseSetup/firebase-init.PNG)  
> However, the possibilities are endless. Feel free to explore more services!

### Project Setup
`Use an exisitng project`: this will let firebase use the project you are developing
`abcde-f01f0 (abcde)`, which is an example of a default Firebase project for the directory
![image](/public/firebaseSetup/project-setup.PNG)  

### The following are customized for your choices on the services you picked earlier 
The outline for my project is: `Database Setup -> Functions Setup -> Hosting Setup`

### Database Setup
![image](/public/firebaseSetup/database-setup.PNG)
I will go step by step explaining what the command lines are.\
`database: ...`: Firebase will ask you whether `firebasedatabase.googleapis.com` is enabled or not. If it appears to be missing, then you will have to enable it. This task is fairly easy since you only have to click `ENTER` to enable your API.\
`Realtime Database`: If you haven't initialized Realtime Database in your project, you have to set it up by typing `y` next to `y/N`. After this, you will choose the location for your default Realtime Database instance. In this project, I will use `us-central`. You will succesfully initialize the project when you receive the message: 
`Creating your default Realtime Database instance: abcde-f01f0-default-rtdb`.\
`Firebase Realtime Database Security Rules`: This will allow you to define how your data should be structured and when your data can be read from and written to. When asked `What file should be used for Realtime Database Security Rules?`, you can type whatever name you like, but I recommend using the default `database.rules.json`.\
If you follow my guidelines, you will then be moved to the next setup if you have one.

