import { MetodePembayaranInput, MetodePembayaranProp, MetodePembayaranUpdate } from "../types/metode_pembayaran";

const prisma = require("../lib/prisma")

export default class MetodePembayaranController{
  async insertMetodePembayaran(metodePembayaranInput: MetodePembayaranInput): Promise<boolean>{
    try {
      await prisma.metode_pembayaran.create({
        data: {
          nama: metodePembayaranInput.nama
        }
      });

      return true;
    } catch (error) {

      console.error("Error inserting Metode Pembayaran:", error);
      throw new Error("Failed to insert Metode Pembayaran");      
    }
  }

  async listMetodePembayaran(): Promise<MetodePembayaranProp[]> {
    try {
      const metodePembayaranList = await prisma.metode_pembayaran.findMany({
        orderBy: {
          nama: 'asc'
        }
      });

      return metodePembayaranList.map((jp: any) => ({
          id: jp.id,
          nama: jp.nama
      }));


    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch Metode Pembayaran list");
    }
  };

  async getMetodePembayaranById (id: number): Promise<MetodePembayaranProp | null>{
    try {
      const metodePembayaran = await prisma.metode_pembayaran.findUnique({
        where: {
          id: id
        }
      });

      if (!metodePembayaran) {
        return null;
      }

      return {
        id: metodePembayaran.id,
        nama: metodePembayaran.nama
      };
    } catch (error) {

      console.log(error);
      throw new Error("Failed to fetch Metode Pembayaran by ID");
    }
  }

  async updateMetodePembayaran (id: number, data: MetodePembayaranUpdate): Promise<boolean> {
    try {
      await prisma.metode_pembayaran.update({
        where: {
          id: id
        },
        data: {
          nama: data.nama
        }
      });

      return true;

    } catch (error) {
      console.log(error);
      throw new Error("Failed to update Metode Pembayaran");
    }
  }
}