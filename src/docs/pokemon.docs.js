/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       required:
 *         - name
 *         - types
 *         - height
 *         - weight
 *         - abilities
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-generado del pokemon
 *         name:
 *           type: string
 *           description: Nombre del pokemon
 *         types:
 *           type: array
 *           items:
 *             type: string
 *           description: Tipos del pokemon
 *         height:
 *           type: number
 *           description: Altura del pokemon
 *         weight:
 *           type: number
 *           description: Peso del pokemon
 *         abilities:
 *           type: array
 *           items:
 *             type: string
 *           description: Habilidades del pokemon
 *         frontSprite:
 *           type: string
 *           description: Sprite frontal del pokemon
 *         backSprite:
 *           type: string
 *           description: Sprite posterior del pokemon
 *         officialArtwork:
 * 
 *   responses:
 *     NotFound:
 *       description: El recurso solicitado no fue encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: false
 *               message:
 *                 type: string
 *                 example: Pokemon not found
 * 
 *     ValidationError:
 *       description: Error de validación en los datos proporcionados
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: false
 *               message:
 *                 type: string
 *                 example: Validation error
 */

/**
 * @swagger
 * tags:
 *   name: Pokemon
 *   description: API para gestionar pokemon
 */

/**
 * @swagger
 * /api/pokemon:
 *   post:
 *     summary: Crear un nuevo pokemon
 *     tags: [Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pokemonName
 *             properties:
 *               pokemonName:
 *                 type: string
 *                 example: "pikachu"
 *     responses:
 *       201:
 *         description: Pokemon creado exitosamente
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/pokemon:
 *   get:
 *     summary: Obtener todos los pokemon
 *     tags: [Pokemon]
 *     responses:
 *       200:
 *         description: Lista de todos los pokemon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pokemon'
 */

/**
 * @swagger
 * /api/pokemon/{id}:
 *   get:
 *     summary: Obtener un pokemon por ID
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pokemon encontrado
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

module.exports = {
    // Este objeto vacío es necesario para que el archivo sea un módulo válido
    // La documentación será leída por swagger-jsdoc desde los comentarios
  };