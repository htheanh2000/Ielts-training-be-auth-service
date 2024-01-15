// src/dto/update-user.dto.ts

import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  readonly email?: string;

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
