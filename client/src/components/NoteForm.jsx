import { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('General');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onSubmit({ title: title.trim(), description: description.trim(), tag });
    setTitle('');
    setDescription('');
    setTag('General');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add a note description"
          rows="4"
        />
      </label>

      <label>
        Tag
        <select value={tag} onChange={(event) => setTag(event.target.value)}>
          <option value="General">General</option>
          <option value="AI">AI</option>
          <option value="Research">Research</option>
          <option value="Ideas">Ideas</option>
        </select>
      </label>

      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
