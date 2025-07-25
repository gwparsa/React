import { useState } from "react";

function Form() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("");

  const loginHandler = () => {
    console.log({ email, password, role, gender }); //khorooji: {email: 'gwparsa@gmail.com', password: 'dsadasdczsad', role: 'user', gender: 'male'}
  };

  const emailHandler = (event) => {
    setEmail(event.target.value); //meghdar input email ro dar state zakhire mikone
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value); //meghdar input password ro dar state zakhire mikone
  };
  const roleHandler = (event) => {
    setRole(event.target.value); //meghdar input select option ro dar state zakhire mikone
  };
  const genderHandler = (event) => {
    setGender(event.target.value); //meghdar input Gender ro dar state zakhire mikone
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email vared kon"
          value={email}
          onChange={emailHandler}
        />
        <br />
        <input
          type="password"
          placeholder="ramz vared kon"
          value={password}
          onChange={passwordHandler}
        />
        <br />
        <select value={role} onChange={roleHandler}>
          <option value="admin">ادمین</option>
          <option value="user">کاربر</option>
          <option value="editor">ادیتور</option>
        </select>
        <br />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={genderHandler}
          checked={gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={genderHandler}
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={genderHandler}
          checked={gender === "other"}
        />
        <br />
        <label htmlFor="rules">Qavanin ro Qabool kon!</label>
        <input type="checkbox" id="rules" />
        <br />
        {email && password && role && gender ? (
          <button onChange={loginHandler} type="submit">Login</button>
        ) : (
          <button disabled>Login</button>
        )}
      </form>
    </div>
  );
}

export default Form;
