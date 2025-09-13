import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Schedule = () => {
  const data = [
    { day: "Monday", subject: "Math", time: "10:00 - 11:30" },
    { day: "Tuesday", subject: "History", time: "12:00 - 13:30" },
    { day: "Wednesday", subject: "Physics", time: "14:00 - 15:30" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-white">Schedule</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.day}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;
