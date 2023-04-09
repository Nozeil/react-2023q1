interface Item {
  id: number;
  volumeInfo: {
    title: string;
    subtitle: string;
  };
}

export interface Data {
  items: Item[];
}
