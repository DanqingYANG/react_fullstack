import React from 'react';
import { connect } from 'react-redux';
import {Con, ConnectedTaskList} from './TaskList'
//obj
export const Dashboard = ({groups}) => (
        <div>
            {/* <h2>Dashboard</h2> */}
            {groups.map(group=>(
            // <div>
	        //     {group.name}
            // </div>
            <ConnectedTaskList key={group.id} id = {group.id} name = {group.name}></ConnectedTaskList>
            ))}
        </div>
);



// const mapStateToProps = (state) => ({
//     	groups:state.groups
// })

function mapStateToProps(state){
    return {
    	groups:state.groups
    }
}
// const mapStateToProps = ({groups})=>({groups});
// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);