import React from 'react'
import courses from '../data/courses'

const DisplayCategory = () => {

  let categoryList = courses.map(course => {
    return <li>{course.category}</li>
  })
  
  return (
    <ul>
      {categoryList}
    </ul>
  )
}

export default DisplayCategory
