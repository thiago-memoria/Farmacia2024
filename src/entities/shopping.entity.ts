import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

@Entity({
  name: 'shoppings',
})
export class ShoppingEntity{

  @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;

  @Column()
  value: string;
  
  @Column()
  storeAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  deliveryTime: string;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.shoppingEntity,{
    eager: true,
    cascade: true
  })
  @JoinTable()
  productEntity: ProductEntity[]

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingEntity,{
    eager: true,
    cascade: true
  })
  userEntity: UserEntity

}
