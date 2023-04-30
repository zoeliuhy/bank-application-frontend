export class Transaction {
  id: string | undefined;
  date: string | undefined;
  title: string | undefined;
  amount!: number;
  accountId: string | undefined;
  category: string | undefined;
}
