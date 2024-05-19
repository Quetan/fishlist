import { FC } from 'react';
import { IAchievementIconProps } from '..';
const Winner: FC<IAchievementIconProps> = ({ color, ...props }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' {...props}>
			<path
				fill='#3D405B'
				d='m249.442 294.005-8.645-37.451c-5.291-27.756 14.441-44.167 40.387-44.135l17.144.063-.093-26.22c-.011-5.203-.318-10.78 1.005-15.84l.624-2.419c7.029-27.247 34.664-26.479 56.266-26.492l318.296.013c20.37.02 36.21-.366 47.584 20.26l.388.715c1.701 3.093 3.087 6.66 3.552 10.17l.101.832c.691 5.093.43 10.363.442 15.499l-.347 23.48 18.761-.166c15.826-.327 24.626 2.32 34.173 17.41 8.267 13.068 4.75 25.858 1.403 39.593l-3.352 16.256c6.432 5.112 20.4 52.606 22.175 62.987 6.753 39.5-1.376 88.362-15.565 125.192-22.928 59.518-35.775 107.578-18.693 173.1 3.622 13.894 9.642 26.962 13.693 40.698 7.577 25.688 5.149 68.352.099 95.648 2.152 9.058.298 56.072-.59 65.138-1.765 18.024-18.45 34.914-36.828 35.766l-457.593-.13c-16.867-.828-35.024-17.593-37.376-34.6-1.75-12.658-2.043-61.774 1.912-72.033-4.674-8.163-5.781-20.222-6.442-29.493l-.518-21.702c-.023-30.184 7.278-43.302 16.704-71.458 16.297-48.681 11.752-100.936-4.123-148.936-3.368-10.185-8.112-19.718-11.773-29.748-14.565-39.888-24.387-81.192-17.235-123.752 2.502-14.898 11.208-48.63 24.464-58.245Z'
			/>
			<path
				fill={color}
				d='M274.976 229.64c8-.648 16.347-.093 24.349.432l2.17 29.891-16.62.063-16.601.073c-2.71.011-5.856.331-8.503-.193l-.659-2.912c-2.858-13.484 1.738-24.456 15.864-27.354ZM739.469 278.523l1.206-1.89c-1.401-13.129 12.136-14.953-18.331-17.631l1.642-28.376c9.518-.084 20.297-.962 29.577 1.184 20.723 4.79 10.23 23.732 6.35 35.302-1.195 3.56-1.918 7.235-2.975 10.832l-17.47.58Z'
			/>
			<path
				fill='#F4F1DE'
				d='m739.469 278.523 17.469-.579c-3.084 12.15-4.368 24.98-6.874 37.3-5.658 27.812-17.768 58.711-35.57 81.204l8.021-116.773 16.954-1.152ZM265.274 277.547l36.313.607 8.695 117.179c-26.213-27.714-42.59-80.552-45.008-117.786Z'
			/>
			<path
				fill={color}
				d='M582.67 668.264c3.83.277 7.693.582 11.533.582 16.159 0 19.754-5.998 20.666 13.013l.4 21.714-177.895-.05-29.739-.187-.733-5.725c-2.752-24.411.116-29.193 22.848-28.82l106.957.067c15.1-.007 30.992.974 45.963-.594ZM341.4 767.698l-.117-45.71 343.08.08-.254 26.434c.022 6.426-.424 13.764 1.323 19.97-15.434 2.426-32.349 1.25-47.958 1.262l-99.973-.93c-3.855-.278-7.613-.96-11.493-1.018l-184.608-.088Z'
			/>
			<path
				fill='#F4F1DE'
				d='M249.442 294.005c6.526 36.459 17.075 77.566 41.065 106.97 6.997 8.575 15.37 15.228 23.176 22.937l.072.046 6.28 17.668c20.781 63.916 49.045 110.248 107.527 148.094l30.643 19.246c.558.378 3.32 1.94 3.552 2.42.377.776-.21 34.638-.285 38.297l-23.966-.398c-24.415-.82-47.354-.621-47.482 29.8l.014 24.611-41.406-.029c-23.482-.027-25.944-2.083-26.056 25.491-.029 6.71.1 13.586-.595 20.263-34.395-.093-55.682-5.922-73.616 27.918-4.674-8.163-5.781-20.222-6.442-29.493l-.518-21.702c-.023-30.184 7.278-43.302 16.704-71.458 16.297-48.681 11.752-100.936-4.123-148.936-3.368-10.185-8.112-19.718-11.773-29.748-14.565-39.888-24.387-81.192-17.235-123.752 2.502-14.898 11.208-48.63 24.464-58.245ZM777.131 285.573c6.432 5.112 20.4 52.606 22.175 62.987 6.753 39.5-1.376 88.362-15.565 125.192-22.928 59.518-35.775 107.578-18.693 173.1 3.622 13.894 9.642 26.962 13.693 40.698 7.577 25.688 5.149 68.352.099 95.648-11.909-29.04-23.565-33.566-52.02-33.686l-25.102-.06.328-25.238c.093-3.77.725-7.766.181-11.5l-.117-.714c-1.85-12.005-15.544-8.331-24.084-8.32l-44.524.131-.04-27.633c-.321-19.196-14.899-28.848-32.702-26.83-2.896.329-5.878.258-8.79.276l-19.1-.098c-4.155-.161-8.164-.676-12.348-.58l.601-39.253c.363-2.165 3.89-3.159 5.647-3.973l12.856-5.654c48.019-21.701 91.97-74.322 112.446-123.25 11.794-28.178 6.848-39.173 29.392-62.253 35.782-36.637 43.974-80.603 55.667-128.99Z'
			/>
			<path
				fill='#F4F1DE'
				d='m685.432 768.472 52.773-.322c16.13 1.224 22.23 11.8 22.281 26.767l.03 15.166c.014 19.402 6.18 55.061-22.766 56.283l-427.836-.08c-28.677-.008-45.796 1.944-45.912-34.881l-.03-21.885c0-7.051-.798-15.1.337-22.032l.131-.738c3.456-20.907 25.438-19.233 41.186-19.267l35.774.215 184.608.088c3.88.059 7.638.74 11.493 1.019l99.973.93c15.61-.013 32.524 1.163 47.958-1.263Z'
			/>
			<path
				fill='#3D405B'
				d='M565.134 789.056c7.268-.514 14.538.288 21.786.667l67.95.136c10.19-.008 20.541-.38 30.701.389 14.469 1.094 9.824 20.624 9.906 32.646.213 30.916-8.904 25.584-33.543 25.59l-194.99-.074c-11.24-2.213-8.382-12.807 1.82-13.148l179.418.132c11.207.006 22.676-.519 33.824.648l-.15-32.296c-3.474-.168-6.9-.91-10.4-1.02l-92.46-.016c-5.126.002-11.266.482-16.246-.812-3.324-3.55-1.072-9.455 1.938-12.416l.446-.426Z'
			/>
			<path
				fill={color}
				d='m333.91 159.635 354.692-.04c29.69 1.967 18.372 46.891 17.81 66.931-1.718 61.437-1.63 130.932-14.874 190.975-13.127 59.507-40.15 105.697-88.276 144.89-8.09 6.894-17.206 12.823-26.467 18.006L557 590.47c-12.264 5.93-12.784 4.47-13.496 18.59l-1.06 40.849-62.932-.365-.792-30.008c-1.144-23.566-5.173-21.435-22.563-32.584-62.955-40.36-101.58-82.448-121.712-158.198-8.136-30.613-8.933-63.844-10.968-95.253l-7.587-144.58c-.116-4.067-.794-8.795-.127-12.795l.117-.625c1.528-8.813 9.549-14.571 18.03-15.866Z'
			/>
			<path
				fill='#3D405B'
				d='M597.835 188.211c18.168.71 15.923 19.445-2.597 19.811-22.414-2.472-15.364-18.348 2.597-19.81ZM452.224 188.24l74.546.1c10.464.002 21.856-.889 32.201.236 9.397 1.02 15.208 18.826-9.68 19.9l-65.665-.014c-12.557-.006-25.992.872-38.42-1.032-15.195-2.328-17.07-18.416 7.018-19.19ZM511.053 236.571c11.064-.544 14.965 5.82 19.507 14.429l22.674 40.242c5.401 9.228 4.05 10.852 14.496 12.825l33.408 4.864c12.979 1.683 36.36 2.119 33.07 21.447l-.118.622c-1.967 10.573-18.295 22.453-25.586 29.824-7.186 7.266-13.8 15.211-20.392 23.014-5.928 7.02-4.197 4.277-2.86 13.103l3.332 27.037c1.81 14.79 3.86 45.155-20.522 37.652-9.603-2.953-18.955-8.803-27.713-13.665l-27.512-15.327-41.707 23.204c-5.994 3.305-11.548 6.436-18.268 7.992-26.584-6.8-18.552-33.261-15.222-52.834l3.754-22.155c-3.54-2.973-6.522-6.666-9.608-10.098l-31.01-34.104c-29.752-33.672 7.677-34.189 31.278-37.241 10.194-1.319 20.536-3.29 30.781-3.904 3.16-.19 28.722-60.872 43.298-65.476l4.92-1.45Z'
			/>
			<path
				fill='#F4F1DE'
				d='m512.18 255.874 30.918 51.876c8.038 13.704 12.992 12.525 27.721 14.048l24.794 2.79c6.321.695 12.902 1.132 19.053 2.783-4.485 8.338-11.848 14.981-18.312 21.803l-19.815 21.11c-10.865 11.602-10.63 12.425-8.645 27.098l3.532 25.061c.952 6.466 2.09 12.755 2.307 19.307l-.983.884c-10.001 2.83-43.897-23.655-58.585-27.26-11.728.506-47.242 23.216-62.512 28.557-.367-7.678.651-15.225 1.561-22.84l2.1-17.037c3.65-22.43 5.702-19.777-10.815-37.304l-11.819-13.12c-7.677-8.11-16.763-16.024-22.285-25.804 7.818-2.64 16.6-3.167 24.767-4.063L467 319.526c7.944-1.452 10.264-5.984 13.96-12.526l31.22-51.126Z'
			/>
		</svg>
	);
};
export default Winner;
