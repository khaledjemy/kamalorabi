import { useState,useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { t } from "../i18n/translations"

function HireMe() {
  const { lang } = useContext(LanguageContext); // lang يمكن أن تكون 'en' أو 'ar'
  const l = t[lang]; // اختيار الترجمة حسب اللغة

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, file);
  };

  return (
    <div className="hire-wrapper">
      <div className="hire-card">
        <h2>{l.title}</h2>
        <p className="sub">{l.sub}</p>

        <form onSubmit={handleSubmit}>
          <div className="grid">
            <input
              name="name"
              placeholder={l.name}
              onChange={handleChange}
              value={form.name}
            />
            <input
              name="email"
              placeholder={l.email}
              onChange={handleChange}
              value={form.email}
            />
            <input
              name="phone"
              placeholder={l.phone}
              onChange={handleChange}
              value={form.phone}
            />
            <input
              name="position"
              placeholder={l.position}
              onChange={handleChange}
              value={form.position}
            />
          </div>

          <textarea
            name="message"
            placeholder={l.message}
            onChange={handleChange}
            value={form.message}
          />

          <div className="file-box">
            <label>
              {l.uploadLabel}
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            {file && <span>{file.name}</span>}
          </div>

          <button type="submit">{l.button}</button>
        </form>
      </div>
    </div>
  );
}

export default HireMe;