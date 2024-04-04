import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async redirectUser(email: string, res: Response) {
    // Lấy email để kiểm tra xem người dùng đã có trong hệ thống hay chưa
    const checkExist = await this.userService.findUserByEmail(email);
    if (checkExist) {
      // người dùng đã đăng ký ==> chuyển hướng tới dashboard
      res.redirect('https://cybersoft.edu.vn');
    }
    res.redirect('https://google.com');
    // nếu chưa có sẽ chuyển hướng tới trang đăng ký, còn nếu có thì sẽ tới trang dashboard
  }
}
