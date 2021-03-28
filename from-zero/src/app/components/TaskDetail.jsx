import React from 'react'
import { connect } from 'react-redux'

export const TaskDetail = ({
    id,
    comments,
    task,
    isComplete
}) => {
    return (
        <div>
            Task Detail
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
    
}

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail)
