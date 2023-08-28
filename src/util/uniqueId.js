const uniqueId = () => {
	return new Date().getMilliseconds()+Math.random().toString(26).substring(2, 16)
}

export default uniqueId