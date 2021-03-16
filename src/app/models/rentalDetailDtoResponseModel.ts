import { RentalDetailDto } from "./rentalDetailDto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDto[]
}