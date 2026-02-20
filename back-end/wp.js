const BASE_URL = "https://gsfc-senac.free.nf"
const API_URL = `${BASE_URL}/wp-json/wp/v2`


  export const fetchWordPressPost = async () => {
    try{

      const apiResponse = await fetch(`${API_URL}/posts`, {
        "method": "GET",
        "headers": {
          "Content-type": "application/json",
          
        }
      })

  
      return await apiResponse.json()
    }catch(error) {
      console.log(error)
    }
  }



  export const fetchWordPressPostsCategories = async() => {
    try{
      const apiResponse = await fetch(`${API_URL}/categories`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
      })

      const apiData = await apiResponse.json()

      return apiData.reduce( (categoryObject, singleCategoryObject) => {
        categoryObject[singleCategoryObject.id] = singleCategoryObject.name
        return categoryObject
      }, {})

    //   setCategories(categoryObjectData)

    }catch(error){
      console.log(error)
    }
  }

  export const fetchWordPressMediaImages = async(listofPost) => {
    
    const mediaImagesArray = {};

    await Promise.all(
      listofPost.map( async(singlePostObject, index) => {
        if(singlePostObject.featured_media > 0){
          try{
            const apiResponse = await fetch(`${API_URL}/media/` + singlePostObject.featured_media, {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            })

            const apiData = await apiResponse.json()
            mediaImagesArray[singlePostObject.id] =apiData.source_url
          }catch(error){
            console.log(error);
            mediaImagesArray[singlePostObject.id] = `${API_URL}/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566/`

          }
        }else{
          mediaImagesArray[singlePostObject.id] = `${API_URL}/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg`
        }
      })
    )

    return mediaImagesArray
  }

  export const formatDate = (dateString) => {
    const date = new Date(dateString)

    return date. toLocaleDateString('pt-br',{
      day: '2-digit',
      month: 'long',
      year: "numeric"
    })

  }