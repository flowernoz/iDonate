import Table from "../../components/table";

function TopDonators() {
  return (
    <div>
      <p className="title">Top donaterlar</p>
      <Table
        title={["Ismi", "To'lagan summa"]}
        data={[{ ism: "Guli", tolov: 100 }]}
      />
    </div>
  );
}

export default TopDonators;
