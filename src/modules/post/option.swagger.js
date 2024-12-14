/**
 * @swagger
 * tags:
 *  name: Option
 *  description: Category option module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateOption:
 *              type: object
 *              required:
 *                  -   title
 *                  -   type
 *                  -   key
 *              properties:
 *                  title:
 *                      type: string
 *                  key:
 *                      type: string
 *                  category:
 *                      type: string
 *                  guid:
 *                      type: string
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          -   array
 *                          -   boolean
 *                  enum:
 *                      type: array
 *                      items:
 *                          type: string
 */

/**
 * @swagger
 * /option:
 *  post:
 *      summary: option category and module and exports
 *      tags:
 *          -   Option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *      responses:
 *          201:
 *              description: created option
 */

/**
 * @swagger
 * /option/by-category/{categoryId}:
 *  get:
 *      summary: get option by category in Id 
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *          -   name: categoryId
 *          -   type: string
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /option/{id}:
 *  get:
 *      summary: get option by id 
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *          -   name: id
 *          -   type: string
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /option/:
 *  get:
 *      summary: get all option 
 *      tags:
 *          -   Option
 *      responses:
 *          200:
 *              description: successfully
 */