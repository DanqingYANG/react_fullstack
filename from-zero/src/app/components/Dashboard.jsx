import React from 'react'
import { connect } from 'react-redux'

export const Dashboard = ({groups}) => {
    return (
        <div>
            <h2>Dashboard</h2>
            {/* {groups.map(group=>(
            <div>
	            {group.name}
            </div>))} */}
        </div>
    )
}



const mapStateToProps = (state) => ({
    	groups:state.groups

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)