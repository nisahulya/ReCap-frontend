import { CarDetailDto } from "./carDetailDto";
import { ResponseModel } from "./responseModel";

export interface CarDetailDtoResponseModel extends ResponseModel{
 data:CarDetailDto[]
}