import { ApiProperty } from "@nestjs/swagger";

export class TokenDto {
    @ApiProperty({
        description: 'The access token for authentication',
        example: 'your_access_token',
    })
    accessToken: string;

    @ApiProperty({
        description: 'The expiration time of the access token in seconds',
        example: 3600,
    })
    expiresIn: number;

    // Include additional fields as needed
    // For example, you might want to send back some user info:
    // @ApiProperty({
    //     description: 'The first name of the user',
    //     example: 'John',
    // })
    // firstName: string;

    // @ApiProperty({
    //     description: 'The last name of the user',
    //     example: 'Doe',
    // })
    // lastName: string;

    // @ApiProperty({
    //     description: 'The email address of the user',
    //     example: 'john.doe@example.com',
    // })
    // email: string;
}
