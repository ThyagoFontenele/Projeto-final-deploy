import React from 'react'
import './MenuBag.css'

function MenuBag(props) {
    return (props.trigger) ? (
        <>
          
          <div id="bag-container">
          
                <div>
                  <h1 className="carrinho-text">Carrinho</h1>
                  <div>
                      <td>
                          <tr>
                            <p id="empty">Não há nada no seu carrinho :/</p>
                          </tr>
                      </td>
                  </div>
                 
                </div>
                <p className="limpar-text">Limpar carrinho</p>
                
                <div>
                  <div className="barra-carrinho"></div>
                  <h2 className="total-carrinho-text">Total</h2>
                  <h2 className="total-carrinho">R$ 0,00</h2>
                  <button className="carrinho-button">Pagar</button>
                </div>
            </div>   
        </>
    ) : "";
}

export default MenuBag
