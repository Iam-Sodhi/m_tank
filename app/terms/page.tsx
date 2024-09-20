import Navbar from "@/components/Navbar";

export default function Terms() {
  return (
    <div className="">
      <div className="mb-8 ">
        <Navbar />
        <div className="mx-[30px] sm:mx-[120px] my-8 text-gray-700">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>
              Welcome to Writesonic, Inc.(“Company”, “we”, “our”, “us”)! As you
              have just clicked our Terms of Service, please pause, grab a cup
              of coffee and carefully read the following pages. It will take
              you approximately 5 minutes.
            </p>
            <p>
              These Terms of Service (“Terms”, “Terms of Service”) govern your
              use of our web pages located at{" "}
              <a
                href="https://writesonic.com"
                className="text-blue-500 underline"
              >
                https://writesonic.com
              </a>{" "}
              operated by Writesonic, Inc.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and
              explains how we collect, safeguard and disclose information that
              results from your use of our web pages. Please read it{" "}
              <a
                href="https://writesonic.com/privacy"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy
              (“Agreements”). You acknowledge that you have read and understood
              Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then
              you may not use the Service, but please let us know by emailing at{" "}
              <a href="mailto:support@writesonic.com" className="text-blue-500 underline">
                support@writesonic.com
              </a>{" "}
              so we can try to find a solution. These Terms apply to all
              visitors, users, and others who wish to access or use the Service.
            </p>
            <p>Thank you for being responsible.</p>

            <h2 className="text-xl font-semibold">Communications</h2>
            <p>
              By creating an Account on our Service, you agree to subscribe to
              newsletters, marketing or promotional materials, and other
              information we may send. However, you may opt out of receiving any
              or all of these communications from us by following the
              unsubscribe link or by emailing us.
            </p>

            <h2 className="text-xl font-semibold">Purchases</h2>
            <p>
              If you wish to purchase any product or service made available
              through Service (“Purchase”), you may be asked to supply certain
              information relevant to your Purchase including, without
              limitation, your credit card number, the expiration date of your
              credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to
              use any credit card(s) or other payment method(s) in connection
              with any Purchase; and that (ii) the information you supply to us
              is true, correct and complete.
            </p>
            <p>
              We may employ the use of third-party services for the purpose of
              facilitating payment and the completion of Purchases. By
              submitting your information, you grant us the right to provide the
              information to these third parties subject to our Privacy Policy.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time
              for reasons including but not limited to: product or service
              availability, errors in the description or price of the product or
              service, error in your order, or other reasons.
            </p>
            <p>
              We reserve the right to modify the number of words charged for the
              output or input or impose any usage restrictions per hour,
              regardless of what was previously committed at the time of
              subscription. These changes will be made according to our model
              capacity to safeguard the interests of all users and to ensure
              uniform access to the service. We take this step to provide equal
              opportunity to every user and protect the quality of our service.
            </p>
            <p>
              We reserve the right to refuse or cancel your order if fraud or an
              unauthorized or illegal transaction is suspected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
