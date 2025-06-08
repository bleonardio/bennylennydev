export type TPoem = {
  title: string;
  phrases: TPhrase[];
}

export type TPhrase = {
  id: string;
  lines: string[];
}