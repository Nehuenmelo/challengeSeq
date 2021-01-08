'use strict'

const router = require('express').Router();


const OperationController = require('../../controllers/operations');

// GET /api/operations - recupera todas las operaciones 
router.get('/', OperationController.getOperations);

// POST /api/operations - crea una operacion
router.post('/', OperationController.saveOperation);

// PUT /api/operations/4 - edita la operacion 4
router.put('/:operationId', OperationController.updateOperation);

// DELETE /api/operations/4 - borra la operacion 4
router.delete('/:operationId', OperationController.deleteOperation);

module.exports = router;