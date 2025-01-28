function Article(props) {
  return (
    <article>
      <div className="articleBg"></div>
      <ul className="imgBox">
        {props.shoes.map((shoe, index) => {
          return (
            <li key={shoe.id}>
              <img src={shoe.img} alt={shoe.title} className="img" />
              <h4>신제품</h4>
              <h4>{shoe.title}</h4>
              <p>{shoe.content}</p>
              <p>{shoe.price}원</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default Article;
