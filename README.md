# MaistoreMaistore

This is a single page application, written in angular 4, that connects people with workers for home repairs.

## Starting the application

Go to the the main directory and type `ng serve`. By default this will make the application available on port 4200. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Application structure

The application is logically divided in directories and modules. Only the items in the app folder are described here as the others are standard angular files.

### Directives

Here are where the directives can be found

- `directives.module.ts` - This file contains and exports the directives. Import this module in the module where you need to use a directive from here.
- `picture-bring-to-front.directive.ts` - This directive puts a picture, decorated with it, to the top of the window and enlarges it. It doesn't have any effect when applied to non `img` tag.

### Footer

Here is the footer component. It puts a footer on the whole page that is visible from the whole site.

### Header

Here is the header component. It puts a header on the site and contains the navigation. It shows different items depending on whether a user or a worker is logged. 

### Helpers

Here are functions that help with some common code. Currently there is only one helper that I think is not in use.

### Models

The models for the data

### Pipes

Contains the pipes contained in the application. The `pipes.module.ts` module exports all the pipes. If a pipe from here is needed, import this module in the module that needs the pipe.

- `keys` pipe - this pipe takes an object and returns a list of key value pairs. Needed for traversing objects (a shame that angular doesn't seem to have such a feature built in).
- `rating` pipe - this pipe calculates the average rating (of either worker or a worker's project) and returns it in a hardcoded format that looks like `3.4 of 5 (331 ratings)`

### Public

Here are all the publically acessible pages. They are hierarchically laid and the module itself loads a child rootes.

### Private-worker

Here are all the privately acessible pages for the logged worker. They are hierarchically laid and the module itself loads a child rootes.

### root-routing

The root routes are in this module. Also the access guards for the private worker routes are here

### services

All the services are here

#### data 

Here are the data access services. Every collection has one service. The database used is firebase. 

#### guard

Here are the route guard services used by the root router. Only  the worker guard service is currently in use.

## Firebase database

This application uses a firebase database. The firebase setup can be found in `environment/environment.ts` or `environment/environment.prod.ts` for production.

- `users` - this collection contains all the registered users with their firebase uid, type (worker or normal user) and name.
- `completedProjects` - contains the completed worker projects with information about their rating, worker, pictures
- `competencies` - contains all the competencies. Currently this table cannot be edited through the application
- `workers` - contains the workers registered and the information about them

