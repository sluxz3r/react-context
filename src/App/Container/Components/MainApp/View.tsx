import React from "react";

export const MainApp = ({ title, children }) => {
  return (
    <div className="w-full h-full">
      <table className="w-full">
        <thead className="w-full border-b-2 bg-gray-200">
          <tr>
            <td className="text-left py-2 pl-6 text-gray-600 text-sm font-semibold">
              {title}
            </td>
          </tr>
        </thead>
        <tbody className="w-full bg-white">
          <tr>
            <td className="text-left py-3 px-6">{children}</td>
          </tr>
        </tbody>
        <tfoot className="w-full">
          <tr>
            <td className="text-left py-3 px-6">
              <p className="text-xs text-gray-700 font-semibold">Perhatian :</p>
              <p className="text-xs text-gray-700 text-justify">
                This program is protected by copyright law and international
                treaties. Unauthorized reproduction or distribution of the
                program, or any portion, may result in civil and criminal
                penalties, and will be prosecuted to the maximum extent under
                the law.
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
