/**
 * @swagger
 * tags:
 *  name: Category
 *  description: Category module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   name
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string
 *                  slug:
 *                      type: string
 *                  icon:
 *                      type: string
 *                  parent:
 *                      type: string                 
 */

/**
 * @swagger
 * /category:
 *  post:
 *      summary: category and module and exports
 *      tags:
 *          -   Category
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /category:
 *  get:
 *      summary: get category and module exports
 *      tags:
 *          -   Category
 *      responses:
 *          200:
 *              description: successfully
 */