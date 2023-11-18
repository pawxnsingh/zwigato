# Namaste javascript!!🚀

# what are the difference between package.json and package.lock.json -->

    The ans is the package.json is the configuration of the npm and
    The package.json file is a manifest for your project. It contains metadata about your project,
    such as its name, version, description, entry point, and a list of its dependencies.
    You can create or edit this file manually, or you can use the npm init command to interactively create it.
    It primarily serves as a high-level description of your project and its dependencies.


    This file contains a complete and detailed list of all the dependencies,
    their versions, and their dependencies ("subdependencies") required for your project. It is used to lock down the specific versions of packages, ensuring that the same dependencies are installed consistently across different environments. It helps in creating a consistent and reproducible build by preventing subtle variations in the dependencies used in development and production.

# transitive Dependencies vs direct Dependencies ?

        Direct Dependencies: These are the packages explicitly listed in your project's package.json file.
        These are the dependencies your project directly relies on.

        Transitive Dependencies: These are the packages that are required by your direct dependencies.
        npm automatically installs these packages to ensure that your direct dependencies work as expected.
        Transitive dependencies can have their own transitive dependencies creating a dependency tree.

# do we need to push that node_modules into GitHub??

    and the answer is no we don't have to push that thing that are regeneratable

These bundlers play a crucial role in modern web development by facilitating code organization, optimization, and efficient delivery to web browsers, contributing to better performance, maintainability, and developer productivity.

# Bundler - Parcel(Beast) - read the parcel docs

-   Dev Environment
-   image optimization
-   local server
-   minification
-   Caching - faster build, that cache are stored in .parcel_cache
-   bundling
-   compressing
-   HMR = Hot module replacement(reflect the changes without reloading)
-   this hmr is done by file watching algorithm - written in c++
-   consistent hashing
-   code splitting
-   differencial bundling - support older browsers
-   Dignostics - beautiful error
-   Error Handling
-   https host
-   Tree Shaking - remove unused code from code
-   Different dev and production bundles- npx

# What is Tree Shaking?

Tree shaking is a technique used in modern JavaScript development, particularly in the context of module bundlers like Webpack, Rollup, and Parcel, to eliminate dead or unused code (i.e., code that is never executed) from the final bundled JavaScript file. The term "tree shaking" originates from the idea of "shaking" a tree to make the dead leaves fall off, leaving only the live ones. In JavaScript, it helps reduce the size of the JavaScript bundle, improving page load times and overall performance.

Here's how tree shaking works:

1. **Modular Code:** In a modular JavaScript application, you typically organize your code into separate modules, each containing functions, classes, or variables. These modules can be imported and used as needed.

2. **Static Analysis:** During the bundling process, the module bundler (e.g., Webpack) performs static code analysis to determine which parts of the code are actually used and which are not. It starts from the entry point (e.g., the main JavaScript file) and analyzes the dependencies.

3. **Marking Unused Code:** The bundler marks or tags the code that is not used or is unreachable from the entry point. This is done by analyzing import and export statements to determine which functions or variables are actually imported and used.

4. **Eliminating Unused Code:** The marked or tagged unused code is then removed from the final bundle. This is what is referred to as "tree shaking." The bundler creates a bundle that only includes the code that is actually needed for the application to run.

Tree shaking is particularly important in modern JavaScript development because it allows developers to use external libraries or modules without including unnecessary code. This reduces the size of the final JavaScript bundle, which is crucial for web performance, especially on mobile devices or in low-bandwidth situations.

Tree shaking relies on the use of ES6 modules and the `import` and `export` statements, and it works best with tools that support it, such as Webpack, Rollup, and modern JavaScript bundlers. However, for tree shaking to be effective, it's essential that the code is properly structured and that the application is designed to make use of modular JavaScript.

# What is Hot Module Replacement?

-   HMR allows developers to apply code changes and see the results in real-time without needing to manually refresh the entire web page or lose the current application state

# What is modules in script tag in javascript

-   This allows you to use features like import and export to load
-   and export functions, classes, or variables between different script files.




# Warning: Each child in a list should have a unique "key" prop.
- The warning "Each child in a list should have a unique 'key' prop" is a common warning you might encounter when working with React, 
a popular JavaScript library for building user interfaces. This warning is specific to the rendering of lists of elements in React, 
typically when using the map function to generate a list of components.In React, when you render a list of elements, 
each element in the list should have a unique key prop assigned to it. The key prop helps React efficiently update and 
re-render components in the list when changes occur, such as additions, removals, or reordering of items. 
The key prop should be a unique identifier for each item in the list.