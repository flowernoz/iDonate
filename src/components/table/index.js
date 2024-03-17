import "./style.css";
import { IconMinus } from "@tabler/icons-react";
function Table({ title, data }) {
  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {title?.map((i, inx) => (
              <th key={inx}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((i, inx) => (
            <tr key={inx}>
              <td>{inx + 1}</td>
              <td>{i.ism ? i.ism : <IconMinus />}</td>
              <td>{i.tolov ? i.tolov : <IconMinus />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
