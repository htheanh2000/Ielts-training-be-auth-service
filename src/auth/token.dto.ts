import { ApiProperty } from "@nestjs/swagger";

export class TokenDto {
    @ApiProperty({
        description: 'The access token for authentication',
        example: 'your_access_token',
    })
    jwt: string;


}
