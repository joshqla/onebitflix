// src/models/index.ts

import { Category } from './Category'
import { Course } from './Course'

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Course,
  Category
}