'use client';


export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-20 py-10 bg-gray-50">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to our platform! We are dedicated to providing the best
          learning experience with top-quality courses and resources.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16 w-full">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Expert Instructors</h2>
          <p className="text-gray-600">
            Learn from industry experts who are passionate about teaching.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Flexible Learning</h2>
          <p className="text-gray-600">
            Learn at your own pace with lifetime access to course materials.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <p className="text-gray-600">
            Earn certificates to showcase your skills and boost your career.
          </p>
        </div>
      </section>

      <section className="w-full text-center mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://media.istockphoto.com/id/1244972686/photo/happy-teacher-is-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=yivyHSDTT3-RrYcoqkbGEHP5ALzWhU0PIeUsOL7-O18="
              alt="Team Member 1"
              className="rounded-full mb-4 mx-auto"
              width={150}
              height={150}
            />
            <h3 className="text-xl font-semibold mb-1">John Doe</h3>
            <p className="text-gray-600">Lead Instructor</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq6cRD9stbHyU52CiAdJo8cneQgBZztqq3A&s"
              alt="Team Member 2"
              className="rounded-full mb-4 mx-auto"
              width={150}
              height={150}
            />
            <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
            <p className="text-gray-600">Course Designer</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq6cRD9stbHyU52CiAdJo8cneQgBZztqq3A&s"
              alt="Team Member 3"
              className="rounded-full mb-4 mx-auto"
              width={150}
              height={150}
            />
            <h3 className="text-xl font-semibold mb-1">Michael Lee</h3>
            <p className="text-gray-600">Developer</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white rounded-lg p-10 text-center w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-6">
          Start learning from our platform and take your skills to the next
          level.
        </p>
        <button className="btn btn-secondary px-6 py-2 text-lg rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
}
