import { useState, useEffect } from "react";
import styles from "./App.module.css";
import banner from "./assets/p1.png";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (logado) {
      console.log("Usuário logado no SerraGram");
    }
  }, [logado]);

  function fazerLogin() {
    setLogado(true);
  }

  return (
    <div className={styles.container}>
      <img src={banner} alt="SerraGram" className={styles.banner} />

      <div className={styles.linha}></div>

      <div className={styles.card}>
        <h1 className={styles.logo}>
          <span className={styles.serra}>Serra</span>
          <span className={styles.gram}>Gram</span>
        </h1>

        <h2>Entrar no SerraGram</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={fazerLogin}>Entrar</button>

        {logado && (
          <div>
            <hr />

            <h2>Login realizado com sucesso!</h2>

            <p>
              Email informado: <strong>{email}</strong>
            </p>

            <p>
              Senha informada: <strong>{senha}</strong>
            </p>

            <p>Usuário logado no SerraGram.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;