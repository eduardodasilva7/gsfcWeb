// import { useEffect, useState } from 'react';

//   const [posts, setPosts] = useState([])
//   const [categories, setCategories] = useState({})
//   const [featuredImages, setFeaturedImages] = useState({})

  export const fetchWordPressPost = async () => {
    try{

      const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/posts", {
        "method": "GET",
        "headers": {
          "Content-type": "application/json",
          // "Authorization": "Basic " +btoa("admin:admin")
        }
      })

    //   const listPosts = await apiResponse.json()
    //   setPosts(listPosts)

    //   const featuredMediaImages = await fetchWordPressMediaImages(listPosts)

    //   setFeaturedImages(featuredMediaImages)

      return await apiResponse.json()
    }catch(error) {
      console.log(error)
    }
  }

//   useEffect( () => {
//     fetchWordPressPost()
//     fetchWordPressPostsCategories()
//   }, [])

  export const fetchWordPressPostsCategories = async() => {
    try{
      const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/categories", {
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
            const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/media/" + singlePostObject.featured_media, {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            })

            const apiData = await apiResponse.json()
            mediaImagesArray[singlePostObject.id] =apiData.source_url
          }catch(error){
            console.log(error);
            mediaImagesArray[singlePostObject.id] = "http://localhost/gsfc/wp-app/wp-content/uploads/2026/02/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"

          }
        }else{
          mediaImagesArray[singlePostObject.id] = "http://localhost/gsfc/wp-app/wp-content/uploads/2026/02/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
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