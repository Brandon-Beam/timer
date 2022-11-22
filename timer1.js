const args = process.argv.slice(2)
for (const arg of args) {
  if (Number(arg) && Number(arg) >= 0) {
    let time = arg * 1000
    setTimeout(() => process.stdout.write('\x07'), time)
  }

}