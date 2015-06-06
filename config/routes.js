/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't mat any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might mat an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't mat either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

/*
  '/': {
    view: 'homepage'
  },
*/



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't mat any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


// Custom routes here...
    'post /api/login': {
        controller: "Auth",
        action: "login",
    },

    'get /api/logout': {
        controller: "Auth",
        action: "logout",
    },

    'get /api/login': {
        controller: "Auth",
        action: "status",
    },



    'post /api/mat/controls/pauseresume': {
        controller: "Mat",
        action: "pauseResume",
    },

    'post /api/mat/controls/points': {
        controller: "Mat",
        action: "points",
    },

    'post /api/mat/controls/penalties': {
        controller: "Mat",
        action: "penalties",
    },

    'post /api/mat/controls/changeRound': {
        controller: "Mat",
        action: "changeRound",
    },

    'post /api/mat/controls/resetTimer': {
        controller: "Mat",
        action: "resetTimer",
    },

    'post /api/mat/controls/resetMat': {
        controller: "Mat",
        action: "resetMat",
    },

    'post /api/mat/controls/soundhorn': {
        controller: "Mat",
        action: "soundhorn",
    },

    'post /api/mat/controls/registerscore': {
        controller: "Mat",
        action: "registerscore",
    },

    'post /api/mat/controls/registerturn': {
        controller: "Mat",
        action: "registerturn",
    },

    'post /api/mat/removejudge': {
        controller: "Mat",
        action: "removeJudge",
    },

    'post /api/mat/judge': {
        controller: "Mat",
        action: "registerJudge",
    },



};
