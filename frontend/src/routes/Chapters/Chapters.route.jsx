import React from 'react'

const Chapters = () => {
  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":id" element={<Category />} />
    </Routes>
  )
}

export default Chapters.route