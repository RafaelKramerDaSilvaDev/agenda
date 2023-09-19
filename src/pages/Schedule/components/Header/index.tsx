import { ConfigurationButtons } from "./ConfigurationButtons";
import { DataDisplay } from "./DataDisplay";
import { LastUpdatedDisplay } from "./LastUpdatedDisplay";
import { HeaderStylized } from "./styles";

export function Header({ gridArea }: { gridArea: string }) {
  return (
    <HeaderStylized gridArea={gridArea}>
      <LastUpdatedDisplay />
      <DataDisplay />
      <ConfigurationButtons />
    </HeaderStylized>
  );
}
