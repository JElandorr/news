# Project News Site

Welcome to the Project News Site documentation. This platform serves as a dynamic news site where visitors can browse a wide range of topics and articles. Our news site stands out with its fully responsive design, ensuring a seamless user experience across various devices.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

This project is deployed using Firebase Hosting services and is accessible over the Internet. 
You can visit the live site at: 
[https://project-news-2ea55.web.app](https://project-news-2ea55.web.app).

## Database

This project uses Firebase for authentication, as well as Firestore for database management. 


## Features

### Reading Articles
- **Open Access**: All visitors have the ability to read every published article without the need for registration. Articles are displayed in reverse chronological order, from the newest to the older ones.

### User Registration and Article Management
- **User Registration**: Users can register through the User Icon located in the Header of the App.
- **User Icons**: 
  - When a user is not logged in, the icon is an outlined user icon.
  - When a user is logged in, the icon turns into a solid user icon, providing clear visual feedback regarding the user's authentication status.
- **Article Creation**: Registered users have the privilege to create new articles.
- **Article Updates**: Authors can update their existing articles to ensure that content remains current.
- **Article Deletion**: Users can delete their own articles if necessary.

### User-Specific Features
- **My Latest Articles Panel**: Located in the CreateArticle component, this panel displays the 3 most recent articles by the user for easy access and review. After an article is created, the window is automatically scrolled to the top of the page, allowing the registered user to confirm that the newly created article has been successfully added. The newly created articles can be accessed by clicking on their picture or their title.
- **MyArticles Page**: This dedicated page presents the user's articles in reverse chronological order, from the newest to the older ones.

## Responsive Design
- **Adaptive Layout**: The site's design adapts to the screen size, ensuring full feature accessibility on both desktop computers and mobile devices.
- **Mobile Activation**:
  - The mobile-responsive design is triggered when the browser window is zoomed below a resolution of 992 pixels or when accessed from a mobile device.

## Getting Started

To get started with the Project News Site, please follow the steps outlined below:

1. Visit our site and explore the diverse range of articles available.
2. To contribute with your own articles, click on the User Icon in the TopNavBar to register or log in.
3. Once registered and logged in, navigate to the CreateArticle component to begin crafting your articles.
4. Manage your articles through the MyArticles page and the My Latest Articles Panel.

Thank you for being a part of our news community. Your engagement and contributions make the Project News Site a vibrant hub for news and information.