import React, { useState } from "react";

import { useGlobalContext } from "../../hooks/useGlobalContext";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const MapLinkInput: React.FC = () => {
  const { setState } = useGlobalContext();

  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (): void => {
    if (value.startsWith("https://www.izurvive.com")) {
      setState((prev) => ({ ...prev, inviteLink: value }));
      setValue("");
    } else {
      alert("Invalid Link");
    }
  };

  return (
    <div className="flex gap-8">
      <Input
        className="w-[300px]"
        id="map-invite-link"
        placeholder="Join with invite link"
        value={value}
        onChange={handleChange}
      />
      <Button className="w-24" onClick={handleSubmit}>
        [ Submit ]
      </Button>
    </div>
  );
};
