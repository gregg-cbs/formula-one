import './styles/app.css';
import './styles/table.css';
import Header from './components/Header';
import Rankings from './components/Rankings';
import Seasons from './components/Seasons';
import { useEffect, useState } from 'react';
import { useFetchSeasons } from './hooks/queries';

function App() {
  const seasons = useFetchSeasons()
  const [selectedSeason, setSelectedSeason] = useState();

  useEffect(()=> {
    if (seasons.data) {
      const latestSeasonIndex = seasons.data.length-1;
      if (!selectedSeason) {
        setSelectedSeason(seasons.data[latestSeasonIndex])
      }
    }
  }, [seasons.isFetching])
  
  return (
    <div className="app">
      <Header />
      <Seasons season={selectedSeason} onChange={setSelectedSeason} />
      <Rankings season={selectedSeason} />
    </div>
  );
}

export default App;
