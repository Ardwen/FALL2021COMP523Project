# Front-end for User End

## Summary
In order to provide compatible cross-platform user interfaces, we decided to use React. Besides, to satisfy the special needs of notification from our client, we decide to use a third-party notification API. 

## Problem

Our platform should provide two different dashboards for administrator and game participants. Game administrators will have the control over games and they will be able to insert and delete questions for quiz games. Game players can use either phone, tablets, or computers to join the quiz games to earn prizes. To achieve such a goal, we need to make the app compatible across different platforms, devices, systems as well as screen sizes. 

## Constriants
Since the scope of this project is for this class, we might have limited time to work on this project. Considering the tight time constraint, it may be better for us to choose familiar technologies or technologies that would be easier to learn given our prior knowledge bases. Besides, since we aim to build a web app that is suitable to play across different platforms and devices, we will need to consider the compatibility of the technology and to make the app adaptable to different screen sizes. 

## Options

**React**
- Pro: 

  - We already have some prior knowledge in React, which would save us sometimes learning it 
  - Redux makes the application state management easier 
  - Function with virtual DOM, makes it quicker 
  - Support progressive web app
- Con: 
  - Advanced feature require the use of third-party libraries, which might adding some complexity

**Angular**
- Pro
  - Has a complete package and a lot of contributors 
  - Maybe the “biggest” framework that supports a lot of things including routing, ratte management, DOM manipulation, http request, etc. 
- Con
  - Usually has a steep learning curve 
  - Relies heavily on real DOM which requires more computational memory

**Vue**
- Pro 
  - Higher customizability, might be easier to learn than Angular or React 
  - Function with virtual DOM, makes it quicker
- Con:
  - Allows poor code, which makes it difficult to debug and test 
  - Less packages and resources


## Rationale
We decided to use React because we have prior knowledge of this framework. Considering the steep learning curve of Angular, we believe It is easier and quicker to develop with React given the time constraint. Compared to Vue, React has a neater coding style. React can also incorporate a number of third-party packages and resources. 
