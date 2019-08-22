import React from 'react';
import ProductModalContainer from './productModalContainer.js'

function ProductModal({ modal, closeModal }) {
    if (!modal) return null;

    switch (modal) {
        case 'showProduct':
            return (
                <div id="product-modal-container">

                    <div>
                        <div id='product-modal-background' onClick={closeModal} />
                        <div id='product-modal' onClick={(e) => e.stopPropagation()}></div>

                    </div>
                </div>

            )
        default:
            return null;
    }
}

export default ProductModal;
