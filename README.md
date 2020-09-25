## CRUD crossplatform mobile app

This project features a full crud operation capable [React Native] crossplatform app that is connected to a RESTfull [Lumen] API and a [MySQL] DB which are deployed on [AWS].

  - Full Crud
  - Online awailablity of the API
  - Responsive, easy to use design
  - Crossplatform between IOS and Android
  - Fast and LightWeight

### Challenges

>This is our first mobile and [React Native] app.
>[AWS] deployment of the full feature restfull [Lumen] backend API.
>Working synchronously and efficently on both sides felxing those fullstack muscles.
>Packing everything in a one week sprint demanded very strict planning and teamwork considering the fact that both the back-end api [Lumen] and the front-end [React Native] was new to both of us.


### Tech

Most of the technologies used for the projects:

* [React Native] - Easy to use multiplatform tech!
* [PHP] - Easy web development!
* [Laravel/lumen] - For a lightning fast microservice and much more.
* [MySQL] - Great DB from Oracle.
* [AWS] - Deployment of both of the EC2 instance Back-end API and MySQL DB.
* [node.js] - Javascript runtime enviroment.
* [Expo] - For the ease of mobile development, great tool.
* [Postman] - Every back-end developers favorite front-end.
* [PHP storm] - Best PHP IDE hands down.
* [Web storm] - Jetbrain's yet another excellent IDE.
* [Github] - duh.

### Installation
>Backend is deployed to AWS on an EC2 instance
```sh
$ cd my-app/frontend
$ npm install
$ npm start
```

### Back-end Routes

| Routes | funtionality |
| ------ | ------ |
| api/authors | [GET] showAllAuthors |
| api/authors/{author_id} | [GET] showOneAuthor |
| api/authors | [POST] createOneAuthor |
| api/authors/{author_id} | [PUT] updateAuthor |
| api/authors/{author_id} | [DELETE] deleteAuthor|
| database/migrate | [GET] migrateDatabase|



### Usage

```sh
$ expo start
```
>QR code will install the app on your device of choice

>Screen recordings of the app working:

|IOS|Android|
|---|---|
|<img src="https://media0.giphy.com/media/m4LGC1bIPJDMKb3wIO/giphy.gif"/> | <img src="https://media0.giphy.com/media/DZIWyliYHjnmpZIHx5/giphy.gif"/>|


### License
----
Created by: [Molnár Milán] & [Ferenczi Károly Viktor].
Free to use, free to download, free to modify.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React Native]: <https://reactnative.dev/>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [MySQL]: <https://www.mysql.com/>
   [Github]: <https://github.com/>
   [Bootstrap]: <https://getbootstrap.com/>
   [jQuery]: <http://jquery.com>
   [Laravel]: <https://laravel.com/>
   [Php]: <https://www.php.net/>
   [PHP storm]: <https://www.jetbrains.com/phpstorm/>
   [Laravel/lumen]: <https://lumen.laravel.com/>
   [Lumen]: <https://lumen.laravel.com/>
   [Postman]: <https://www.postman.com/>
   [Web Storm]: <https://www.jetbrains.com/webstorm/>
   [AWS]: <https://aws.amazon.com/>
   [Expo]: <https://expo.io/>
   [Molnár Milán]: <https://github.com/MilanMolnar>
   [Ferenczi Károly Viktor]: <https://github.com/viktorferenczi>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
