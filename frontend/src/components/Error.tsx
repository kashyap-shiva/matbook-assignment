export default function Error({ message }: { message: string }) {
  return <p className="text-center text-red-600 py-6">{message}</p>;
}
