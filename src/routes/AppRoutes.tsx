import { Route, Routes } from "react-router";

import { Layout } from "../layout";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" index element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/details/:id" element={<Details />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
