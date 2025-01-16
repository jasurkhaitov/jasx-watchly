import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

// const key = import.meta.env.VITE_RAPIDAPI_KEY

const options = {
  params: {
    maxResults: '50'
  },

  headers: {
    'x-rapidapi-key': '9b1c59dcedmsh170ab4d18944bcep162f6djsnd1c2a573096f',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
	async fetching(url :string) {
		const response = await axios.get(`${BASE_URL}/${url}`, options)

		return {data: response.data.items, status: response.status};
	}
}