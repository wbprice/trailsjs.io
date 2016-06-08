/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the index view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.index'
  },

  /**
   * Render the documentation view
   */
  {
    method: 'GET',
    path: '/docs',
    handler: 'ViewController.documentation'
  },

  {
    method: 'GET',
    path: '/docs/{file*}',
    handler: 'ViewController.documentation'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
