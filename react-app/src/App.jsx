import React from 'react'
import DisplayCategory from './components/DisplayCategory'
import courses from './data/courses'

const App = () => {
  let courseDetails = courses.map(course => {
    return (
      <div>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p className='capitalized'>
          <span className='bold'>Category: </span>
          {course.category}
        </p>
        <p>
          <span className='bold'>Instructors: </span>
          {course.instructors}
        </p>
        <p>{course.info}</p>
        <p>
          <span className='bold'>Price: </span>
          {course.price}
        </p>
      </div>
    )
  })
  return (
    <>
      <div data-cy='app'>
        <h1>Course list</h1>
        <DisplayCategory />
        {courseDetails}
      </div>
    </>
  )
}

export default App
