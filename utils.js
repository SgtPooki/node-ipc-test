export function getCpuUsage() {
  const {user: utime, system: stime} = process.cpuUsage();

  return (utime + stime) * 10; // to ms
}

export function argv() {
  const workers_count  = process.argv[2]*1 || 1;
  const parallel       = process.argv[3]*1 || 1;
  const payload_size   = process.argv[4]*1 || 256;
  const messages_count = 20000;

  return {
    workers_count,
    parallel,
    payload_size,
    messages_count
  }
}
