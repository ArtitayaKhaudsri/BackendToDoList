const {check, validationResult} = require('express-validator');

const validator = [
    check('topic').trim().not().isEmpty().withMessage('topic is required!'),
    check('title').trim(),
    check('date').trim().not().isEmpty().withMessage('date is required!'),
    check('location').trim()
]

module.exports = {
    validator
}