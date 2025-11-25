export default function FAQ() {
  const faqData = [
    {
      q: 'কোর্সগুলো কি লাইফটাইম অ্যাক্সেস পাবো?',
      a: 'হ্যাঁ! একবার কিনলেই কোর্সগুলো আজীবন অ্যাক্সেস করতে পারবে।',
    },
    {
      q: 'সার্টিফিকেট কি দেওয়া হয়?',
      a: 'হ্যাঁ, প্রতিটি কোর্স সম্পন্ন করলে একটি Official Certificate দেওয়া হয়।',
    },
    {
      q: 'লাইভ সাপোর্ট আছে?',
      a: 'হ্যাঁ, কোর্স চলাকালীন চ্যাট এবং গ্রুপ সাপোর্ট পাবেন।',
    },
    {
      q: 'শুরু করার জন্য কি কোনো প্রোগ্রামিং অভিজ্ঞতা দরকার?',
      a: 'না, অনেক কোর্সই Zero to Hero designed—প্রথম থেকে শেখানো হয়।',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{item.q}</h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
