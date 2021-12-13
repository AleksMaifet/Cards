import axios from "axios";

const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0',
	}
)
