import axios from 'axios';

export const fetchNotes = async (baseUrl, tag) => {
  const url = tag ? `${baseUrl}?tag=${encodeURIComponent(tag)}` : baseUrl;
  const response = await axios.get(url);
  return response.data;
};

export const createNote = async (baseUrl, noteData) => {
  const response = await axios.post(baseUrl, noteData);
  return response.data;
};

export const deleteNote = async (baseUrl, noteId) => {
  const response = await axios.delete(`${baseUrl}/${noteId}`);
  return response.data;
};
