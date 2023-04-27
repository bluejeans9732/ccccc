/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function Register() {
  return (
    <form>
      <div className="space-y-12">
        <div className="px-80 pt-8">
          <h2 className="leading-7 text-gray-900 pb-1 text-xl">리뷰를 작성해보세요 ✏️</h2>
          <div className="mt-1 text-base leading-6 text-gray-600">
            Write a review and rate it.
          </div>

          <div className="border-t border-gray-900/10 mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4 mt-6">
              <label htmlFor="username" className="text-sm font-medium leading-6 ml-1 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="block flex-1 border-0 bg-transparent py-1.5 pl-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center ml-2 text-gray-500 sm:text-sm">등록되어있는 이름(고정값)</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="shopname" className="block text-sm font-medium leading-6 ml-1 text-gray-900">
                Shopname
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="shopname"
                    id="shopname"
                    autoComplete="shopname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="매장 이름을 적어주세요."
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="title" className="block text-sm font-medium leading-6 ml-1 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="제목을 적어주세요."
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 ml-1 text-gray-900">
                Write a review.
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={7}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

        
        <div className="w-64 mt-7 grid grid-cols-2">
        <div className="">
        <div className="text-sm font-medium leading-6 ml-1 text-gray-900">Rating stars</div>
        <div className="text-sm leading-6 ml-1 text-gray-400">별점을 매겨보세요.</div>
        </div>  
          <div className="place-self-center">
          <div className="rating rating-md rating-half">
            <input type="radio" name="rating-1" className="rating-hidden" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
        </div>
        </div>
        </div>
        </div>
    </div>
    

      <div className="mt-12 mb-16 mr-80 flex items-center justify-end gap-x-3">
        <label htmlFor="cancel-modal" className="btn btn-outline btn-primary">Cancel</label>
        <label htmlFor="save-modal" className="btn btn-outline btn-primary">Save</label>
      </div>

      <form>
      <input type="checkbox" id="cancel-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg">작성을 취소하였습니다.</h3>
        <div className="modal-action">
        <label htmlFor="cancel-modal" className="btn btn-outline btn-primary"><a href="/reviews">Ok</a></label>
        </div>
        </div>
        </div>
      </form>

      <form>
      <input type="checkbox" id="save-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg">리뷰가 등록되었습니다.</h3>
        <div className="modal-action">
        <label htmlFor="save-modal" className="btn btn-outline btn-primary"><a href="/reviews">Yay!</a></label>
        </div>
        </div>
        </div>
      </form>
    </form>
  )
};
