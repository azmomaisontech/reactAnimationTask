const submitToServer = async (user) => {
  const res = await fetch("/api/customers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await res.json();
};

export default submitToServer;
