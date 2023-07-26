import { useQuery } from "@tanstack/react-query";

export async function api(domain, options) {
  return fetch(`https://v1.formula-1.api-sports.io${domain}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.formula-1.api-sports.io",
      "x-rapidapi-key": "78fe4590dd0eebcfba45eb64127c9380"
    },
    ...options
  })
  .then((res) => res.json())
  .then((res) => res.response);
}

export function useFetchSeasons() {
  return useQuery({ 
    queryKey: ['seasons'], 
    queryFn: () => api(`/seasons`),
    retry: 0
  })
}

export function useFetchDrivers(season) {
  return useQuery({ 
    queryKey: ['drivers', `drivers_${season}`], 
    queryFn: () => api(`/rankings/drivers?season=${season}`),
    keepPreviousData: true,
    retry: 0,
    enabled: !!season
  })
}

export function useFetchTeams(season) {
  return useQuery({ 
    queryKey: ['teams', `teams_${season}`],
    queryFn: () => api(`/rankings/teams?season=${season}`),
    retry: 0,
    keepPreviousData: true,
    enabled: !!season
  })
}

