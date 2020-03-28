import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './Login';
import Header from './header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <section /*style={{
          width:700,
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}*/>
      <div className="row">
            <div className="col-sm-5" style={{ backgroundColor: 'red' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEEIfFyJovc7fCvCNHa9nmKVYburuhQK80t7lxwMm7G3WRCC9&s"
                alt="Disc cover"
                style={{ height: 400 }}
                />
              <div>
                <form>
                  <select name="GAMES">
                    <option value="SKYRIM">SKYRIM</option>
                    <option value="FORZA">FORZA</option>
                    <option value="FIFA" selected>
                      FIFA
                    </option>
                    <option value="COD">COD</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="col-sm-7" style={{ backgroundColor: 'orange' }}>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>
              <br/>
              <br/>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" style={{ backgroundColor: 'blue' }}>
              <button className="btn btn-success">NEXT</button>
            </div>
          </div>
                </section>
    </div>
  );
}

export default App;