# prodigiousFETest
FE test, widgets implementation

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## Solution Explanation

It is a WEB App based on Vue framework, SASS pre-processor and webpack.
CSS was defined with BEM method

The Web App uses veu i18n to implement internationalization

As a vue single file component, every translation is located in the section <i18n></i18n>. there are two different translations for keys, En and Es (english and Español).

To add tabs it is used Vue tabs

To add charts it is used vue-charts

it is intended to simplify the development and use JS lib components available

Vue App contains a basic layout with a main section with a Header, Footer, and Content space.

widgets are distributed in the content space, but they could be located everywhere as a new tag <widget>

in addition it was added a section to change the language. (to improve the functionality could vuex de added and keep a context)

there is data folder with all .json files with the data consumed by vue components. it was not implemented a data access layer due to the simplicity to access json data.

All logic for it is located in the created() or mounted() life cycle methods in the components.

## Selection  

the 4 widgets selected represents a common web component

* A nav Menu,

* A Form

* A chart

* A tabs basic functionality

* A profile images component

The main intention to select them was to implement the widest kind of components, trying to reach a representative set of components.
