import axios from 'axios';

const API_BASE_URL = 'https://play-cricket.com/api/v2';

export const playCricketClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getPlayers(siteId: string, apiKey: string) {
  try {
    const response = await playCricketClient.get(`/sites/${siteId}/players`, {
      params: {
        api_token: apiKey,
        include_everyone: 'yes',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
}

export async function getResultSummary(siteId: string, apiKey: string, season?: string) {
  try {
    const currentYear = new Date().getFullYear();
    const response = await playCricketClient.get(`/result_summary.json`, {
      params: {
        site_id: siteId,
        api_token: apiKey,
        season: season || currentYear.toString(),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching result summary:', error);
    throw error;
  }
}

export async function getMatchDetail(matchId: string, apiKey: string) {
  try {
    const response = await playCricketClient.get(`/match_detail.json`, {
      params: {
        match_id: matchId,
        api_token: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching match detail:', error);
    throw error;
  }
}
