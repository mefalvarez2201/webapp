import prisma from "@/lib/prisma";

export async function getAllProducts() {
    return await prisma.product.findMany();
}

export async function getProductsByCategory(category: string) {
    return await prisma.product.findMany({
        where: {
            categoryId: Number(category),
        },
    });
}