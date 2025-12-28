import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Reports() {
  const [reports, setReports] = useState([]);

  //get reports
  const getReports = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/reports/getreports"
      );
      if (response.status === 200) {
        setReports(response.data);
      }
      if (response.status === 204) {
        setReports([]);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching reports");
    }
  };
  //delete report
    const deleteReport = async (reportName) => {
    try {
        const response = await axios.delete(
        "http://localhost:5000/reports/deletereport/" + reportName
      );
        if (response.status === 200) {
        setReports(reports.filter((report) => report.name !== reportName));
        toast.success("Report deleted successfully!");
      }
    } catch (err) {
      toast.error("Something went wrong while deleting the report");
    }
    };
  useEffect(() => {
    getReports();
  }, []);
  return (
         <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Reports (Table)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-slate-700">
                    <th className="px-6 py-4 font-semibold">name</th>
                    <th className="px-6 py-4 font-semibold">email</th>
                    <th className="px-6 py-4 font-semibold">message</th>
                    <th className="px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 bg-white">
                  {reports.map((report) => (
                    <tr key={report.name} className="hover:bg-slate-50">
                      <td className="px-6 py-4">{report.name}</td>
                      <td className="px-6 py-4">{report.email}</td>
                      <td className="px-6 py-4">{report.message}</td>
                      <td className="px-6 py-4">
                        <button
                          className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500 transition"
                          onClick={() => deleteReport(report.name)}
                        >
                          handeled
                        </button>
                      </td>
                    </tr>
                  ))}

                  <tr className="hidden">
                    <td colSpan={3} className="px-6 py-4 text-slate-600">
                      No reports loaded yet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  )
}
export default Reports;
