import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../app/Features/User/UserSlice";

export const Transaction = () => {
  const { cashflow } = useSelector((state) => state.user);
  const { userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData({ userId }));
  }, [dispatch, userId]);
  return (
    <div className="w-full h-screen">
      {cashflow.length === 0 ? (
        <h1>No transactions yet</h1>
      ) : (
        <table className="border-separate border border-slate-500">
          <tbody>
            <tr className="text-xl font-bold">
              <th>Sl.no</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Mode</th>
              <th>NOTE</th>
              <th>Date</th>
            </tr>
            {cashflow.map((data, index) => {
              return (
                <tr key={index + data.typeOfOp}>
                  <td>{index + 1}</td>
                  <td>{data.typeOfOp}</td>
                  {data.typeOfOp === "debit" ? (
                    <td>{data.amount}</td>
                  ) : (
                    <td>{data.income}</td>
                  )}
                  <td>{data.category}</td>
                  <td>{data.mode}</td>
                  <td>{data.notes}</td>
                  <td>{data.updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
