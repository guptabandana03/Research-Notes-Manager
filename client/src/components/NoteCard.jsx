const NoteCard = ({ note, onDelete }) => {
  return (
    <article className="note-card">
      <div className="note-card-header">
        <h3>{note.title}</h3>
        <span className="note-tag">{note.tag}</span>
      </div>
      <p>{note.description || 'No description provided.'}</p>
      <div className="note-card-footer">
        <small>{new Date(note.createdAt).toLocaleString()}</small>
        <button type="button" className="delete-button" onClick={() => onDelete(note._id)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default NoteCard;
