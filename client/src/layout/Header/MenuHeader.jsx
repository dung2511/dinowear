import React from "react";
import { NavLink } from "react-router-dom";
import { listMenuHeader } from "../../API/listMenu";
const MenuHeader = () => {
  return (
    <>
      {listMenuHeader && listMenuHeader.length > 0 && (
        <ul>
          {listMenuHeader &&
            listMenuHeader.map((item) => {
              if (item.link !== "") {
                return (
                  <li key={item.id}>
                    <NavLink to={item.link} title={item.title}>
                      {item.title}
                    </NavLink>
                    {item.subMenu && item.subMenu.length > 0 && (
                      <ul className="">
                        {item.subMenu.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              <NavLink to={subItem.link} title={subItem.title}>
                                {subItem.title}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              } else {
                return (
                  <li key={item.id}>
                    <span title={item.title}>{item.title}</span>
                    {item.subMenu && item.subMenu.length > 0 && (
                      <ul>
                        {item.subMenu.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              <NavLink to={subItem.link} title={subItem.title}>
                                {subItem.title}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }
            })}
        </ul>
      )}
    </>
  );
};

export default MenuHeader;
