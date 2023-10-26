import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {/* First Card Element */}
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/381184481_10159291495791560_7778322223922445764_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y5EnHr8hhlkAX-FdSPG&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAYl2rZISkUApm76pLYxrLP4HjjSVZcMotp7OVtGdPKgQ&oe=653EDDA1" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">KFC-Lac 1 </h5>
              <p className="card-text">Crispy Strips Meal.</p>
              <a href="#" className="btn btn-primary">Price</a>
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-4">
          {/* Second Card Element */}
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/381184481_10159291495791560_7778322223922445764_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y5EnHr8hhlkAX-FdSPG&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAYl2rZISkUApm76pLYxrLP4HjjSVZcMotp7OVtGdPKgQ&oe=653EDDA1" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">KFC-Manzeh</h5>
              <p className="card-text">Crispy Strips Meal.</p>
              <a href="#" className="btn btn-primary">Price</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Third Card Element */}
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/381184481_10159291495791560_7778322223922445764_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y5EnHr8hhlkAX-FdSPG&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAYl2rZISkUApm76pLYxrLP4HjjSVZcMotp7OVtGdPKgQ&oe=653EDDA1" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">KFC-Nabeul 3</h5>
              <p className="card-text">Crispy Strips Meals.</p>
              <a href="#" className="btn btn-primary">Price</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
