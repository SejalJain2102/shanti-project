import React from 'react'

const demo = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='flex flex-col gap-3 p-3 max-w-96 w-full bg-blue-400'>
        <p className='flex justify-between items-center px-2'>
          <h1>Change Password</h1>X
        </p>
        <div className="flex flex-col relative w-full">
          <input
            // type={showPassword ? "text" : "password"}
            placeholder="Old Password"
            className="border border-gray-300 p-2 max-w-full mt-2"
          //  value={oldPassword}
          //  onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          {showPassword ? (
            <VisibilityIcon
              // onClick={toggleIcon}
              className="absolute right-3 top-5 cursor-pointer"
           />
         ) : (
           <VisibilityOffIcon
            //  onClick={toggleIcon}
             className="absolute right-3 top-5 cursor-pointer"
           />
         )}
       </div>
       
        <p className='flex justify-evenly'>
          <button className='bg-red-400 p-2 px-4 font-semibold rounded-full'>Delete</button>
          <button className='bg-red-400 p-2 px-4 font-semibold rounded-full'>Cancel</button>
        </p>
      </div>
    </div>
  )
}

export default demo
