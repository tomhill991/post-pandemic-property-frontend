import axios from 'axios'

class API {

	// API constructor
	constructor() {
		// this.apiURL = 'http://pacific-prime.staging.mediasia.cn'
		this.apiURL =  process.env.REACT_APP_API_URL
		this.headers = {}
		this.token = null
	}

	setToken(token) {
		this.token = token
	}

	/**
	 * CRUD functions
	 */

	// Get list of entities from given model
	list(model) {
		return this.request('get', model)
	}

	// Create new entity on given model
	create(model, fields) {
		return this.request('post', model, fields)
	}

	// Read entity from the api for a given model and id
	read(model, id) {
		return this.request('get', model + '/' + id)
	}

	// Update an entity on the given model
	update(model, id, fields) {
		return this.request('put', model + '/' + id, fields)
	}

	// Delete an entity
	delete(model, id) {
		return this.request('delete', model + '/' + id)
	}

	/** 
	 * HTTP request
	 */

	request(method, path, data) {
		return new Promise((resolve, reject) => {
			axios({
				method: method,
				baseURL: this.apiURL,
				url: path,
				data: data ? data : null,
				headers: {
					authorization: 'Bearer ' + this.token,
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				console.log(err)
				reject(err)
			})
		})
	}

	putAsset(path, files) {
		return new Promise((resolve, reject) => {
			axios({
				baseURL: this.apiURL,
				url: path,
				data: files,
				method: 'put',
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: 'Bearer ' + this.token
				}
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				reject(err)
			})
		})
	}

	postAsset(path, file) {
		var formData = new FormData()
		formData.append('file', file)
		formData.append('data', JSON.stringify({}))
		return new Promise((resolve, reject) => {
			axios({
				baseURL: this.apiURL,
				url: path,
				data: formData,
				method: 'post',
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: 'Bearer ' + this.token
				}
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				reject(err)
			})
		})
	}
}

export default new API();



