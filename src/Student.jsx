import PropTypes from 'prop-types'
import propTypes from 'prop-types'
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Students: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
Student.propTypes = {
    name: PropTypes.string,
    age: propTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {

}
export default Student