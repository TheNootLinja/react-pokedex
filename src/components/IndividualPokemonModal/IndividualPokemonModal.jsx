import "./IndividualPokemonModal.styles.css"
import Button from "../Button/Button"

function IndividualPokemonModal({indivPokeData, handleCloseClick}) {
    return (
        <modal>
            <div className="modalbg">
              <div className="modal">
                <div className="modal__div">
                    <img className="modal__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indivPokeData.id}.png`} alt="" />
                </div>
                    <h2 className="modal__h2">{indivPokeData.forms[0].name}</h2>
                <p className="modal__dexnum">#{indivPokeData.id}</p>
                <Button buttonText="Close" onClick={handleCloseClick}/>
                {/* <button className="modal__button" onClick={handleCloseClick}>Close</button> */}
              </div>
            </div>
          </modal>
    )
}

export default IndividualPokemonModal
