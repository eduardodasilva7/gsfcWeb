import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from "react-router-dom";
import { formatDate, fetchWordPressPostsCategories } from "../../../back-end/wp";
import "./saibamais.css";
import Menu from "../../components/menu/Menu";

 
export default function SaibaMais() {

    
  const navigate = useNavigate();

  const pageJoral = () => {
    navigate('/luz-e-amor')
  }

  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState(null); 

  useEffect(() => {
    const loadFullPost = async () => {
      try {

        const res = await fetch(`http://localhost/gsfc/wp-app/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        const data = await res.json();

        if(data && data.length > 0){
          const postData = data[0]
          setPost(postData);
          
          const allCategories = await fetchWordPressPostsCategories();
          if (postData.categories && postData.categories.length > 0) {
            setCategoryName(allCategories[postData.categories[0]]);
          }
          
          const featuredImage = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          if (featuredImage) {
            setImageUrl(featuredImage);
          }
        } else{
          console.error("Post não encontrado");
        }
      } catch (error) {
        console.error("Erro ao carregar:", error);
      }
    };

    if (slug) loadFullPost();
  }, [slug]);

  if (!post) return <p>Carregando artigo...</p>; 
  return (
    <div className="saiba-mais-container">
      <Menu />
 
      {/* Seta de voltar */}
      <div className="back-button-container">
       
        <img src={imageUrl} alt={post.title.rendered}  />
      </div>
      <button onClick={pageJoral} className="back-button" aria-label="Voltar">
          ←
 
        </button>
      {/* Título */}
      <div className="title-container">
        <h1>{post.title.rendered}</h1>
      <br />
      <i className="fa-regular fa-calendar-days"> {formatDate(post.date)}</i> 

      <br />
        <i className="fa-solid fa-folder"> {categoryName || "Geral"}</i>
   
      <h2></h2>
      </div>
 
      {/* Texto */}
      <div className="text-container">
        <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
}