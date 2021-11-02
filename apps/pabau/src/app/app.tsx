import styles from './app.module.scss';

import { getAllGames } from '../fake-api';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

// import './app.module.scss'
import { Header } from '@nxpabau/pabau/ui-shared';
import { formatRating } from '@nxpabau/pabau/util-formatters';

import { Route, useHistory } from 'react-router-dom';

import { PabauFeatureGameDetail } from '@nxpabau/pabau/feature-game-detail';

export function App() {
  const history = useHistory();

  return (
    <>
      <Header title="Ole" />
      <div className={styles.container}>
        <div className={styles.gamesLayout}>
          {getAllGames().map((g) => (
            <Card 
              key={g.id} 
              className={styles.gameCard}
              onClick={() => history.push(`/game/${g.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className={styles.gameCardMedia}
                  image={g.image}
                  title={g.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {g.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {g.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(g.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>

      <Route path="/game/:id" component={PabauFeatureGameDetail} />
      
    </>
  );
}

export default App;
