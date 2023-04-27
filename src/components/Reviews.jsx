export default function Reviews() {
    return (
        <div className="w-full h-full">
        <h2 className="leading-7 text-gray-900 text-lg mt-5 ml-3 pb-1">리뷰게시판 🏷️</h2>
        <div className="overflow-x-auto mb-10 h-3/4">
        <table className="table w-full mt-5">
          {/* head */}
          <thead>
            <tr>
              <th>date</th>
              <th>name</th>
              <th>title</th>
              <th>rating stars</th>
              <th>more</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
                <th> 2023.04.11</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-1" className="rating-hidden" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                <div class="flex-none">
                    <label htmlFor="datails-modal" className="btn btn-ghost btn-xs">details</label>
                </div>
                </th>
            </tr>
            
    </tbody></table></div>
    
    <div className="flex mt-12 mb-12 mr-10 justify-end ">
    <button className="btn btn-outline btn-primary"><a href="/register">리뷰 작성하기</a></button>
    </div>

    {/* 디테일 모달 */}
    <form>
        <input type="checkbox" id="datails-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="datails-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Title</h3>
                <p className="py-4">리뷰를 모달창을 사용해 전체보기로 볼 수 있습니다.</p>
            </div>
        </div>
    </form>
            
</div>
)};
