// import { User } from "~~/models";

export const setUser = (user: any): void =>
  localStorage.setItem("user", JSON.stringify(user));
export const getUser = (): any | {} => {
  if (localStorage.getItem("user")) {
    return JSON.parse(String(localStorage.getItem("user")));
  } else {
    return {};
  }
};

export const setToken = (token: string): void => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    console.log("🚀 ~ file: local-storge.ts:19 ~ error:", error);
  }
};
export const getToken = () => {
  try {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return null;
    }
  } catch (error) {}
};

export const setLang = (language: string): void => {
  try {
    localStorage.setItem("lang", language);
  } catch (error) {
    console.log("🚀 ~ setLang ~ error:", error);
  }
};
export const getLang = (): string | null => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  } else {
    setLang("ar");
    return localStorage.getItem("lang") ? localStorage.getItem("lang") : "ar";
  }
};

export const setProfile = (language: string): void =>
  localStorage.setItem("lang", language);
export const getProfile = (): string | null => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  } else {
    setLang("ar");
    return localStorage.getItem("lang");
  }
};
