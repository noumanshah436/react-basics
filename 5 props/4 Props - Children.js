import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
	title: "I Love You to the Moon and Back",
	author: "Amelia Hepworth",
};

const secondBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
	title: "Our Class is a Family",
	author: "Shannon Olsen",
};

function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			>
				<p>
					{/* Props - Children */}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					mollitia consequuntur iusto unde molestias aperiam aliquid nemo
					accusamus aliquam velit.
				</p>
			</Book>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
}

// accessing Props - Children;

// one way
const Book = (props) => {
	const { img, title, author } = props;
	console.log(props);

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{props.children}
		</article>
	);
};

// 2nd way
// const Book = (props) => {
// 	const { img, title, author, children } = props;
// 	return (
// 		<article className="book">
// 			<img src={img} alt="" />
// 			<h1>{title}</h1>
// 			<h4>{author}</h4>
// 			{children}
// 		</article>
// 	);
// };

// 3rd way
// const Book = ({ img, title, author, children }) => {
// 	return (
// 		<article className="book">
// 			<img src={img} alt="" />
// 			<h1>{title}</h1>
// 			<h4>{author}</h4>
// 			{children}
// 		</article>
// 	);
// };

ReactDom.render(<BookList />, document.getElementById("root"));
