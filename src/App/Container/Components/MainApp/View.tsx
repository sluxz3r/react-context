import React from "react";

export const MainApp = ({ title, children }) => {
  return (
    <div className="w-full h-full">
      <table className="w-full">
        <thead className="w-full border-b-2 bg-gray-200">
          <tr>
            <td className="text-left py-2 pl-6 text-gray-600 text-sm font-semibold">{title}</td>
          </tr>
        </thead>
        <tbody className="w-full bg-white">
          <tr>
            <td className="text-left py-6 px-6">{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
