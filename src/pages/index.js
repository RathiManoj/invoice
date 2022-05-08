import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <div>
        Invoice App
      </div>
      <div>
        {JSON.stringify(message)}
      </div>
    </div>
  )
}
