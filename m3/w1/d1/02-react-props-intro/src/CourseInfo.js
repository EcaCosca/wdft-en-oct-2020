import React from 'react';


class CourseInfo extends React.Component {

  render () {

    return (
      <div>
        <h2>Course Info</h2>
        <p>{this.props.courseObj.startDate}</p>
        <p>{this.props.courseObj.endDate}</p>
        <p>{this.props.courseObj.size}</p>
        <p>{this.props.courseObj.courseType}</p>

        <h3>Students:</h3>
        {this.props.studentsArr.map( (name) => {
          return <p> {name} </p>
        })}
      </div>
    )
  }
}


export default CourseInfo;