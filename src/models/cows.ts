import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cows {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name?: string;

  @Column()
  age!: number;

  @Column({ name: "category_id" })
  category!: number;

  @Column({ name: "owner_id" }) 
  owner!: number;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column("numeric", { precision: 10, scale: 2 })
  price!: number;

  @Column("numeric", { precision: 6, scale: 2, nullable: true })
  weight?: number;

  @Column({ nullable: true })
  health_status?: string;

  @Column({ nullable: true })
  breed?: string;

  @Column({ default: "Available" })
  purchase_status!: string;

  @Column("text", { array: true, nullable: true })
  photos?: string[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
}
