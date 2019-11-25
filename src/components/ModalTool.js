import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }

};
 
class ModalTool extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openButton = {
      borderRadius            : '50px',
      color                   : '#000',
      padding                 : '10px',
      background              : 'rgba(247, 240, 240, 0.747)',
      cursor                  : 'pointer',
      ':hover': {
        background            : 'rgb(253, 168, 10)'
      }
    };
    this.containerStyle = {
      display                 : 'inline-block',
    };
    this.closeButton = {
      backgroundColor         : 'rgb(231, 52, 52)',
      borderRadius            : '50px',
      float                   : 'right',
      padding                 : '5px'
    };
    this.imgContainer = {
      borderRadius: '10px',
      height: '180px',
      margin: '0 auto',
      overflow: 'hidden',
      width: '300px'
    };
    this.textContainer = {
      maxWidth: '1100px',
      width: "70%",
      margin: '0 auto'
    }
    this.subtitle = {
      color: '#484848',
      textAlign: 'center',
      textTransform: 'capitalize'
    };
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div style={this.containerStyle}>
        <button style={this.openButton} onClick={this.openModal}>Ver mas detalles</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Detalles de nuestros productos"
        >
          <button  style={this.closeButton} onClick={this.closeModal}>close</button>
 
          <h2 style={this.subtitle}>{this.props.data.name}</h2>
          <div style={this.imgContainer}>
            <img src={this.props.data.imageUrl} className="Product__img" alt={this.props.data.subCategoryId} />
          </div>
          <div style={this.textContainer}>
            <p>{this.props.data.content}</p>
          </div>
          
        </Modal>
      </div>
    );
  }
}
 
export default ModalTool;