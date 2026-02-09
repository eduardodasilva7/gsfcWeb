import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatDate, fetchWordPressPostsCategories } from "../../../back-end/wp";
import Menu from "../menu/Menu";

function Teste() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState(null); 

  useEffect(() => {
    const loadFullPost = async () => {
      try {

        const res = await fetch(`http://localhost/gsfc/wp-app/wp-json/wp/v2/posts/${id}?_embed`);
        const postData = await res.json();
        setPost(postData);

        const allCategories = await fetchWordPressPostsCategories();
        if (postData.categories && postData.categories.length > 0) {
          setCategoryName(allCategories[postData.categories[0]]);
        }

        const featuredImage = postData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        if (featuredImage) {
          setImageUrl(featuredImage);
        }
      } catch (error) {
        console.error("Erro ao carregar:", error);
      }
    };

    loadFullPost();
  }, [id]);

  if (!post) return <p>Carregando artigo...</p>;

  return (
    <div>
      <Menu />
      <article className="artigo-completo-container" >
        
  
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={post.title.rendered} 
     
          />
        )}

        <header>
          <p>
            {categoryName || "Geral"}
          </p>
          <h1>{post.title.rendered}</h1>
          <span>{formatDate(post.date)}</span>
        </header>

        <div 
          className="conteudo-post" 
          dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
        />

        <Link to="/luz-e-amor">Voltar</Link>
      </article>
    </div>
  );
}

export default Teste;