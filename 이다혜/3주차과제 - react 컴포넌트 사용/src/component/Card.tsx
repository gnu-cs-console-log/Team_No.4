interface CardInfo {
  id: number,
  image: string,
  description: string
}

export default function Card(props : CardInfo) {
  return (
    <>
      <div className="card">
        <article>
          <img src={props.image}  alt={String(props.id)}/>
          <p>{props.description}</p>
        </article>
      </div>
    </>
  );
}