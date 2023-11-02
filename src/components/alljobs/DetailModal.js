import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailModal = ({ job }) => {
  const handleSumbmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const company = form.company.value;

    toast(`Sent to ${company}`);
  };
  return (
    <div>
      <input type="checkbox" id={job?.name} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="text-slate-600 text-4xl mb-5 font-bold font-serif fonts"> Application Submit </h1>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSumbmit} >
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="text-xl font-serif text-slate-500"
                    >
                      Job Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-[#00ae87] w-full border-2 py-3 mt-1 mb-3 text-slate-600 text-lg font-semi-bold px-3 "
                      defaultValue={job?.name}
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="text-xl font-serif text-slate-500"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="border-[#00ae87] w-full border-2 py-3 mt-1 mb-3 text-slate-600 text-lg font-semi-bold px-3 "
                      defaultValue={job?.company}
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="text-xl font-serif text-slate-500"
                    >
                      Jobs Details
                    </label>
                    <textarea
                      type="text"
                      name="name"
                      className="border-[#00ae87] w-full border-2 py-3 mt-1 mb-3 text-slate-600 text-lg font-semi-bold px-3 "
                      defaultValue={job?.details}
                      id="recipient-name"
                    />
                  </div>

                  <div className="modal-action" htmlFor={job?.name}>
                    <label
                      htmlFor={job?.name}
                      className="bg-slate-600 px-3 py-2 rounded text-white"
                    >
                      close
                    </label>
                    <input
                     htmlFor={job?.name}
                      className="btn1 py-2 px-3"
                      type="submit"
                      value={"Submit"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
