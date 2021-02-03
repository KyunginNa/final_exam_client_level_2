import React from 'react'
import courses from '../data/courses'

const CategoryList = ({ courseDetails, setFilteredResult }) => {
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
    <ul data-cy='category-list' className='center'>
      <li
        data-cy='all'
        onClick={() => setFilteredResult()}
        className='bold capitalized'
      >All
      </li>
      {categoryList}
    </ul>
  )
}

export default CategoryList
