import "./Card.styles.css"

function Card({name, num, clickFunc}) {
    return (
      <div className="card" onClick={() => clickFunc(name)} data={name}>
        <p className="card__name">{name}</p>
        <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="" />
      </div>
    )
}

export default Card
