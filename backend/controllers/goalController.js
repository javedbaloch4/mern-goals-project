const { response } = require('express')
const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')
const { db } = require('../models/goalModel')

const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({text: req.body.text})

    res.status(200).json(goal)
})

// @desc update goals
// @route PUT /api/goals/:id
// @access private
const updateGoals = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true})

    res.status(200).json(updatedGoal)
})

// @desc delete goals
// @route DELETE /api/goal/:id
// @access private
const deleteGoals = asyncHandler( async (req, res) => {
    // Find the user 
    const goal = await Goal.findById(req.params.id)

    // Error if not exists
    if(!goal) {
        return response(400)
        throw new Error('Goal not fond')
    }

    // Delete the user
    await goal.remove

    // Respond back
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}