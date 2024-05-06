import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './H2HCard'; 
import "./GameOdds.scss";

const NBAGameOdds = ({ teamData }) => {
  const [draftKingsOdds, setDraftKingsOdds] = useState([]);
  const [fanduelOdds, setFanduelOdds] = useState([]);
  const [betMGMOdds, setBetMGMOdds] = useState([]);
  const [bovadaOdds, setBovadaOdds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOdds = async () => {
      const apiKey = import.meta.env.VITE_ODDS_API_KEY;
      const sport = 'basketball_nba';
      const regions = 'us';
      const markets = 'h2h';
      const oddsFormat = 'american';

      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/odds/`, {
          params: { apiKey, regions, markets, oddsFormat },
        });
        // console.log(response.data)
        const enrichedOdds = response.data.map(game => {
          const bookmaker = game.bookmakers.find(b => b.key === 'draftkings');
          const market = bookmaker?.markets.find(m => m.key === 'h2h');
          if (market) {
            return {
              homeTeam: game.home_team,
              awayTeam: game.away_team,
              odds: market.outcomes.map(outcome => ({
                team: outcome.name,
                price: outcome.price > 0 ? `+${outcome.price}` : outcome.price.toString(),
              })),
              additionalData: game.commence_time,
              homeLogo: teamData.eastern.find(t => t.name === game.home_team)?.logo || teamData.western.find(t => t.name === game.home_team)?.logo,
              awayLogo: teamData.eastern.find(t => t.name === game.away_team)?.logo || teamData.western.find(t => t.name === game.away_team)?.logo
            };
          }
          return null;
        }).filter(Boolean);

        const enrichedOdds2 = response.data.map(game => {
          const bookmaker2 = game.bookmakers.find(b => b.key === 'fanduel');
          const market2 = bookmaker2?.markets.find(m => m.key === 'h2h');
          if (market2) {
            return {
              homeTeam: game.home_team,
              awayTeam: game.away_team,
              odds: market2.outcomes.map(outcome => ({
                team: outcome.name,
                price: outcome.price > 0 ? `+${outcome.price}` : outcome.price.toString(),
              })),
              additionalData: game.commence_time,
              homeLogo: teamData.eastern.find(t => t.name === game.home_team)?.logo || teamData.western.find(t => t.name === game.home_team)?.logo,
              awayLogo: teamData.eastern.find(t => t.name === game.away_team)?.logo || teamData.western.find(t => t.name === game.away_team)?.logo
            };
          }
          return null;
        }).filter(Boolean);

        const enrichedOdds3 = response.data.map(game => {
          const bookmaker3 = game.bookmakers.find(b => b.key === 'betmgm');
          const market3 = bookmaker3?.markets.find(m => m.key === 'h2h');
          if (market3) {
            return {
              homeTeam: game.home_team,
              awayTeam: game.away_team,
              odds: market3.outcomes.map(outcome => ({
                team: outcome.name,
                price: outcome.price > 0 ? `+${outcome.price}` : outcome.price.toString(),
              })),
              additionalData: game.commence_time,
              homeLogo: teamData.eastern.find(t => t.name === game.home_team)?.logo || teamData.western.find(t => t.name === game.home_team)?.logo,
              awayLogo: teamData.eastern.find(t => t.name === game.away_team)?.logo || teamData.western.find(t => t.name === game.away_team)?.logo
            };
          }
          return null;
        }).filter(Boolean);

        const enrichedOdds4 = response.data.map(game => {
          const bookmaker4 = game.bookmakers.find(b => b.key === 'bovada');
          const market4 = bookmaker4?.markets.find(m => m.key === 'h2h');
          if (market4) {
            return {
              homeTeam: game.home_team,
              awayTeam: game.away_team,
              odds: market4.outcomes.map(outcome => ({
                team: outcome.name,
                price: outcome.price > 0 ? `+${outcome.price}` : outcome.price.toString(),
              })),
              additionalData: game.commence_time,
              homeLogo: teamData.eastern.find(t => t.name === game.home_team)?.logo || teamData.western.find(t => t.name === game.home_team)?.logo,
              awayLogo: teamData.eastern.find(t => t.name === game.away_team)?.logo || teamData.western.find(t => t.name === game.away_team)?.logo
            };
          }
          return null;
        }).filter(Boolean);

        setDraftKingsOdds(enrichedOdds);
        setFanduelOdds(enrichedOdds2);
        setBetMGMOdds(enrichedOdds3);
        setBovadaOdds(enrichedOdds4);

      } catch (error) {
        console.error("Error fetching odds:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOdds();
  }, [teamData]);


  const urls = {
    DraftKings: "https://sportsbook.draftkings.com/?category=game-lines&subcategory=basketball",
    FanDuel: "https://www.fanduel.com",
    Caesars: "https://www.caesars.com/sportsbook-and-casino/welcome",
    Bovada: "https://www.bovada.lv",
    PointsBet: "https://www.pointsbet.com",
    BetMGM: "https://sports.betmgm.com/en/sports/basketball-7/betting",
    BetOnline: "https://www.betonline.ag",
    Unibet: "https://www.unibet.com",
    BetRivers: "https://www.betrivers.com"
  };

  return (
    <div>
      <div className='ContentGameOdds'>
        {draftKingsOdds && draftKingsOdds.length > 0 ? draftKingsOdds.map((game, index) => (
          <a href={urls['DraftKings']} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              key={index}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              odds={game.odds}
              data={game.additionalData}
              homeLogo={game.homeLogo}
              awayLogo={game.awayLogo}
              bookmaker="DraftKings"
            />
          </a>
        )) : <></>}
        {fanduelOdds && fanduelOdds.length > 0 ? fanduelOdds.map((game, index) => (
          <a href={urls['FanDuel']} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              key={index}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              odds={game.odds}
              data={game.additionalData}
              homeLogo={game.homeLogo}
              awayLogo={game.awayLogo}
              bookmaker="FanDuel"
            />
          </a>
        )) : <></>}
        {betMGMOdds && betMGMOdds.length > 0 ? betMGMOdds.map((game, index) => (
          <a href={urls['BetMGM']} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              key={index}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              odds={game.odds}
              data={game.additionalData}
              homeLogo={game.homeLogo}
              awayLogo={game.awayLogo}
              bookmaker="BetMGM"
            />
          </a>
        )) : <></>}
        {bovadaOdds && bovadaOdds.length > 0 ? bovadaOdds.map((game, index) => (
          <a href={urls['Bovada']} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              key={index}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              odds={game.odds}
              data={game.additionalData}
              homeLogo={game.homeLogo}
              awayLogo={game.awayLogo}
              bookmaker="Bovada"
            />
          </a>
        )) : <></>}
      </div>
    </div>
  );
};

export default NBAGameOdds;
