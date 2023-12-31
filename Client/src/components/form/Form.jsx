import { useState } from "react";
import styleForm from "./form.module.css";
import { bttonSearch } from "../search-bar/SearchBar.module.css";
import validation from "../../utils/validation";
export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styleForm.divForm}>
      <div><img src="https://th.bing.com/th/id/R.449c88ba963a86eb76630ef09269c9c0?rik=Ct99uKKjmYMcHA&pid=ImgRaw&r=0" alt="" /></div>
      <div className={styleForm.cardForm}>
        <form onSubmit={handleSubmit}>
          <img
            src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty-768x432.png"
            alt="logo-login"
          />
          <div>
            <label for="email" >Email: </label>
            <input
              value={userData.email}
              key="email"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <p>{errors.email && errors.email}</p>
          <div>
            <label for="password">Password: </label>
            <input
              value={userData.password}
              key="password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <p>{errors.password && errors.password}</p>
          <button
            disabled={errors.email || errors.password}
            className={bttonSearch}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
