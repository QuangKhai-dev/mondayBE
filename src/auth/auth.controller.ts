import { Controller, Get, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallBack(@Request() req: any, @Res() res: Response) {
    console.log(req);
    this.authService.redirectUser(req.user.email, res);
    // res.redirect('https://google.com');
  }
}
