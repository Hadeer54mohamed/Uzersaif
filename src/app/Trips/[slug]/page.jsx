"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function TripDetails() {
  const { slug } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "trip" && slug.current == $slug][0]`,
        { slug }
      )
      .then(setTrip);
  }, [slug]);

  if (!trip) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
      <img
        src={urlFor(trip.image).url()}
        className="rounded-xl mb-6"
      />
      <p>{trip.description}</p>
    </div>
  );
}
