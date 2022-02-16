const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc Set goals
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    // Check validation
    if (!req.body.first_name) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})

// @desc update goals
// @route PUT /api/goals/:id
// @access private
const updateGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc delete goals
// @route DELETE /api/goal/:id
// @access private
const deleteGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}