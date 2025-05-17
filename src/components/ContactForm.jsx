import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form);
    setForm({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div>
      <h2>Kontak Kami</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Pesan:</label><br />
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit">Kirim</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem' }}>
          <h3>Data yang dikirim:</h3>
          <p><strong>Nama:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Pesan:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
