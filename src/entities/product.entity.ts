import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { ShoppingEntity } from './shopping.entity';
import { CategoryEntity } from './category.entity';


@Entity({
  name: 'product',
})  
export class ProductEntity {

  @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;

  @Column()
  description: string;
  
  @Column()
  price: string;

  @Column()
  kind: string;

  @Column()
  discount: boolean;
  
  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.productEntity,{
    eager: true,
    cascade: true
})
  categoryEntity: CategoryEntity;

  @ManyToOne(() => ShoppingEntity, (shoppingEntity) => shoppingEntity.productEntity,{
    eager: true,
    cascade: true
  })
  shoppingEntity: ShoppingEntity;
}
