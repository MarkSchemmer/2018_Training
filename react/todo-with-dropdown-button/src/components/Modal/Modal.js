import React from 'react'
import './Modal.css'

class Modal extends React.Component { 
        constructor(props){
            super(props)
            this.setWrapperRef = this.setWrapperRef.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }   

        componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
          }
        
          componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
          }


          setWrapperRef(node) {
            this.wrapperRef = node;
          }

          handleClickOutside(event) {
            if ( this.props.show && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
              this.props.hideModal()
            }
          }
          


        render(){
            const { handleClose, show, children, hideModal } = this.props
            let showHideClassName = show ? "modal display-block" : "modal display-none"
            return (
            <div 
          
            className={showHideClassName}>
                <section
                ref={this.setWrapperRef}
                className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
                </section>
            </div>
            )
        }
  }


  export default Modal