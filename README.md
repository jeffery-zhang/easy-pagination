# easy-pagination

A simple pagination plugin, develop by pure native js and es2015, does not depend on any frameworks

## Installation

```
 $ npm i --save easy-pagination
```

## Getting started
``` html
 <body>
  <div id="pagination"></div>
 </body>
```

``` javascript
 import EasyPagination from 'easy-pagination'

 new EasyPagination(document.getElementById('pagination'), {
    totalPage: 10,// required
    range: 5, // default 5
    currentPage: 1, // default 1
    callback: page => {
      console.log(page)
    },
    prevText: '<', // default '<'
    nextText: '>', // default '>'
 })
```
