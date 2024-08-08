import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import DrawerLayout from "../layouts/Drawer";
import FullLayout from "../layouts/Full";
import { Categories, Items } from "../pages";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DrawerLayout />,
		errorElement: <ErrorBoundary children={<h2>404</h2>} />,
		children: [
			{ path: 'categories', element: <Categories /> },
			{ path: 'items', element: <Items /> },
		],
	},
	{
		path: '/login',
		element: <FullLayout />,
		errorElement: <ErrorBoundary children={<h2>404</h2>} />
	},
]);