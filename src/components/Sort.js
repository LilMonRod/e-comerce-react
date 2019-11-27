import React from "react";
import Product from  '../components/Product';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      categorySelected: 'default',
      sortedList: props.products.product
    };
    this.categories = props.categories;
    this.products = props.products.product;
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.defaultProductsOrder = props.products.product.slice();
  }

  handleChange = event => {
    this.setState({ category: event.target.value }, () => this.sortBy());
  };

  sortBy() {
    let newSortedList
    switch (this.state.category) {
      case "id":
        newSortedList = this.sortByID();
        break;
      case "name":
        newSortedList = this.sortByName();
        break;
      case "price":
        newSortedList = this.sortByPrice();
      break;
      default:
        newSortedList = this.defaultProductsOrder;
        break;
    }
    this.setState({sortedList: newSortedList});
  }

  sortByPrice() {
    const newSortedList = this.state.sortedList.sort(function (a, b){
      return (b.price - a.price)
    })
    return newSortedList;
  }

  sortByID() {
    const newSortedList = this.state.sortedList.sort(function (a, b){
      return (b.id - a.id)
    })
    return newSortedList;
  }

  sortByName() {
    const newSortedList = this.state.sortedList.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      });
    return newSortedList;
  }

  addToCart(event) {
    console.log('ya casi lo tienes');
    console.log(event.target.id);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Orden de los productos:
            <select
              onChange={this.handleChange}
            >
              <option value={this.state.categorySelected}>Por defecto</option>
              {this.categories.map(category => (
                <option id={category.id} value={category.category}>
                  {category.tag}
                </option>
              ))}
            </select>
          </label>
        </form>
        <div className='Products__container'>
          {this.state.sortedList.map((item) => <Product key={item.name+item.id} addToCart={this.addToCart} data={item}/>)}
        </div>
      </div>
    );
  }
}

export default Sort;