export function getCpuUsage() {
  const {user: utime, system: stime} = process.cpuUsage();

  return (utime + stime) * 10; // to ms
}
