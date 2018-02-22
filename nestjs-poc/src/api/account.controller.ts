import { Controller, Get, Post, Body, HttpCode, Param, HttpStatus } from "@nestjs/common";
import { UserDTO } from "./models/user.dto";
import { ManagedUserVM } from "./models/manage.user.vm";
import { KeyAndPasswordVM } from "./models/key.password.vm";

@Controller("api")
export class AccountController {

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async registerAccount( @Body() managedUserVM: ManagedUserVM): Promise<void> {

  }

  @Get("activate")
  async activateAccount( @Param("key") key: String): Promise<void> {
  }

  @Get("authenticate")
  async isAuthenticated(): Promise<string> {
    return 'admin'
  }

  @Get("account")
  async getAccount(): Promise<UserDTO> {
    let userDTO: UserDTO = new UserDTO();
    userDTO.id = 'ka12v0';
    return userDTO;
  }

  @Post("account")
  async saveAccount( @Body() userDTO: UserDTO): Promise<void> {

  }

  @Post("account/change-password")
  async changePassword( @Body() password: string): Promise<void> {

  }

  @Post("account/reset-password/init")
  async requestPasswordReset( @Body() mail: string): Promise<void> {

  }

  @Post("account/reset-password/finish")
  async finishPasswordReset( @Body() keyAndPassword: KeyAndPasswordVM): Promise<void> {

  }
}

