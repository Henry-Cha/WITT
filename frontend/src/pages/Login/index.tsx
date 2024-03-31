import { useNavigate } from 'react-router-dom'
import { IMenu, IMenuFunc } from '../../components/interfaces'
import { icons } from '../../constants/header-icons'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { mainstate } from '../../components/StateVariables'
import { Cookies } from 'react-cookie'

const Login = () => {
	const navigate = useNavigate()
	const menu: IMenu = { left: icons.BACK, center: '로그인', right: undefined }
	const func: IMenuFunc = { left_func: () => navigate('/'), right_func: undefined }
	const setIsLogin = mainstate((state) => state.setIsLogin)
	const cookie = new Cookies()
	let token = cookie.get('refresh_token')

	useEffect(() => {
		// const url = 'http://localhost:8081/api/oauth2/authorization/kakao'
		const url = 'https://j10d103.p.ssafy.io/api/oauth2/authorization/kakao'
		location.href = url
		token = cookie.get('refresh_token')
		if (token != '') {
			navigate('/')
			setIsLogin(true)
		}
	}, [token])

	return (
		<div className=" max-w-screen-sm">
			<Header menu={menu} func={func} />
			<div className="pt-24"></div>
		</div>
	)
}

export default Login
