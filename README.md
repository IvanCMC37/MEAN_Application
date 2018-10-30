# MEAN Stack application

Building a web application with M(MongoDB) E(Express) A(AngularJS) N(Node)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- A fully setup local MongoDB server as well as one on AWS EC2, download and Install MongoDB locally from [here](https://www.mongodb.com/)
- Node.js, download from [here](https://nodejs.org/en/)


### Installing

A step by step series of examples that tell you how to get a development env running

- Clone the project

```
git clone https://github.com/IvanCMC37/MEAN_Application.git
```

- Go to floder and install dependencies

```
npm install
```

## Running the tests

Karma is used for unit testing, to run:

```
karma start
```

## Deployment

- AWS EC2 was used in this project, choose bitnami MEAN image and git clone the project to apps
- To run the project after quitting Putty
```
forever start server.js
```

## Authors

* **Ivan Chan**  - [IvanCMC37](https://github.com/IvanCMC37)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration - MEAN Stack tutorial from [Pluralsight](https://app.pluralsight.com/library/)
