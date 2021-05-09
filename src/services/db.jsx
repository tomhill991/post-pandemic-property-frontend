class DB {
	// Get item from local storage
	get(name) {
		let value = localStorage.getItem(name)

		try {
			if(value) return JSON.parse(value)
			return null
		}
		catch(e) {
			return null
		}
	}

	// Set item to local storage
	set(name, value) {
		if(!name)
			throw new Error('Storage: cannot set item, name is missing')
		if(!value)
			throw new Error('Storage: cannot set item, value is missing for key `' + name + '`')

		localStorage.setItem(name, JSON.stringify(value))
	}

	// Clear local storage
	// warning: if no name is given, all values from local storage will be cleared
	clear(name) {
		if(name)
			localStorage.removeItem(name)
		else
			localStorage.clear()
	}
}

export default new DB();