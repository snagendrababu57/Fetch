import React, { useReducer, useEffect } from 'react';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const fetchData = async (dispatch) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products'); 
    const data = await response.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) { 
    dispatch({ type: 'FETCH_ERROR', payload: error.message });
  }
};

const MyComponent6 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const { data, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent6;
