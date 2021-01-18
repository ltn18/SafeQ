# Firebase Setup
## About
Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.
This post is an instruction on how to set up firebase project.
While developing [SafeQ](https://github.com/ltn18/), I faced some difficulties in setting up Firebase project.
I hope that this may help you one way or another. Okay let's get to work!

## Technical
### Initialization
`firebase init`: this will initialize your firebase project.\
After this, you will choose the services that firebase provides. I this project, I clicked `SPACE` on 
the services I want to utilize.
- [x] Database: Configure Firebase Realtime Database and deploy riles
- [x] Functions: Configure and deploy Cloud Functions
- [x] Hosting: Configure and deploy Firebase Hosting sites
![image](/public/firebaseSetup/firebase-init.PNG)  
> However, the possibilities are endless. Feel free to explore more services!

### Project Setup
`Use an exisitng project`: this will let firebase use the project you are developing
`abcde-f01f0 (abcde)`: this is an example of a default Firebase project for the directory
![image](/public/firebaseSetup/project-setup.PNG)  

### The following are customized for your choices on the services you picked earlier. 
The outline for my project is: `Database Setup -> Functions Setup -> Hosting Setup`

### Database Setup
