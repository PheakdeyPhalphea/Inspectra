import VerifyComponent from "@/components/VerifyComponent/VerifyComponent";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

export default function page() {
  return (
    <main className="h-screen w-full items-center flex-col   text-center bg-primary_color">
      {/* title */}
      <section className="w-full px-[100px]">
        <p className="text-[60px] text-text_color_light font-semibold leading-[1.2]">
          Verify Your <br />
          <span className="font-normal">Account</span>
        </p>
        <p className="text-text_body_16 text-ascend_color leading-[1.4] mt-2">
          To gain more access to our features
        </p>
      </section>
      <section className=" flex-col justify-around p-5 h-[400px] mx-auto w-[600px] rounded-[20px] bg-text_color_dark">
        <div className="flex justify-between m-5">
          <p className="text-text_header_34 text-text_color_light ">
            Verification
          </p>
          <Link
            href={"/signup"}
            className="text-text_header_34 text-text_color_light items-center"
          >
            <RxCross2 className="h-full" />
          </Link>
        </div>
        <div>
          <p className="text-text_color_desc_light text-text_body_16 py-5">
            Enter your 6 digits code that you received on your email.
          </p>
        </div>
        {/* form for otp */}
        <VerifyComponent  />
        <p className="text-text_body_16 text-text_color_light mt-5">If you did&apos;t receive a code! <br /> <span className="text-link_color">Resend</span></p>
      </section>
    </main>
  );
}
