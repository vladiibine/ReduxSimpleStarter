# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

Finished lecture 66
openweathermap.org api key: ec60443bc5f9e8d1af8a9d0834ee8b46
http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=ec60443bc5f9e8d1af8a9d0834ee8b46

react-sparklines AVOID 1.7!!
redux-promisem with its middleware
    With the help of its middleware 
        `import ReduxPromise from 'redux-promise';`
     and then 
        `const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);` 
    it stops actions who receive promises in the payload, and RESENDS the actions with the fulfilled promise".. pretty nice