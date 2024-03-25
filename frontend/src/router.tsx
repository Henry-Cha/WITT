import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import SolveQuizPage from './pages/Quiz/SolveQuiz'
import Follow from './pages/Follow'
import MainWrapper from './components/MainWrapper'
import Error from './pages/Error'
import ResultPage from './pages/Quiz/Result'

const router = createBrowserRouter([
	{
		path: 'auth',
		element: <Login />,
	},
	{
		path: '/',
		element: <MainWrapper />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'follow',
				element: <Follow />,
			},
			{
				path: 'quiz',
				element: <Quiz />,
			},
			{
				path: 'quiz/solve',
				element: <SolveQuizPage />,
			},
			{
				path: 'quiz/result',
				element: <ResultPage />,
			},
		],
	},
])

export default router
