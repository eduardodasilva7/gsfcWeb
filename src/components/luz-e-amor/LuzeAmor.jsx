import React, { useEffect, useState } from 'react';
import './LuzeAmor.css';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom'; // Adicione esta linha no topo
import {fetchWordPressPost, fetchWordPressPostsCategories, fetchWordPressMediaImages, formatDate} from '../../../back-end/wp'


function LuzeAmor() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState({})
  const [featuredImages, setFeaturedImages] = useState({})

  useEffect(() => {
    const loadData = async () => {
      try {
        const listPosts = await fetchWordPressPost()
        setPosts(listPosts)

        const categoriesData = await fetchWordPressPostsCategories()
        setCategories(categoriesData)

        const images = await fetchWordPressMediaImages(listPosts)
        setFeaturedImages(images)
      }catch (error){
        console.log(error)
      }
    }
    loadData()
  }, [])

  return (
    <div>
      <Menu />
      <main className="luzeamor-container">
        <section className="luzeamor-header">
          <h1>Artigos</h1>
          <p>Leia nossos artigos</p>
        </section>
          {
            posts.map( (post) => (
              <section className="artigos-grid" key={post.id}>
                <div className="artigo-card">
                  <img
                    src={featuredImages[post.id] || "http://localhost/gsfc/wp-app/wp-content/uploads/2026/02/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"}
                    alt="Amor e Luz"
                  />
                  <h3>{post.title.rendered}</h3>
                  <h4>{categories[post?.categories[0]] || "No Category"}</h4>
                  <h5>{formatDate(post.date)}</h5>
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

                  <Link to={`/luz-e-amor/${post.id}`}><button>Saiba mais</button></Link>
                </div>
              </section>
            ))
          }
        
      </main>
    </div>
  );
}

export default LuzeAmor;
