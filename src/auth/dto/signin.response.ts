import { ApiProperty } from "@nestjs/swagger"

export class SigninResponseDto {
  @ApiProperty()
  access_token: string
}