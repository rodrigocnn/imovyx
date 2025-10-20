import api from "@/services/api";
import { Session } from "../interfaces";

export const createSession = async (session: Session): Promise<Session> => {
  const response = await api.store("sessao", session);
  return response.data;
};

export const editSession = async (session: Session): Promise<Session> => {
  const response = await api.update("sessao", session.id as string, session);
  return response.data;
};

export const sessionsFindAll = async (id: string): Promise<Session[]> => {
  const response = await api.show("sessao", id);
  return response.data;
};

export const sessionFindOne = async (id: string): Promise<Session> => {
  const response = await api.show("sessao-show", id);
  return response.data;
};

export const sessionDelete = async (id: string): Promise<Session> => {
  const response = await api.delete("sessao", id);
  return response.data;
};
