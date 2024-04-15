import React from 'react'
import { useDataTable } from '../../../../hooks/useDataTable';
import DataTable from '../../components/DataTable';
import { deleteUser, getAllUsers } from '../../../../services/index/users';
import { images, stables } from '../../../../constants';

export default function Users() {
    const {
        userState,
        currentPage,
        setCurrentPage,
        searchKeyword,
        data: usersData,
        isLoading,
        isFetching,
        isLoadingDeleteData,
        queryClient,
        searchKeywordHandler,
        submitSearchKeywordHandler,
        deleteDataHandler,
      } = useDataTable({
        dataQueryFn: () => getAllUsers(userState.userInfo.token,searchKeyword, currentPage),
        dataQueryKey: "users",
        deleteDataMessage: "User is deleted",
        mutateDeleteFn: ({ slug, token }) => {
          return deleteUser({
            slug,
            token,
          });
        },
      });
    
      // useEffect(() => {
      //   console.log(postsData);
      // }, [postsData]);
    
      return (
        <DataTable
          pageTitle="Manage Users"
          dataListName="Users"
          searchInputPlaceholder="User's email..."
          searchKeywordSubmitHandler={submitSearchKeywordHandler}
          searchKeywordOnChangeHandler={searchKeywordHandler}
          searchKeyword={searchKeyword}
          tableHeaderTitleList={["Name", "Email", "Created At", "Is Verified", "Is Admin",""]}
          isLoading={isLoading}
          isFetching={isFetching}
          data={usersData?.data}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          headers={usersData?.headers}
          userState={userState}
        >
          {usersData?.data.map((user) => (
            <tr key={user._id}>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/" className="relative block">
                      <img
                        src={
                          user?.avatar
                            ? stables.UPLOAD_FOLDER_BASE_URL + user?.avatar
                            : images.userImage
                        }
                        alt={user.name}
                        className="mx-auto object-cover rounded-lg w-10 aspect-square"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  {user.email}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">
                  {user.verified ? "Verified":"Not verified "}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">
                  {user.admin ? "Admin":"Not admin "}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                <button
                  onClick={() => {
                    deleteDataHandler({
                      slug: user._id,
                      token: userState.userInfo.token,
                    });
                  }}
                  disabled={isLoadingDeleteData}
                  type="button"
                  className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </DataTable>
      );
}
