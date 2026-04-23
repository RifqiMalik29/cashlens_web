import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Delete Account | Cashlens",
  description: "Instructions and requests for deleting your Cashlens account.",
};

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl mt-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Delete Your Account
          </h1>

          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="text-lg mb-6">
              We&apos;re sorry to see you go. If you want to delete your
              Cashlens account and all associated data, you can do so by
              following the instructions below.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              How to delete your account in the app
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <ol className="list-decimal pl-5 space-y-3 flex-1">
                <li>
                  Open the Cashlens app and navigate to the{" "}
                  <strong>Settings</strong> tab.
                </li>
                <li>
                  Scroll down to the <strong>Account</strong> section at the
                  bottom.
                </li>
                <li>
                  Tap <strong>Delete Account</strong> (indicated by a red trash
                  icon).
                </li>
                <li>
                  A confirmation dialog will appear warning you that your
                  account and data will be permanently deleted (&quot;Akun dan
                  semua data Anda akan dihapus permanen. Tindakan ini tidak
                  dapat dibatalkan.&quot;).
                </li>
                <li>
                  Tap <strong>Hapus Akun</strong> (Delete Account) to finalize
                  the deletion.
                </li>
              </ol>
              <div className="relative w-64 h-[500px] flex-shrink-0 bg-gray-100 rounded-3xl overflow-hidden shadow-md border-4 border-gray-900">
                <Image
                  src="/mockup.png"
                  alt="Cashlens App Account Deletion Mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Request Deletion via Email
            </h2>
            <p className="mb-8">
              Alternatively, you can request account deletion by sending an
              email to{" "}
              <a
                href="mailto:cashlens.app@gmail.com?subject=Account Deletion Request"
                className="text-blue-600 hover:underline"
              >
                cashlens.app@gmail.com
              </a>{" "}
              with the subject{" "}
              <strong>&quot;Account Deletion Request&quot;</strong>.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-8 rounded-r-md">
              <h3 className="text-red-800 font-semibold mb-2">
                Important Information & Data Retention
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-red-700 text-sm">
                <li>Account deletion is permanent and cannot be undone.</li>
                <li>
                  All your financial data, receipts, and history will be
                  permanently erased from our servers within{" "}
                  <strong>30 days</strong> of the deletion request.
                </li>
                <li>
                  You can clear local data at any time by uninstalling the app
                  or using the &quot;Clear Data&quot; option in your device
                  settings.
                </li>
                <li>
                  Any active subscriptions must be canceled separately through
                  your app store (Apple App Store or Google Play).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
