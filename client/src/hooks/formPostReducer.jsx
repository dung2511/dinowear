import dayjs from "dayjs";
import { toast } from "react-toastify";
export const initialState = {
  positionJob: "",
  levelJob: "",
  careerJob: "",
  workJob: "",
  experienceJob: "",
  minSalary: "",
  maxSalary: "",
  salaryNegotiable: 0,
  descriptionJob: "",
  candidateRequirement: "",
  benefit: "",
  timeWork: "",
  quantity: "",
  workplace: "",
  timeCreated: dayjs(new Date()),
  expirationDate: dayjs(new Date()),
  gender: "",
  isValid: false,
};
export function formPostReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_POST":
      if (
        !state.positionJob ||
        !state.levelJob ||
        !state.careerJob ||
        !state.workJob ||
        !state.experienceJob
      ) {
        toast.error("Vui lòng nhập đầy đủ thông tin !!", {
          position: "top-right",
        });
        return { ...state, isValid: false };
      }
      if (state.salaryNegotiable == 0) {
        if (state.minSalary === "") {
          toast.error("Vui lòng nhập mức lương tối thiểu !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (Number(state.minSalary) <= 10000) {
          toast.error("Mức lương tối thiểu phải lớn hơn 10.000đ !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (isNaN(state.minSalary) && isNaN(state.maxSalary)) {
          toast.error("Mức lương phải là số !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (state.maxSalary === "") {
          toast.error("Vui lòng nhập mức lương tối đa !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (Number(state.maxSalary) <= Number(state.minSalary)) {
          toast.error("Mức lương tối đa phải lớn hơn mức lương tối thiểu !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
      }
      if (
        !state.descriptionJob ||
        !state.candidateRequirement ||
        !state.benefit ||
        !state.timeWork ||
        !state.quantity ||
        !state.workplace
      ) {
        toast.error("Vui lòng nhập đầy đủ thông tin !!", {
          position: "top-right",
        });
        return { ...state, isValid: false };
      }
      return {
        ...state,
        isValid: true,
      };
    case "CREATE_POST":
      if (
        !state.positionJob ||
        !state.levelJob ||
        !state.careerJob ||
        !state.workJob ||
        !state.experienceJob
      ) {
        toast.error("Vui lòng nhập đầy đủ thông tin !!", {
          position: "top-right",
        });
        return { ...state, isValid: false };
      }
      if (state.salaryNegotiable == 0) {
        if (state.minSalary === "") {
          toast.error("Vui lòng nhập mức lương tối thiểu !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (Number(state.minSalary) <= 10000) {
          toast.error("Mức lương tối thiểu phải lớn hơn 10.000đ !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (isNaN(state.minSalary) && isNaN(state.maxSalary)) {
          toast.error("Mức lương phải là số !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (state.maxSalary === "") {
          toast.error("Vui lòng nhập mức lương tối đa !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
        if (Number(state.maxSalary) <= Number(state.minSalary)) {
          toast.error("Mức lương tối đa phải lớn hơn mức lương tối thiểu !!", {
            position: "top-right",
          });
          return { ...state, isValid: false };
        }
      }
      if (
        !state.descriptionJob ||
        !state.candidateRequirement ||
        !state.benefit ||
        !state.timeWork ||
        !state.quantity ||
        !state.workplace
      ) {
        toast.error("Vui lòng nhập đầy đủ thông tin !!", {
          position: "top-right",
        });
        return { ...state, isValid: false };
      }
      return {
        ...state,
        isValid: true,
      };
    case "DELETE_POST":
      return {
        ...state,
      };
    default:
      return state;
  }
}
