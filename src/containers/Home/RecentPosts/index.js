import React from 'react';
import Card from '../../../components/UI/Card/index';
import './style.css';

const RecentPosts = (props) => {
  return (
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
            Belarus is in the middle of big political changes regarding to the
            situation of the last elections which the opposition says were
            corrupted. Thousands of citizens attended to the protests in Minsk
            and in other surrounding cities asking for the dimission of the
            president Lukashenko who called Putin to mediate in the situation.
            The russian mandatary told him to "show strenght and speak" and do
            not stay in the shadows while all the conflict is happening.
          </p>
          <button>Read More</button>
        </div>
      </Card>
      <Card style={{ marginBottom: '20px' }}>Post 2</Card>
    </div>
  );
};

export default RecentPosts;
