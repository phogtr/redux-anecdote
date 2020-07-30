import axios from "axios";
const url = "http://localhost:3001/anecdotes";

const getData = async () => {
  const req = await axios.get(url);
  return req.data;
};

const updateVote = async (obj) => {
  const updateObj = {
    id: obj.id,
    content: obj.content,
    votes: obj.votes + 1,
  };
  const req = await axios.put(`${url}/${obj.id}`, updateObj);
  return req.data;
};

const newAnec = async (content) => {
  const obj = {
    content: content,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0,
  };
  const req = await axios.post(url, obj);
  return req.data;
};

const resetVote = async (obj) => {
  const resetObj = {
    id: obj.id,
    content: obj.content,
    votes: 0,
  };
  const req = await axios.put(`${url}/${obj.id}`, resetObj);
  return req.data;
};

const deleteAnec = async (obj) => {
  const req = await axios.delete(`${url}/${obj.id}`, obj);
  const deleleId = obj.id;
  return deleleId;
};

export default { getData, updateVote, newAnec, resetVote, deleteAnec };
