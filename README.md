# Data-Collector-Github



https://user-images.githubusercontent.com/37331654/142827647-e311e2ed-32b0-43fd-ad28-14d759f33df2.mp4



## Description

Data-Collector-GitHub is a small frontend application implemented using React.js. User authentication is handled using Firebase Authentication and GitHub OAuth application, so the user must log in using an existing GitHub account before fetching data from APIs. The application data is managed using the Redux store. After logging in, user can choose between four menu options:

 - Your Repositories: presents user's private and public repositories: name, private/public, owner, last commit. Users can delete repositories and save changed data as .JSON files. 
 - Starred Repositories: presents user's starred repositories. Users can delete repositories and save changed data as .JSON files. 
 - Add to Starred: users can search for repositories by their title and select them as "starred" or unselect. 
 - Account: presents user's profile, profile photo, and followers. Users can update their profile and after saving changes, download it as .JSON file. 

## How to run the application?

The application is deployed on Heroku, so you can run it by clicking the link: 

[https://github-data-collector.herokuapp.com](https://github-data-collector.herokuapp.com)

The only thing you need to have is a GitHub account to log in.

## How to run the application locally?

After cloning the repository, in the project directory, you can run:

#### `npm install`
#### `npm start`
