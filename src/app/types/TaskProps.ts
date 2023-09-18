export type TaskProps = {
  id: string;
  position?: number;
  name: string;
  description?: string;
  startTime?: string;
  endTime?: string;
};

export type TasksProps = {
  id: string;
  position: number;
  name: string;
  description: string;
  startTime: string;
  endTime?: string;
}[];
