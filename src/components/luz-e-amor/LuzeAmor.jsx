import React, { useEffect, useState } from 'react';
import './LuzeAmor.css';
import Menu from '../menu/Menu';
//  import amorImg from '../../assets/img/luzeamor.jpg';
//  import jovensImg from '../../assets/img/jovens.jpg';
 import luzeamor1 from '../../assets/img/jovens.jpg';
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
         
          <section className="artigos-grid-luzeamor">
            {
             posts?.map( (post) => (
               
                 <div key={post.id} className="artigo-card-luzeamor">
                   <img className='img-luzeamor'
                     src={featuredImages[post.id] || "http://localhost/gsfc/wp-app/wp-content/uploads/2026/02/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"}
                     alt="Amor e Luz"
                   />
                  <h4 className='title-luzeamor'>{post.title.rendered}</h4>
                   <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

                   <Link to={`/luz-e-amor/${post.slug}`} className='btnLuz'>Saiba mais</Link>
                 </div>
             ))
           }
          </section>
       
      </main>
    </div>
  );
}

export default LuzeAmor;
