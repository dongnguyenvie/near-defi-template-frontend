import { IRequestApproveProps } from "./types"

export const RequestApprove = ({ requestApprove }: IRequestApproveProps) => {
  return (
    <>
      <div className="mx-auto not-allow w-[472px] min-h-[120px] p-6 mt-6 rounded-2xl bg-slate-100">
        <div className="flex w-full">
          <img
            className="max-w-full w-[112px] h-[72px] rounded-lg mr-4"
            src="/assets/my-assets/accessApprove.en.ab6742bf.gif"
            alt=""
          />
          <div className="reason flex flex-col">
            <h3 className="text-black text-base font-medium">
              This asset has not been approved yet
            </h3>
            <p className="mt-4 text-base">
              For the first deposit of one asset, please click the button below to approve it first.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={requestApprove}
        className="mx-auto mt-[29px] block rounded-full bg-pink-500 text-white w-[248px] h-[54px]"
      >
        Approve
      </button>
    </>
  )
}
