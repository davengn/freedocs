import { Affix, Button } from "@mantine/core";

export default function ShareBranding() {
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Button
        variant="default"
        component="span"
      >
        Powered by Freedocs
      </Button>
    </Affix>
  );
}
