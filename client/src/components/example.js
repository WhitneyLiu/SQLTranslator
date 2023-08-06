import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import "../styles/example.scss";

const exampleText = [
  {
    text: "a PostgreSQL constraint allows only one of the following columns to be null: email, user_id",
    translation:
      "ALTER TABLE users \nADD CONSTRAINT only_one_null \nCHECK (\n(email IS NOT NULL AND user_id IS NULL)\nOR (email IS NULL AND user_id IS NOT NULL) ...",
  },
  {
    text: "convert the product names to uppercase and set discounts to 10%",
    translation: "UPDATE Products \nSET name = UPPER(name), discount = 0.1 ...",
  },
  {
    text: "show which product generated the most revenue",
    translation:
      "SELECT product_id, SUM(quantity * price) AS revenue\nFROM order_items\nGROUP BY product_id\nORDER BY revenue DESC\nLIMIT 1 ...",
  },
  {
    text: "find all users who live in California and have over 1000 ",
    translation: "",
  },
  {
    text: "set discount to 10% for the top 5 most popular products",
    translation:
      "SELECT * FROM users WHERE state='CA' AND credits > 1000; \n...",
  },
  {
    text: "list the most popular products",
    translation:
      "SELECT product_id, COUNT(*) AS num_orders\nFROM orders\nGROUP BY product_id\nORDER BY num_orders DESC\nLIMIT 10 ...",
  },
  {
    text: "show the average, minimum, and maximum product price",
    translation:
      "SELECT AVG(price), MIN(price), MAX(price) FROM products \n...",
  },
];

export default function Example() {
  const [example, setExample] = useState(exampleText.at(0));

  return (
    <div className="example">
      <div className="px-4 py-5 sm:px-6">{example.text}</div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <button
            type="button"
            className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">{example.translation}</div>
    </div>
  );
}
