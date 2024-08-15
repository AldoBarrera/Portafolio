import axios from 'axios'

export async function getAllBlogs(include?: number) {
  const query = include ? `?include=${include}` : ''
  return axios.get(`/api/contentful/blogs${query}`)
}

export async function getAllBlogCategories(include?: number) {
  const query = include ? `?include=${include}` : ''
  return axios.get(`/api/contentful/blog-categories${query}`)
}

export async function getBlogsByCategoryAndTags(
  category: string,
  tags: string,
  limit?: number
) {
  let query = ''
  if (category && category !== '') {
    if (tags && tags !== '') {
      query = limit
        ? `?limit=${limit}&category=${category}&tags=${tags}`
        : `?category=${category}&tags=${tags}`
    } else {
      query = limit
        ? `?limit=${limit}&category=${category}`
        : `?category=${category}`
    }
  } else {
    query = limit ? `?limit=${limit}&category=${category}` : ''
  }
  return axios.get(`/api/contentful/blogs/search${query}`)
}
