import React from 'react';
import Card from '../../components/UI/Card/index';
import './style.css';

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden',
  };
  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card>
        <div className="galleryPost" style={galleryStyle}>
          <section className="gallerySection" style={{ width: '70%' }}>
            <div>
              <img
                src={
                  'https://i.insider.com/5f39a804e89ebf001f04519a?width=1100&format=jpeg&auto=webp'
                }
                alt="belarus conflict"
              />
            </div>
          </section>
          <section className="sideImageWrapper" style={{ width: '30%' }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={
                  'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/08/18/e5160dae-e071-11ea-8e8d-92e5de2d33e5_image_hires_201405.jpeg'
                }
                alt="belarus conflict"
              />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={'https://www.dw.com/image/43122790_303.jpg'}
                alt="belarus conflict"
              />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-BwGpUAvp0Hw7ZwgGJ5QL4hbXw_XfOqveAQ&usqp=CAU'
                }
                alt="belarus conflict"
              />
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Home;
