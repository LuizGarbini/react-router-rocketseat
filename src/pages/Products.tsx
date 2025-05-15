import { useSearchParams } from "react-router";

export function Products() {
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");

	return (
		<div>
			<a href="/">Voltar</a>

			<h1>Produtos</h1>

			{category && (
				<span>
					Categoria <strong>{category}</strong>
				</span>
			)}

			<div className="cards">
				<a href="/details/1">Produtos 1</a>
				<a href="/details/2">Produtos 2</a>
				<a href="/details/3">Produtos 3</a>
				<a href="/details/4">Produtos 4</a>
				<a href="/details/5">Produtos 5</a>
			</div>
		</div>
	);
}
