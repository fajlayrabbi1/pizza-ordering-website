
import Image from "next/image";

const Cart_Item = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center bg-primary w-11/12 h-20 rounded-md">
        <div className="bg-tertiary m-1 rounded-full p-1">
          <Image src="/23.png" alt="logo" width={50} height={50} />
        </div>

        <div className="flex flex-col justify-center">
            <p className="font-bold text-white">Chicken Burger</p>
            <p className="font-semibold text-white">$ 15.99</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <p className=" text-white">Quan.</p>
            <p className="font-bold ring-1 p-1 bg-tertiary text-black 
            h-7 w-9 flex justify-center items-center rounded-md">1</p>

        </div>


        <div className="mr-4">
        <Image src="/trash.png" alt="logo" width={20} height={20} />
        </div>



      </div>
    </div>
  );
};

export default Cart_Item;
