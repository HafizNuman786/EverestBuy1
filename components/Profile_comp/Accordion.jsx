import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <div className="col-span-12 grid grid-cols-12 rounded-lg bg-white px-4 py-6">
        <div className="col-span-12">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div className="text-base text-gray-800"> My Order</div>
            </AccordionHeader>
            <AccordionBody>
              <div
                className="col-span-12 border-0 py-10"
                data-te-collapse-item=""
                data-te-collapse-show=""
                aria-labelledby="flush-headingOne"
                data-te-parent="#accordionFlushExample"
              >
                <div className="col-span-12 grid grid-cols-12">
                  <div className="col-span-6 text-center sm:col-span-6 md:col-span-3 lg:col-span-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className="text-2xl text-gray-500">Unpaid</p>
                  </div>
                  <div className="col-span-6 text-center sm:col-span-6 md:col-span-3 lg:col-span-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className="text-2xl text-gray-500">To Be Shipped</p>
                  </div>
                  <div className="col-span-6 text-center sm:col-span-6 md:col-span-3 lg:col-span-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className="text-2xl text-gray-500">Shipped</p>
                  </div>
                  <div className="col-span-6 text-center sm:col-span-6 md:col-span-3 lg:col-span-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <p className="text-2xl text-gray-500">To be reviewed</p>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="col-span-12">
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="text-base text-gray-800">My Appeal</div>
            </AccordionHeader>
            <AccordionBody>
              <div className="px-5 py-4">
                Placeholder content for this accordion, which is intended to
                demonstrate the.
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="col-span-12">
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
             <div className="text-base text-gray-800"> In Dispute</div>
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </Fragment>
  );
}
