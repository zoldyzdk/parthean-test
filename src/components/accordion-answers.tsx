import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AccordionAnswers() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase text-[11px]
          font-medium hover:no-underline">is my data safe?</AccordionTrigger>
        <AccordionContent className="ml-[12.25px] py-1">
          <p className="text-base font-light mb-4">
            Yes. At Parthean, we prioritize your security and confidentiality at every step. We adopt industry-leading
            encryption methods, including advanced SSL and TLS protocols, to safeguard your personal and financial
            data.Our infrastructure is regularly updated to combat emerging security threats, ensuring that your
            information is always protected with the latest technology.

            Additionally, we operate on a strict no-sharing policy: your data is never sold to third parties or used for
            advertising purposes. Trust is our core principle, and we maintain transparency in all our security
            practices.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase
          text-[11px] font-medium hover:no-underline">Is there a free trial available?</AccordionTrigger>
        <AccordionContent className="ml-[12.25px] py-1 ">
          <p className="text-base font-light mb-4">
            Yes. We provide a 1-month free trial. You can cancel at any time. To continue using Parthean after the 1
            month trial, you will be charged based on the plan you choose: Either $14.99 per month or $119.99 per year.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase
          text-[11px] font-medium hover:no-underline">what is plaid?</AccordionTrigger>
        <AccordionContent className="ml-[12.25px] py-1">
          <p className="text-base font-light mb-4">
            Plaid is a technology platform that enables seamless connections between financial applications and users&apos;
            bank accounts. It provides a secure and reliable way for customers to link their banking information to
            various financial apps for services like budgeting, investing, or lending. We work with Plaid to allow our
            users to view their financial accounts all within the Parthean app.
          </p>
          <Link className="underline transition-opacity duration-200 ease-in hover:opacity-50" href={"/"}>Read more about Plaid here</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase
          text-[11px] font-medium hover:no-underline">what is dwolla?</AccordionTrigger>
        <AccordionContent className="ml-[12.25px] py-1">
          <p className="text-base font-light mb-4">
            Dwolla is a fintech company that provides a platform for businesses to easily manage electronic payments,
            focusing on ACH transfers. It enables efficient and customizable solutions for direct bank transfers,
            including mass payouts and recurring payments. We work with Dwolla to provide our users with a seamless
            approach to money movement, automations and transfers right within the Parthean app.
          </p>
          <Link className="underline transition-opacity duration-200 ease-in hover:opacity-50" href={"/"}>
            Read more about Dwolla here
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
