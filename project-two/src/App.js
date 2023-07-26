import './styles/app.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import TableDrivers from './TableDrivers';
import TableTeams from './TableTeams';
import Toggle from './Toggle';
import Loader from './Loader';
import { useFetchSeasons } from './data/queries';

function App() {
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [isTeams, setIsTeams] = useState(true)

  const seasons = useFetchSeasons();

  useEffect(()=> {
    if (seasons.data) {
      const latestIndex = seasons.data.length-1
      setSelectedSeason(seasons.data[latestIndex])
    }
  }, [seasons.isFetching])

  return (
    <div className="app">
      
      <header className='header'>
        <div className='container'>
          <h1 className='header-title'>Formula 1 Rankings</h1>
        </div>
        <div className='header-images'>
          <div className='header-images-gradient'></div>
          <img src="/cars.png" className='header-images-main' />
          <div className='header-ring header-ring-one'></div>
          <div className='header-ring header-ring-two'></div>
        </div>
      </header>

      <section className='section seasons-section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>Seasons</h2>
          </div>

          <div className='relative'>
            <div className='season-tabs'>
              { seasons.data &&
                seasons.data.map((season)=> (
                  <button 
                    className={classNames('season-tab click-in', { active: selectedSeason === season})}
                    onClick={()=> setSelectedSeason(season)}
                  >{season}</button>
                ))
              }
            </div>
            <Loader show={seasons.isLoading} loadingMessage="Fetching seasons..." />
          </div>
        </div>
      </section>

      <section className='section rankings-section'>
        <div className='container'>

          <div className='section-header'>
            <h2 className='section-title'>Rankings - {isTeams ? "Teams" : "Drivers"}</h2>
            <Toggle label="Teams" checked={isTeams} onChange={setIsTeams}/>
          </div>

          <div className='rankings-table'>
            {
              isTeams &&
              <TableTeams season={selectedSeason} />
            }
            {
              !isTeams &&
              <TableDrivers season={selectedSeason} />
            }
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
