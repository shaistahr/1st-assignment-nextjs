export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Let's get in touch!</p>
      <form className="flex flex-col space-y-4 max-w-md mx-auto mt-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="p-3 border rounded-lg focus:outline-none"
        ></textarea>
        <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
