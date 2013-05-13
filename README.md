# requirejs-i18n-domain
=======
## A new i18n plugin for RequireJS

### How to use
Just download the [i18n.js](https://raw.github.com/thinkkevin/requirejs-i18n-domain/master/i18n.js), and put it in the same directory as your app's main JS file.

The usage is same as RequireJS i18n plugin, see [this](http://requirejs.org/docs/api.html#i18n)

### What's new?
This new i18n plugin could get domain-specific bundles under a domain directory. Please check the `test` folder for an example of use. Assume we have two domains for the application, one is `.com` site, the other is `.co.uk` site. Then under the `nls` folder, it needs two corresponding directories be defined, by replacing `.` to `_`. Then put `color.js` and `fr-fr/color.js` under each directory. Then we get a few files like below shows:

    nls/color.js
    nls/fr-fr/color.js
    nls/_com/color.js
    nls/_com/fr-fr/color.js
    nls/_co_uk/color.js
    nls/_co_uk/fr-fr.color.js

Then in your RequireJS application, you only need to specify the dependency like:

    requrie(["i18n!nls/color"], function(color){
        console.log(color);
    })

This plugin will help you find the expected bundle file.