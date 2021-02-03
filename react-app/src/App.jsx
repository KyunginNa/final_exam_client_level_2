import React, { useState } from 'react'
import CategoryList from './components/CategoryList'
import courses from './data/courses'

const App = () => {
  const [filteredResult, setFilteredResult] = useState()

  let courseDetails = courses.map(course => {
    return (
      <div data_cat={course.category}>
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
        <h1 className='center'>Course list</h1>
        <CategoryList courseDetails={courseDetails} setFilteredResult={setFilteredResult} />
        {filteredResult ?
          filteredResult
          :
          courseDetails
        }
      </div>
    </>
  )
}

export default App
