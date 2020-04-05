import React, { Component } from 'react';
import {connect} from "react-redux";
import {getAllStudents} from "../../actions/studentActions";
import StudentItem from "./StudentItem";
import {Link} from "react-router-dom";
import {userGetter} from "../../utils/userGetter";

class StudentList extends Component {

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

        this.props.getAllStudents()
    }

    render() {
        const studentList = this.props.students.map(studentItem => {
            return <StudentItem studentItem={studentItem}/>
        })

        return (
            <div className="container">
                <Link to="/students/add" className="btn btn-primary">Add Student</Link>
                <ul className="list-group">
                    {studentList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.studentReducer.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllStudents: () => {dispatch(getAllStudents())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
