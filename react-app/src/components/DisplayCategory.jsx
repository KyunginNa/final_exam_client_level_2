import React from 'react'
import courses from '../data/courses'

const DisplayCategory = () => {

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
  let categoryList = uniqueCategories.map(category => {
    return <li>{category}</li>
  })

  return (
    <ul data-cy='category-list'>
      {categoryList}
    </ul>
  )
}

export default DisplayCategory
