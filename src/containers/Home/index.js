import React from 'react';
import Card from '../../components/UI/Card/index';
import Sidebar from '../../components/Sidebar/index';
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
      <section className="homeContainer">
        <div style={{ width: '70%' }}>
          <Card style={{ marginBottom: '20px' }}>
            <div className="postImageWrapper">
              <img
                src={
                  'https://cnnespanol.cnn.com/wp-content/uploads/2020/08/200817195905-belarus-minsk-elecciones-lukashenko-dictador-putin-militar-opciones-seg-pkg-miguel-angel-antonanzas-00002124-full-169.jpg?quality=100&strip=info'
                }
                alt="Putin-Lukashenko"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span>Exclusive</span>
              <h2>Lukashenko calls Putin for help.</h2>
              <span>posted on August 28, 2020 JWT news</span>
              <p>
                Belarus is in the middle of big political changes regarding to
                the situation of the last elections which the opposition says
                were corrupted. Thousands of citizens attended to the protests
                in Minsk and in other surrounding cities asking for the
                dimission of the president Lukashenko who called Putin to
                mediate in the situation. The russian mandatary told him to
                "show strenght and speak" and do not stay in the shadows while
                all the conflict is happening.
              </p>
            </div>
          </Card>
          <Card style={{ marginBottom: '20px' }}>Post 2</Card>
        </div>
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
