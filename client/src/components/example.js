import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import "../styles/example.scss";

const exampleText = [
  {
    text: "a PostgreSQL constraint allows only one of the following columns to be null: email, user_id",
    translation: `ALTER TABLE users ADD CONSTRAINT only_one_null 
      CHECK (
        (email IS NOT NULL AND user_id IS NULL)
        OR (email IS NULL AND user_id IS NOT NULL) ...`,
  },
  {
    text: "convert the product names to uppercase and set discounts to 10%",
    translation: `UPDATE Products 
    SET name = UPPER(name), discount = 0.1 ...`,
  },
  {
    text: "show which product generated the most revenue",
    translation: `SELECT product_id, SUM(quantity * price) AS revenue
      FROM order_items
      GROUP BY product_id
      ORDER BY revenue DESC
      LIMIT 1 ...`,
  },
  {
    text: "find all users who live in California and have over 1000 ",
    translation: `SELECT * FROM users WHERE state='CA' AND credits > 1000; 
    ...`,
  },
  {
    text: "set discount to 10% for the top 5 most popular products",
    translation: `UPDATE Product
    SET discount = 0.1
    WHERE id IN (
        SELECT product_id
        FROM ( ...`,
  },
  {
    text: "list the most popular products",
    translation: `SELECT product_id, COUNT(*) AS num_orders
      FROM orders
      GROUP BY product_id
      ORDER BY num_orders DESC
      LIMIT 10 ...`,
  },
  {
    text: "show the average, minimum, and maximum product price",
    translation: `SELECT AVG(price), MIN(price), MAX(price) FROM products 
      ...`,
  },
];

export default function Example() {
  const [exampleIdx, setExampleIdx] = useState(0);
  const example = exampleText.at(exampleIdx);

  useEffect(() => {
    const interval = setInterval(() => {
      switchExample();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [exampleIdx]);

  const switchExample = () => {
    const idx = exampleIdx == exampleText.length - 1 ? 0 : exampleIdx + 1;
    setExampleIdx(idx);
  };

  return (
    <div className="example">
      <div className="text">{example.text}</div>
      <div className="separator-section">
        <div className="separator" aria-hidden="true">
          <div />
        </div>
        <div className="switch-button">
          <button type="button" onClick={switchExample}>
            <ArrowPathIcon aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="translation">{example.translation}</div>
    </div>
  );
}
