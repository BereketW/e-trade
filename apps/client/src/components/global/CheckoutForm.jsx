import React, { useMemo, useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import useMutation from "@app/client/hooks/use-mutation";
import { createOrder } from "@app/client/data/order.service";
import { useCart } from "@app/client/store/cart";

export default function CheckoutForm() {
  const router = useRouter();
  const { startMutation, isMutating } = useMutation();
  const { cartProducts } = useCart();
  const [billingDetails, setBillingDetails] = useState({
    address: "",

    postalCode: "",
    city: "",
    state: "",
    country: "",
  });

  const totalPrice = useMemo(() => {
    let total = 0;
    cartProducts.forEach((item) => {
      total += item.totalPrice;
    });
    return total;
  }, [cartProducts]);

  function onStartProcess() {
    startMutation(async () => {
      const result = await createOrder({
        orderItems: cartProducts.map((orderItem) => ({
          productId: orderItem.id,
          quantity: orderItem.amount,
          totalPrice: totalPrice,
        })),
        billingDetails: billingDetails, // Pass billing details here
      });
      // console.log({ result });

      if (!result.success) {
        return "Error";
      } else {
        router.push(result.data?.checkout_url ?? "#");
      }
    });
  }

  const handleInputChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-white  rounded-lg md:max-w-2xl ">
      <div className="md:flex">
        <div className="w-full p-4 px-5  flex flex-col gap-6 py-5">
          <h1 className="text-2xl mb-3 font-bold">Billing details</h1>

          <form action="">
            {/* <div className="grid md:grid-cols-2 md:gap-4 mb-3 ">
              <Input
                name={"firstName"}
                label={"First Name"}
                value={billingDetails.firstName}
                onChange={handleInputChange}
              />
              <Input
                name={"lastName"}
                label={"Last Name"}
                value={billingDetails.lastName}
                onChange={handleInputChange}
              />
            </div> */}
            {/* <Input
              label={"Company Name"}
              name={"companyName"}
              value={billingDetails.companyName}
              onChange={handleInputChange}
            /> */}
            <Input
              name={"address"}
              label={"Address"}
              onChange={handleInputChange}
            />
            {/* <Input
              name={"apartment"}
              label={"Apartment"}
              onChange={handleInputChange}
            /> */}
            <div className="grid md:grid-cols-3 md:gap-2 my-3">
              <Input
                name={"postalCode"}
                label={"Postal Code"}
                onChange={handleInputChange}
              />
              <Input
                name={"city"}
                label={"City"}
                onChange={handleInputChange}
              />
              <Input
                name={"state"}
                label={"State"}
                onChange={handleInputChange}
              />
            </div>
            <Input
              name={"country"}
              label={"Country"}
              onChange={handleInputChange}
            />
            {/* <Input
              namee={"phoneNumber"}
              label={"Phone Number"}
              onChange={handleInputChange}
            /> */}
          </form>
          <button
            type="submit"
            onClick={onStartProcess}
            className="mt-5 w-full rounded font-medium text-base bg-color-primary hover:scale-105 hover:rounded-xl transition-all ease-in-out duration-200 text-white py-5"
          >
            Process checkout
          </button>
        </div>
      </div>
    </div>
  );
}
