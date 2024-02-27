import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MySqlConfigModule } from 'src/config/database/mysql/config.module';
import { MySqlConfigService } from 'src/config/database/mysql/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useFactory: (mysqlConfig: MySqlConfigService) => ({
        type: 'mysql',
        host: mysqlConfig.host,
        port: mysqlConfig.port,
        username: mysqlConfig.username,
        password: mysqlConfig.password,
        database: mysqlConfig.database,
        entities: [],
        synchronize: true,
      }),
      inject: [MySqlConfigService],
    } as TypeOrmModuleOptions),
  ],
})
export class MySQLModule {}
