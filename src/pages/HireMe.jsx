import { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function HireMe() {
  const { lang } = useContext(LanguageContext);
  const l = t[lang];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // حالة لإظهار التحميل

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من الحقول الأساسية
    if (!form.name || !form.email || !form.message) {
      alert("يرجى ملء جميع الحقول الأساسية (الاسم، البريد الإلكتروني، الرسالة)");
      return;
    }

    // إعداد FormData لإرسال الملف والنصوص معاً
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("position", form.position);
    formData.append("message", form.message);
    if (file) {
      formData.append("resume", file);
    }

    setLoading(true);

    try {
      const response = await fetch("https://kamalorabi.com/send_email.php", {
        method: "POST",
        body: formData, // لا نضيف Content-Type؛ المتصفح يضيفها تلقائياً مع الـ boundary
      });

      const result = await response.text();

      if (response.ok) {
        alert(l.successMessage || "✅ تم إرسال طلبك بنجاح!");
        // إعادة تعيين النموذج بعد الإرسال
        setForm({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: ""
        });
        setFile(null);
      } else {
        alert(`❌ فشل الإرسال: ${result}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("⚠️ حدث خطأ في الاتصال بالسيرفر. تأكد من أن السيرفر يعمل.");
    } finally {
      setLoading(false);
    }
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
              required
            />
            <input
              name="email"
              type="email"
              placeholder={l.email}
              onChange={handleChange}
              value={form.email}
              required
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
            rows="5"
            required
          />

          <div className="file-box">
            <label>
              {l.uploadLabel}
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf,.doc,.docx"
              />
            </label>
            {file && <span>{file.name}</span>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "جاري الإرسال..." : l.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HireMe;