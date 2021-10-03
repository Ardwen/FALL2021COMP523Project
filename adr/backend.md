# Backend Choice

## Summary

Summary - In order to store data safely and persistently, we decided to use firebase.

## Problem


We need to store both the user's personal information as well as the log data of their interaction with the quiz game. 
- For the user’s personal information, we need to make sure we will have a safe and stable database. Information security is important for us as our client wants to use that information as statistics to attract fundings and sponsors. Only a stable and secure backend would give users and sponsors a feeling of safety to provide us with the information and funding.
- Since our core function is the quiz game, which requires a large number of transactions between the frontend and backend. For each quiz question, we would need to fetch them in realtime from the database in order to push them to the player user side. Also, the result for the quiz game needs to be stored in real time to the database.

## Constriants

Since we are collecting personal information of quiz players including sensitive information of their emails and addresses, we will need to have a secure and stable platform to store data. One of our future goals is to allow thousands of people to play the quiz games at the same time, so that there might be requirements in the real-time data transactions speeds and performances. Given the time limits we have, we also need to consider the learning curve for new technologies and balance the learning time and coding time. 

## Options
We list the following technology options:

**Firebase**:

- Pros:
 Trial-tier, cost effective
 Quick and easy development
 Already implemented services and features
 Real-time database
- Cons:
 Limitation in data migration
 Limitation in handling complex queries
 Can handle less than 1 million connections

**Azure App service**:

- Pros: 
Apps can be quickly built, deployed and scaled;
Easy to follow and use;
Compatible with a number of technologies including .Net, .Net Core, Node.js, Java, Python, or PHP
Built-in CI/CD integration
- Cons:
Require azure subscription, which can be expensive
Will need to use another database service to store data, such as azure cosmo db, which may also be expensive

**AWS Amplify**:

- Pros:
Cloud service
Widely used, therefore it might be easier to get help if we encounter any problems.
- Cons:
Because the wide range of functionality, the learning curve for AWS is much slower
Free tier only for 12 month


## Rationale
We choose to use Google Firebase for backend. We mainly struggled choosing between Firebase and AWS as they both have a wide range of functionality. To begin with, the documentation is much more detailed and beginner friendly compared to its main competitor AWS. As we are new to most of these backend services, Firebase might be a better choice for us. Moreover, the cost for Firebase is much easier to calculate. It provides free tier usage for unlimited amounts of time and the pricing is straightforward. 
