class MyTtc {
	constructor() {
		this.api = "https://myttc.ca"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getFinchStation() {
		const response = await fetch(
			`${this.api}/finch_station.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {MyTtc}
