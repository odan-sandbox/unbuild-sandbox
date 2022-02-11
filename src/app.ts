import { sum } from "./sum";

export async function main(): Promise<void> {
  console.log(sum(10, 20));
  console.log("poyo");
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
