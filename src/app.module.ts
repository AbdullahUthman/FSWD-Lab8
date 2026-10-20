// app.module.ts - the root module: it only imports the feature modules
import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CoreModule, StudentsModule],
})
export class AppModule {}
