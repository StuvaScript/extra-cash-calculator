export { postData, fetchData };

const url = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

const postData = async ({
  goal,
  "money amount": moneyAmount,
  "due date": dueDate,
}) => {
  try {
    const airtableData = {
      fields: {
        goal: goal,
        "money amount": Number(moneyAmount),
        "due date": dueDate,
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      const message = `Error: ${res.status}`;
      throw new Error(message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const message = `Error: ${res.status}`;
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
