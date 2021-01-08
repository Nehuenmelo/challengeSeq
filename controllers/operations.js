'use strict'

const { Operation } = require('../db');
/* const { Op } = require('sequelize/types'); */

var controller = {

    // GET /api/operations - recupera todas las operaciones 
    getOperations: async (req, res) => {
        const operations = await Operation.findAll();
        res.json(operations);
    },

    // POST /api/operations - crea una operacion
    saveOperation: async (req, res) => {
        const operation = await Operation.create(req.body);
        res.json(operation);
    },

    // PUT /api/operations/4 - edita la operacion 4
    updateOperation: async (req, res) => {
        await Operation.update(req.body, {
            //filtro que queremos hacer sobre los datos de la tabla(cual quiero modificar)
            where: { id: req.params.operationId }
        });
        req.json({success: 'Se ha modificado'});
    },

    // DELETE /api/operations/4 - borra la operacion 4
    deleteOperation: async (req, res) => {
        await Operation.destroy({
            where: { id: req.params.operationId }
        });
        res.json({ success: 'Se ha borrado correctamente la operacion'});
    }

}

module.exports = controller;