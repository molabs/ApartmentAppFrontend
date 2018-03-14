Apartment App frontend based on Angular 5
========================

This frontend is used to display and edit data from a database. Communication with the database is made possible via a REST web service.

Installing
--------------

  * **git clone https://github.com/molabs/ApartmentAppFrontend** Clone Repository

  * **cd ApartmentAppFrontend/** Change directory

  * **npm install** Install application with npm.

  * **ng serve** Run the application

  * Open your Browser, enter http://localhost:4200/

Dependencies and Modules
--------------

The following modules and dependencies were used:

  * Bootstrap 4

  * HttpClientModule

  * FormsModule

  * RouterModule

Run
--------------

The following commands can be used for building / execution:

  * **npm start** Builds the application and starts a Webserver

  * **npm build** Builds the application with parameter --prod

Building the frontend, the most important steps
--------------

  * **ng new animus-frontend**

  * **ng generate component components/listApartments**

  * **ng generate component components/formApartments**

  * **ng generate service services/rest**

  * **npm install --save bootstrap@next**
