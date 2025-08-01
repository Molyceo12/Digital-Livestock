import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Users } from "./user";
import { Cows } from "./cows";

@Entity("orders")
@Unique(["user_id", "cow_id"])
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: number;

  @Column()
  cow_id!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  ordered_at!: Date;

  @ManyToOne(() => Users, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: Users;

  @ManyToOne(() => Cows, { onDelete: "CASCADE" })
  @JoinColumn({ name: "cow_id" })
  cow!: Cows;

  @Column({ default: "pending" })
  status!: string;
}
