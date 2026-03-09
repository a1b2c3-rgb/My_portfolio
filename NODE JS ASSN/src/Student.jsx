// props are read only properties that are shared between components.
// A parent component can send data to a child component.
// <component key-value/>
// import PropTypes from 'prop-types'
function Student(props){
return(
    <div className="student">
        <h1>Use of props</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p> Student: {props.isStudent? "Yes": "No"}</p>
    </div>
    
);

// propTypes 
// these are a mechanism that ensures thst ths passed value is of the correct dataType
// eg  age: PropType.number
}
// Student.PropTypes={
//     name:propTypes.string,
//     age: propTypes.number,
//     isStudent: propTypes.bool,
// }

// default props  are default values for props in case 
// they are not passed from the parent component
Student.defaultProps={
    name:"guest",
    age:0,
    isStudent: false,
}
export default Student