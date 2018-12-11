# GUIDELINES

## Structuring Your Project

By “structure” we mean the decisions you make concerning how your project best meets its objective. In practical terms, “structure” means making clean code whose logic and dependencies are clear as well as how the files and folders are organized.

## Project structure

``` 
app/
    controllers/
        index.js
        post.js
        questionnare.js
    components/
    models/
    routes/
    templates/
    styles/
    app.js
    router.js
    index.html
config/
node_modules/
public/
tests/
vendor/
ember-cli-build.js
package.json
README.md
testem.js
```

Optionally if using ember you could also use the upcoming [module unification structure](https://github.com/emberjs/rfcs/blob/master/text/0143-module-unification.md)

### Where to get the data?

The endpoint of the API that you have to use is: `https://www.postedin.com/wp-json/wp/v2/posts/`. This is an standard WordPress API so if you want to know how to filter you just use the documentation (https://v2.wp-api.org/)


