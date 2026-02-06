import React, { useEffect, useState } from 'react';
import './LuzeAmor.css';
import Menu from '../menu/Menu';
 import amorImg from '../../assets/img/luzeamor.jpg';
 import jovensImg from '../../assets/img/jovens.jpg';

function LuzeAmor() {

  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState({})
  const [featuredImages, setFeaturedImages] = useState({})

  const fetchWordPressPost = async () => {
    try{

      const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/posts", {
        "method": "GET",
        "headers": {
          "Content-type": "application/json",
          // "Authorization": "Basic " +btoa("admin:admin")
        }
      })

      const listPosts = await apiResponse.json()
      setPosts(listPosts)

      const featuredMediaImages = await fetchWordPressMediaImages(listPosts)

      setFeaturedImages(featuredMediaImages)
    }catch(error) {
      console.log(error)
    }
  }

  useEffect( () => {
    fetchWordPressPost()
    fetchWordPressPostsCategories()
  }, [])

  const fetchWordPressPostsCategories = async() => {
    try{
      const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/categories", {
        method: "GET",
        headers: {
          "Content-type": "aplication/json",
        }
      })

      const apiData = await apiResponse.json()

      const categoryObjectData = apiData.reduce( (categoryObject, singleCategoryObject) => {
        categoryObject[singleCategoryObject.id] = singleCategoryObject.name
        return categoryObject
      }, {})

      setCategories(categoryObjectData)

    }catch(error){
      console.log(error)
    }
  }

  const fetchWordPressMediaImages = async(listofPost) => {
    
    const mediaImagesArray = {};

    await Promise.all(
      listofPost.map( async(singlePostObject, index) => {
        if(singlePostObject.featured_media > 0){
          try{
            const apiResponse = await fetch("http://localhost/gsfc/wp-app/wp-json/wp/v2/media/" + singlePostObject.featured_media, {
              method: "GET",
              headers: {
                "Content-type": "aplication/json"
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

  const formatDate = (dateString) => {
    const date = new Date(dateString)

    return date. toLocaleDateString('pt-br',{
      day: '2-digit',
      month: 'long',
      year: "numeric"
    })

  }

  return (
    <div>
      <Menu />
      <main className="luzeamor-container">
        <section className="luzeamor-header">
          <h1>Artigos</h1>
          <p>Leia nossos artigos</p>
        </section>
          {
            posts.map( (singlePost) => (
              <section className="artigos-grid" key={singlePost.id}>
                <div className="artigo-card">
                  <img
                    src={featuredImages[singlePost.id] || "http://localhost/gsfc/wp-app/wp-content/uploads/2026/02/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"}
                    alt="Amor e Luz"
                  />
                  <h3>{singlePost.title.rendered}</h3>
                  <h4>{categories[singlePost?.categories[0]] || "No Category"}</h4>
                  <h5>{formatDate(singlePost.date)}</h5>
                  <p dangerouslySetInnerHTML={{ __html: singlePost.excerpt.rendered }} />
                  <button>Saiba mais</button>
                </div>
              </section>
            ))
          }
        
      </main>
    </div>
  );
}

export default LuzeAmor;
