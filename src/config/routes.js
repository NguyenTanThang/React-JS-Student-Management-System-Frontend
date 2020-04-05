const MAIN_PROXY_URL = "https://node-js-sms-backend-123.herokuapp.com";

export const allStudentsURL = `${MAIN_PROXY_URL}/students`;
export const getStudentsByNameURL = (student_name) => {
    return `${MAIN_PROXY_URL}/students?student_name=${student_name}`
}
export const getStudentByIDURL = (student_id) => {
    return `${MAIN_PROXY_URL}/students/${student_id}`
}
export const getStudentByClassNameURL = (class_name) => {
    return `${MAIN_PROXY_URL}/students/class_name/${class_name}`
}
export const addStudentURL = `${MAIN_PROXY_URL}/students/add`;
export const getEditStudentURL = (student_id) => {
    return `${MAIN_PROXY_URL}/students/edit/${student_id}`
}
export const getDeleteStudentURL = (student_id) => {
    return `${MAIN_PROXY_URL}/students/delete/${student_id}`
}
export const studentLoginURL = `${MAIN_PROXY_URL}/students/login`




export const allTeachersURL = `${MAIN_PROXY_URL}/teachers`;
export const getTeachersByNameURL = (teacher_name) => {
    return `${MAIN_PROXY_URL}/teachers?teacher_name=${teacher_name}`
}
export const getTeacherByIDURL = (teacher_id) => {
    return `${MAIN_PROXY_URL}/teachers/${teacher_id}`
}
export const getTeacherByClassNameURL = (class_name) => {
    return `${MAIN_PROXY_URL}/teachers/class_name/${class_name}`
}
export const addTeacherURL = `${MAIN_PROXY_URL}/teachers/add`;
export const getEditTeacherURL = (teacher_id) => {
    return `${MAIN_PROXY_URL}/teachers/edit/${teacher_id}`
}
export const getDeleteTeacherURL = (teacher_id) => {
    return `${MAIN_PROXY_URL}/teachers/delete/${teacher_id}`
}
export const teacherLoginURL = `${MAIN_PROXY_URL}/teachers/login`




export const allAdminsURL = `${MAIN_PROXY_URL}/admins`;
export const getAdminByIDURL = (admin_id) => {
    return `${MAIN_PROXY_URL}/admins/${admin_id}`
}
export const addAdminURL = `${MAIN_PROXY_URL}/admins/add`;
export const getEditAdminURL = (admin_id) => {
    return `${MAIN_PROXY_URL}/admins/edit/${admin_id}`
}
export const adminLoginURL = `${MAIN_PROXY_URL}/admins/login`


export const allClassesURL = `${MAIN_PROXY_URL}/classes`;
export const getClassesByNameURL = (class_name) => {
    return `${MAIN_PROXY_URL}/classes?class_name=${class_name}`
}
export const getClassByIDURL = (class_id) => {
    return `${MAIN_PROXY_URL}/classes/${class_id}`
}
export const addClassURL = `${MAIN_PROXY_URL}/classes/add`;
export const getEditClassURL = (class_id) => {
    return `${MAIN_PROXY_URL}/classes/edit/${class_id}`
}
export const getDeleteClassURL = (class_id) => {
    return `${MAIN_PROXY_URL}/classes/delete/${class_id}`
}