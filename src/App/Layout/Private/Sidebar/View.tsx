import React, { useState } from "react";
import { Assets } from "../../../Container/Assets/index";
import history from "../../../Misc/BrowserHistory";
export const PrivateSidebar = () => {
  const urlList: any = [
    {
      id: 1,
      title: "Beranda",
      icon: "home",
      path: "/vendor",
      hasChildren: false,
    },
    {
      id: 2,
      title: "Profil Perusahaan",
      icon: "user",
      hasChildren: true,
      isOpen: false,
      children: [
        {
          id: 12,
          title: "Detail Profile",
          path: "/vendor/detail_profile",
        },
        {
          id: 13,
          title: "Sanksi",
          path: "/vendor/sanksi",
        },
      ],
    },
    {
      id: 3,
      title: "Pengumuman",
      icon: "announcement",
      hasChildren: true,
      isOpen: false,
      children: [
        {
          id: 12,
          title: "General & Vendor Info",
          path: "/vendor/general",
        },
        {
          id: 13,
          title: "Tenders",
          path: "/vendor/tenders",
        },
      ],
    },
    {
      id: 4,
      title: "Pengadaan",
      icon: "procurement",
      hasChildren: true,
      isOpen: false,
      children: [
        {
          id: 12,
          title: "Data Pengadaan",
          path: "/vendor/participation",
        },
        {
          id: 13,
          title: "Auctions",
          path: "/vendor/auctions",
        },
      ],
    },
  ];

  const [sidebarStatus, setSidebarStatus] = useState<boolean>(true);
  const [childrenList, setChildrenList] = useState<any>(urlList);

  const _clickSidebar = (e) => {
    setSidebarStatus(e);
    setChildrenList(urlList);
  };
  const _handleSidebar = (path, hasChildren, index, value) => {
    if (sidebarStatus) {
      if (!hasChildren) {
        history.push(path);
      } else {
        if (value === false) {
          let newArr = [...childrenList];
          newArr[index].isOpen = true;
          setChildrenList(newArr);
        } else {
          let newArr = [...childrenList];
          newArr[index].isOpen = false;
          setChildrenList(newArr);
        }
      }
    }
  };

  const _handleClickChild = (e) => {
    history.push(e);
  };

  return (
    <div
      className={`${
        sidebarStatus ? "w-64" : "w-16"
      } h-full bg-gray-800 overflow-y-auto`}
    >
      <div
        onClick={() => _clickSidebar(!sidebarStatus)}
        className={`w-full border-b-2 border-gray-200 bg-gray-700 cursor-pointer flex mb-3 ${
          sidebarStatus && "flex-row-reverse"
        }`}
      >
        {sidebarStatus ? (
          <div className="p-3 text-gray-200 text-sm font-semibold">
            <img src={Assets.hideSidebar} alt="hideSidebar" width="22px" />
          </div>
        ) : (
          <div className="w-full m-auto py-3 px-5">
            <img src={Assets.showSidebar} alt="showSidebar" width="22px" />
          </div>
        )}
      </div>
      {childrenList &&
        childrenList.map((e, i) => (
          <div key={i} className="mb-2">
            <div
              onClick={() => _handleSidebar(e.path, e.hasChildren, i, e.isOpen)}
              className="w-auto text-white flex px-5 text-sm hover:bg-gray-700 py-2 cursor-pointer"
            >
              {sidebarStatus ? (
                <React.Fragment>
                  <div className="w-2/12">
                    <img
                      src={require(`.././../../Container/Assets/Images/${e.icon}.png`)}
                      alt="home"
                      width="20px"
                    />
                  </div>
                  <div className="w-9/12 text-gray-300 font-semibold">
                    {e.title}
                  </div>
                  {e.hasChildren && (
                    <>
                      {!e.isOpen ? (
                        <svg
                          className="fill-current h-4 w-4 mr-2 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="fill-current h-4 w-4 mr-2 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                          ></path>
                        </svg>
                      )}
                    </>
                  )}
                </React.Fragment>
              ) : (
                <div className="w-auto">
                  <img
                    src={require(`.././../../Container/Assets/Images/${e.icon}.png`)}
                    alt="home"
                    width="20px"
                  />
                </div>
              )}
            </div>
            {e.hasChildren && e.isOpen && (
              <>
                {e.children.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => _handleClickChild(e.path)}
                    className="w-full pl-16 text-sm text-white cursor-pointer hover:bg-gray-700 py-2"
                  >
                    {e.title}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
    </div>
  );
};
