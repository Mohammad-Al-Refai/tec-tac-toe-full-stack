import { useState } from "react";
import { validate } from "uuid";
import { Button } from "./Button";

export function JoinGameEntries({ onJoinClicked }: JoinGameEntriesProps) {
  const [gameId, setGameId] = useState("");
  function handleOnClick() {
    if (validate(gameId)) {
      onJoinClicked(gameId);
    } else {
      alert("invalid gameId");
    }
  }
  return (
    <div className="flex col pt-xl5">
      <label htmlFor="gameId">Enter game id</label>
      <input
        placeholder="UUID"
        id="gameId"
        onChange={(e) => setGameId(e.target.value)}
      />
      <Button variant="secondary" onClick={handleOnClick}>
        Join
      </Button>
    </div>
  );
}

interface JoinGameEntriesProps {
  onJoinClicked: (gameId: string) => void;
}
