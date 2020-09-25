import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shoestore_api: [
        {
          "size": 8,
          "brand_name": "Lugz",
          "manufacturer": "http://127.0.0.1:8000/api/manufacturers/1/",
          "color": "http://127.0.0.1:8000/api/shoecolors/1/",
          "material": "swade",
          "shoe_type": "http://127.0.0.1:8000/api/shoetypes/1/",
          "fasten_type": "metal hooks",
        }
      ]
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoes/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState(
          {
            isLoaded: true,
            shoestore_api: result
          }
        );
      },
      (error) => {
        this.setState(
          {
            isLoaded: true,
            error
          }
        );
      }
    )
  }

  render() {
    const { error} = this.setState;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <h1>React Shoestore</h1>
          {this.state.shoestore_api.map(
            shoe => (
              <ul key={shoe.brand_name}>
                <li>{shoe.size}</li>
                <li>{shoe.brand_name}</li>
                <li>{shoe.manufacturer}</li>
                <li>{shoe.color}</li>
                <li>{shoe.material}</li>
                <li>{shoe.shoe_type}</li>
                <li>{shoe.fasten_type}</li>
                <hr/>
              </ul>
            )
          )}
        </div>
      );
    }
  }
}

export default App;
