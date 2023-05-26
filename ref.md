https://github.com/synergy2411/ng-may-23

https://tinyurl.com/5n92vhnr

> npx tsc --init

> npm i typescript -g
> tsc --init

> package.json file
> npm init -y (to Generate Package.json file)

> npm run compile

# Angular Building Blocks

## CLASS LEVEL

- Component : @Component({})
- Directive : @Directive({})
- Service : @Injectable({})
- Pipe : @Pipe({})
- Module : @NgModule({})

## PROPERTY LEVEL

- @Input()
- @Output()
- @hostBinding()
- @ViewChild()
- @ViewChildren()
- @ContentChild()
- @Contentchildren()

## METHOD LEVEL

- @HostListener()

## PARAMETER LEVEL

- @optional
- @Inject

> to install Angular CLI Tool

- npm install @angular/cli@14 -g
- ng version
- ng new awesome-app
  > Routing - NO
  > Choose -> CSS
- cd awesome-app
- ng serve || npm start

# CLI Commands

- ng generate component users
- ng g c users

# Pure Pipe : will run on Pure changes

let fruits = ["Apple", "Banana"];

fruits.push("Kiwi); // NOT changing the reference - Impure change

fruits = ["Apple", "Banana", "Kiwi"]; // Pure Change

# to install json-server

> npm install json-server -g

> cd data

> json-server db.json --watch

# to install firebase SDK

> npm install firebase

- SPA : URL Patterns
  > HTML5 Mode (regular) : http://www.example.com/index/overview
  > Hashbang Mode (old) : http://www.example.com/index.html/!#/overview

# Routing & Navigation

- Routes : Create the Routing Config
- RouterModule : loads the component through routing config
- RouterOutlet : provides space to load the component template
- Router : enables to programmatically navigate the user
- ActivatedRoute : provide the access of activated route

- Route Parameter
- QueryString ?, key-value &

http://example.com/products/99/overview
http://example.com/products/102/overview

http://example.com/products?name=iphone14

http://www.example.com/home --> HomeComponent
http://www.example.com/product --> ProductComponent

- npm i firebase-tools -g
- firebase login
- firebase init
- firebase deploy

# Testing Terminologis

- describe() : testing suites
- it() : test spec

# Setup & Tear down

- beforeEach()
- afterEach()
- beforeAll()
- afterAll()

- @ngrx

https://tinyurl.com/mr2zm4x7
