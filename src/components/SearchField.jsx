import React, { useEffect, useRef, useState } from "react";
import { data } from "../utils/data";

const SearchField = () => {
  const [toggle, setToggle] = useState(false);
  const [datas, setDatas] = useState("");
  const [searchData, setSearchData] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    const handleclose = (e) => {
      if (ref.current) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleclose);
    return document.removeEventListener("mousedown", handleclose);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center pt-9 bg-gray-100">
      <div className="w-2/6">
        <input
          type="text"
          className="py-3 px-2 w-full"
          onChange={(e) => {
            const val = e.target.value;

            setDatas(val);
            let filterdata = val
              ? data?.filter((country) =>
                  country.name.toLowerCase().includes(val?.toLowerCase())
                )
              : data;

            setSearchData([...filterdata]);
            setToggle(true);
          }}
          value={datas}
          name="datas"
        />
        {toggle && (
          <div
            className="h-fit max-h-60 bg-white mt-1 p-3 overflow-scroll overflow-x-hidden space-y-1"
          >
            {searchData?.map((item, index) => {
              return (
                <div key={index}>
                  <p
                    onClick={() => {
                      setDatas(`${item?.name}`);
                      setToggle(false);
                    }}
                    className="hover:bg-blue-500 hover:text-white"
                  >
                    {item?.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchField;
