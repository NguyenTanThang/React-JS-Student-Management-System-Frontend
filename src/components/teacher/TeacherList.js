import React, { Component } from 'react';
import {connect} from "react-redux";
import {getAllTeachers} from "../../actions/teacherActions";
import TeacherItem from "./TeacherItem";
import {Link} from "react-router-dom";
import {userGetter} from "../../utils/userGetter";

class TeacherList extends Component {

    async componentDidMount(){
        let user_id = localStorage.getItem("user_id");
        let user = await userGetter(user_id)

        if (user == null || user.role != "admin"){
            this.props.history.push("/");
        }

        if (user.role == "student") {
            this.props.history.push(`/students/details/${user_id}`);
        }

        if (user.role == "teacher") {
            this.props.history.push(`/teachers/details/${user_id}`);
        }

        this.props.getAllTeachers()
    }

    render() {
        const teacherList = this.props.teachers.map(teacherItem => {
            return <TeacherItem key={teacherItem._id} teacherItem={teacherItem}/>
        })

        return (
            <div className="container">
                <Link to="/teachers/add" className="btn btn-primary">Add Teacher</Link>
                <ul className="list-group">
                    {teacherList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teacherReducer.teachers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeachers: () => {dispatch(getAllTeachers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
