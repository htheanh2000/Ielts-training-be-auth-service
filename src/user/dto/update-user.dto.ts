// src/dto/update-user.dto.ts

import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'The password for the account',
    minLength: 6
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  readonly password?: string;

  // Add other optional fields that can be updated, if needed
  // For example, a 'name' field:
  // @IsOptional()
  // @IsString()
  // readonly name?: string;

  // Note: Decorators like @IsEmail, @IsString, etc., are used for validation.
  // If a field is optional, use @IsOptional().
}
