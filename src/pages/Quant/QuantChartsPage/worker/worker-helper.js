
// web worker builder
export function loadWorker(worker){
  const code = worker.toString();
  const blob = new Blob(['('+code+')()'])

  return new Worker(URL.createObjectURL(blob))
}