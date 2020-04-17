import React, { Component } from 'react';
import {connect} from "react-redux";
import {getAllClasses} from "../../actions/classActions";
import ClassItem from "./ClassItem";
import {Link} from "react-router-dom";
import {userGetter} from "../../utils/userGetter";

class ListOfClasses extends Component {

    async componentDidMount(){
        let user_id = localStorage.getItem("user_id");
        let user = await userGetter(user_id)
        this.props.getAllClasses();

        if (user.role == "student") {
            this.props.history.push(`/students/details/${user_id}`);
        }

        if (user.role == "teacher") {
            this.props.history.push(`/teachers/details/${user_id}`);
        }
    }

    render() {
        const classList = this.props.classes.map(classItem => {
            return <ClassItem classItem={classItem} key={classItem._id}/>
        })
        
        return (
            <div className="container">
                <Link to="/classes/add" className="btn btn-primary">Add Class</Link>
                <div className="list-group">
                    {classList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllClasses: () => {dispatch(getAllClasses())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfClasses);
