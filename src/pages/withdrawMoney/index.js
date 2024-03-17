import "./style.css";
import Table from "../../components/table";
function WithdrawMoney() {
  return (
    <div className="withdrawMoney">
      <p className="title">Pul yechish</p>
      <form>
        <label>Karta raqami</label>
        <input type="number" min={1} placeholder="Karta raqami" />
        <label>Summa</label>
        <input type="number" min={1} placeholder="Summa" />
        <button className="btn btn_success" type="submit">
          Yechib olish
        </button>
      </form>
      <p className="title">oxirgi to'lovlar</p>
        <Table
          title={[
            "Summa",
            "xizmat haqqi",
            "jami",
            "foiz",
            "pul yechgandan keyingi balans",
            "pul yechishdan avvalgi balans",
            "karta raqami",
            "status",
            "amal",
          ]}
        />
    </div>
  );
}

export default WithdrawMoney;
