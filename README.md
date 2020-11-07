SpaceX App Approch : 

Front End View:
Apply custom css files each for particular component and apply breakpoints as per the given instructions in word doc.

API: 
created "requests.js" file for the api url and filter variables.

Used Redux for store management for the data (spaceX product) and calling the Api according to the applied filters.
Actions Type : 
#1 GET_PRODUCTS :- for loading all data when page first load.
#2 FILTER_ALL :- for getting data as per filter

Component: 
#1 Product Component : "Products.js" - render all the product list first time and as per filter, called getProducts action for fetching the data list.
#2 Filter Component: "Filter.js"- for Appling filter and updating the Url as per the filter values, called filterData action.
#3 Main Component: Component Product and Filter Component.

Used Node and Express for Server Side rendering.
