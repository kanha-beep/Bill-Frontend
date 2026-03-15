import React, { useEffect } from "react";
import { api } from "../api.js";

export default function AllBills() {
  useEffect(() => {
    const res = api.get("/api/items");
    console.log("all items: ", res?.data);
  }, []);
  return <div>AllBills</div>;
}
