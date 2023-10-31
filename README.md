Namaste React , Welcome to React 18 Features


#parcel
- Dev Build
- Creates a Local Server
- HMR=Hot Module Replacement -automatically refreshes the web pages
- Faster Build
- Casching -Faster Builds
- File watching algorithm written in c++
- Image Optimization
- minification 
- bundling
- Compressing
- code splitting
- consistenet hashing
- differential bundling - it gives the support of older browsers also
- gives better error handling 
- Tree Shaking - removes unused code in the file to make it faster

# Two Types of imports/exports
- default export/import
    - export default component/var
    -import component/var from '/path'

- named export when you want to export more data fields just add export infront of their declaration.
    -export name;
    -export age;
    -import {name,age} from '/path'

Question ? Can we use both named and default export together in react ?

        In React, you can use both named and default exports in your JavaScript or TypeScript modules, but it's essential to understand how they work and how to import them correctly.

        Keep in mind that the default export is not enclosed in curly braces, while named exports are enclosed in curly braces. It's important to specify the correct path to your module and use the correct syntax when importing to avoid errors.

        // MyModule.js
        const defaultExport = () => {
        // Default export code here
        };

        export const namedExport1 = () => {
        // Named export 1 code here
        };

        export const namedExport2 = () => {
        // Named export 2 code here
        };

        When importing a module with both default and named exports, you can do it like this:
            import MyModule, { namedExport1, namedExport2 } from './MyModule';

# React Hooks 
    Hooks are Normal Javascript utility Functions,there are multiple hooks availbale 
    2  most important Hooks are
    - useState()-it will create superpowerful react state variables,we need to import it as a named import
    -useEffect()     

# https://github.com/acdlite/react-fiber-architecture


#*****useState()*****
--------------------
Whenever a state variable changes/updates React will trigger a Reconciliation Cycle (Re-renders whole Component)
Incase of an input field , react will Re-render whole component on every keyPress  of input field 

# Types Of Routing in web apps
    - Client side routing - Navigating to different Components within the client side is Client side routing
    - Server side routing- making a network call and getting the data and  making the whole page refresh is server side routing
