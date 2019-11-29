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
 
class CheckoutModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      pago: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
    this.openButton = {
      backgroundColor: '#1883ba',
      border: '2px solid #1884bac5',
      borderRadius: '6px',
      color: '#ffffff',
      fontSize: '20px',
      fontWeight: 600,
      padding: '10px',
      textDecoration: 'none'
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
    this.container = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '680px'
    };
    this.input = {
      display: 'block',
      width: '260px',
      height: '30px',
      paddingLeft: '10px',
      paddingTop: '3px',
      paddingBottom: '3px',
      margin: '7px',
      fontSize: '17px',
      borderRadius: '20px',
      background: 'rgba(0,0,0,0.05)',
      border: 'none',
      transition: 'background 0.5s'
    }
    this.subtitle = {
      color: '#484848',
      textAlign: 'center',
      textTransform: 'capitalize'
    };
    this.label = {
      paddingLeft: '8px',
      fontSize: '15px',
      color: '#444'
    }
    this.buy = {
      width: '260px',
      height: '50px',
      position: 'relative',
      display: 'block',
      margin: '20px auto',
      borderRadius: '10px',
      border: 'none',
      background: '#1883ba',
      color: 'white',
      fontSize: '20px',
      transition: 'background 0.4s',
      cursor: 'pointer'
    }
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

  checkOut() {
    localStorage.clear();
    this.setState({modalIsOpen: true});
  }
 
  render() {
    return (
      <div style={this.containerStyle}>
        <button style={this.openButton} onClick={this.openModal}>Confirmar Pago</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Completar pago"
        >
          <button style={this.closeButton} onClick={this.closeModal}>close</button>
          <form style={this.container}>
            <h2 style={this.subtitle}>Confirmar pago</h2>
            <h3 style={this.subtitle}>Monto total: {this.props.mount}</h3>

            <label style={this.label}>Card Number</label>
            <input style={this.input} className="number" type="text" maxLength="19"/>

            <label style={this.label}>Cardholder name</label>
            <input style={this.input} className="inputname" type="text" placeholder=""/>
            
            <label style={this.label}>Expiry date</label>
            <input style={this.input} className="expire" type="text" placeholder="MM / YYYY"/>
            
            <label style={this.label}>Security Number</label>
            <input style={this.input} className="ccv" type="text" placeholder="CVC" maxLength="3"/>

            <button style={this.buy}  onClick={this.checkOut} className="buy"><img src="img/iconos/lock.png" className="lock-icon" alt=""/>Efectuar Pago</button>
          </form>    
        </Modal>
      </div>
    );
  }
}
 
export default CheckoutModal;