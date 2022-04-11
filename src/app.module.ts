import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nodeaws:LucasAmaral7@cluster0.i75j4.mongodb.net/sradmbackend?retryWrites=true&w=majority',
    { useNewUrlParser: true}),
    JogadoresModule,
    CategoriasModule,
    
],
  controllers: [],
  providers: [],
})
export class AppModule {}

