"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Link from "next/link";

export default function Intro({ events }) {
  const [open, setOpen] = useState(null);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          zoom={9}
          center={
            events && events.length
              ? { lat: events[0].latitude, lng: events[0].longitude }
              : { lat: 49.8397, lng: 24.0297 }
          }
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          {events.map((event) => (
            <AdvancedMarker
              key={event.id}
              position={{ lat: event.latitude, lng: event.longitude }}
              onClick={() => setOpen(event)}
            >
              <Pin background={"grey"} borderColor={"green"} glyphColor={"#08c2af"} />
            </AdvancedMarker>
          ))}
          {open && (
            <InfoWindow
              position={{ lat: open.latitude, lng: open.longitude }}
              onCloseClick={() => setOpen(null)}
            >
              <Link href={`/events/${open.id}`}><p>{open.title}</p></Link>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
