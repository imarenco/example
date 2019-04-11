# Front

##### I included several core libs

* React _- JavaScript library for building user interfaces.
* React Router _- for routing your pages_.
* Redux _- for managing application state_.
* Redux Sagas _- for redux/react bindings_.
* Axios _- for HTTP promises_.
* Material UI _- for user interface_ .

And some **other useful libs** like webpack, babel and _classnames_.

## Getting started

### install and run
```
    npm install
    npm run start
```
Starts on `http://localhost:4200`.

## Project structure


`src` 
Source code of your application.

`src/components` 
Components of the application itself, that do not belong on a particular domain. You'll find:
* Layout _- For the main app container layout.
* EmptyPage _- For showing messages on an empty page.

You can add your own application components here. 

`src/config` 
App configuration. Things like sagas, reducers, theme, routes binding belong to this folder.

`src/domain`
Here you can find data managment grouped by specific model, like "collections" or "gifs", with reducers, selectors, sagas, etc by model.


`src/pages` 
Components that are _pages_, for example the collection list page.

`src/utils` 
Useful snippets of code like errors handler, http request, etc.

`src/static` 
Static files.

`src/styles` 
You'll find a file _style.scss_ that includes the basic styles.



_Tested using NPM 6.2.0, Node v10.8.0, Git 2.19.0 over Mac OS 10.14.2.
