import AddCourseForm from '@/Components/AddCourseForm'
import React from 'react'
import PrivateRoute from '../PrivateRoute'


export default function AddCourse() {
  return (
    <PrivateRoute>
    <AddCourseForm></AddCourseForm>
    </PrivateRoute>
  )
}
