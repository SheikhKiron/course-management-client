export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold">Start Learning Today!</h2>
        <p className="mt-3 text-lg">
          Join thousands of students and improve your skills.
        </p>

        <a
          href="/courses"
          className="mt-6 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Browse Courses
        </a>
      </div>
    </section>
  );
}
