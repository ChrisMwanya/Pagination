# PAGINATION

Paginate your data easily

## Installation

### npm 

npm install pagination_node

## Usage 

const pagination = require('pagination_node')

pagination.paginate(array,params) // return an object

### Documentation

array : array of data you want to paginate
        it can be an array of string or object

params : a object with 2 properties 

{
    page : specify the page you want to display. by default it displays first page

    limit : the number of occurrences per page. by default it displays 10
}

#### Example

const array = [{name :"Franck"},{name :"Alice"},{name :"Arthur"},{name :"Auréole"},{name :"Albert"},{name :"Tony"},{name :"Blaise"}]

const params = {
    page:2,
    limit:3
}