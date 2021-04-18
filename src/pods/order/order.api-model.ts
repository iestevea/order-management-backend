export interface Order {
  id: string;
  date: string;
  client: string;
  lines: Line[];
}

export interface Line {
  id: string;
  price: number;
  status: 'valid' | 'invalid';
}
