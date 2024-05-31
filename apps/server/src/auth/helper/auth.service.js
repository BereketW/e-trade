import prisma from "../../helpers/prisma-client";
import { asyncHandler } from "../../common/async-handler";


export async function createUser(data){
    const user  = await prisma.user.create({
        data:data,
    });
    return user;
};