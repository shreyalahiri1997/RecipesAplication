export const recipeQueryString = `
{
    recipesCollection{
  items{
  sys{
      id
  }
  title
  type
    difficulty
    serving
    ingredients
    procedure
    image{
      url
    }
  }}
  }
`

export const recipeByIdQueryString = (id) => {
    return `{
  recipes(id:"${id}"){
   sys{
      id
  }
  title
  type
    difficulty
    serving
    ingredients
    procedure
    image{
      url
    }
}
}`
}
