import { ConfigurationButtons } from './ConfigurationButtons';
import { DataDisplay } from './DataDisplay';
import { LastUpdatedDisplay } from './LastUpdatedDisplay';
import { HeaderStylized } from './styles';

export function Header({ gridarea }: { gridarea: string }) {
	return (
		<HeaderStylized gridarea={gridarea}>
			<LastUpdatedDisplay />
			<DataDisplay />
			<ConfigurationButtons />
		</HeaderStylized>
	);
}
