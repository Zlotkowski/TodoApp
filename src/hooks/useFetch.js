// import React, { useEffect, useState } from "react";

// function useFetch(url) {
//   const [answer, setAnwser] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         return res.json();
//       })
//       .then((resData) => setAnwser(resData))
//       .catch((e) => {
//         throw new Error(e);
//       });
//   }, [url]);

//   return answer;
// }

// export default useFetch;

import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, [data]);
  if (data) {
    return data;
  } else {
    return null;
  }
}

export default useFetch;
