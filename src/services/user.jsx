import API from './api.jsx'
import DB from './db.jsx'

class User {
	constructor() {
		this.user = DB.get('user') || null
		let token = DB.get('token') || null
		if(token)
			API.setToken(token)

		// Get user from local DB
		console.log('USER', DB.get('user'))
	}

	// Login
	login(params) {
		let that = this
		return API.request('post', 'login', params).then(function(res){
			console.log(res)
			API.setToken(res.token)
			DB.set('user', res.email)
			DB.set('token', res.token)
			that.user = res.user
		})
	}

	hasRole = (expected) => {
		let realms = {
			superAdmin: ['super-admin'],
			admin: ['super-admin', 'admin'],
			operator: ['super-admin', 'admin', 'operator'],
			all: ['super-admin', 'admin', 'operator', 'wechat-user']
		}

		if(this.user !== null) {
			const userRole = this.user.role
	
			if(realms[expected].indexOf(userRole) < 0) {
				return false
			} else {
				return true
			}
		}
	} 

	// Logout
	logout() {
		this.user = null
		DB.clear('user')
		DB.clear('token')
	}
	
	// Get current logged in user
	current() {
		return this.user
	}

	// User CRUD
	list() {}
	get(id) {}
	create(fields) {}
	update(id, fields) {}
	delete(id) {}
}

export default new User()