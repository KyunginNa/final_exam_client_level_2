import React, { useState } from 'react'
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

  const pluck = (array, key) => {
    let pluckedArray = []
    array.map(item => {
      if (item.hasOwnProperty(key)) {
        pluckedArray.push(item[key])
      }
    })
    return pluckedArray
  }

  let uniqueCategories = pluck(courses, 'category').filter((value, index, array) => array.indexOf(value) === index)

  const hideCourses = (courseDetails, category) => {
    let filteredResult = courseDetails.filter(course => {
      return course.props.data_cat === category
    })
    setFilteredResult(filteredResult)
  }

  let categoryList = uniqueCategories.map(category => {
    return (
      <li
        className='bold capitalized'
        key={category}
        data-cy={category}
        onClick={() => hideCourses(courseDetails, category)}
      >{category}
      </li>
    )
  })

  return (
    <>
      <div data-cy='app'>
        <h1 className='center'>Course list</h1>
        <ul data-cy='category-list' className='center'>
          <li
            data-cy='all'
            onClick={() => setFilteredResult()}
            className='bold capitalized'
          >All
          </li>
          {categoryList}
        </ul>
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
