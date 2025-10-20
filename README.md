# Cricket Honours Board

A Next.js application displaying honours boards for Old Imperials Cricket Club (OICC) and Imperial College Cricket Club (ICUCC), powered by the Play Cricket API.

## Features

- Live player statistics from Play Cricket API
- Switch between OICC and ICUCC clubs
- Top run scorers and wicket takers
- Responsive design with Tailwind CSS
- Docker support for easy deployment

## Prerequisites

- Docker and Docker Compose
- Play Cricket API key

## Setup

1. Clone this repository
2. The `.env.local` file is already configured with:
   - Play Cricket API key
   - Site IDs for both clubs (OICC: 27452, ICUCC: 3597)

## Running with Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# The app will be available at http://localhost:3000
```

## Running without Docker

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
cricket-honours-board/
├── src/
│   ├── app/
│   │   ├── api/stats/       # API routes for Play Cricket
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ClubSelector.tsx # Club selection component
│   │   └── HonoursBoard.tsx # Honours board display
│   ├── lib/
│   │   └── playcricket.ts   # Play Cricket API client
│   └── types/
│       └── cricket.ts       # TypeScript types
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
└── package.json           # Dependencies
```

## Site IDs

- **Old Imperials CC**: 27452
- **Imperial College CC**: 3597

## API Endpoints Used

- Site Details: `/v2/site_details.json`
- Player Stats: `/v2/player_stats.json`
- Matches: `/v2/matches.json`

## Deployment

This project is configured for easy deployment to platforms like Vercel, Netlify, or any Docker-compatible hosting:

1. Push to GitHub
2. Connect to your hosting platform
3. Add environment variables:
   - `PLAY_CRICKET_API_KEY`
   - `OICC_SITE_ID`
   - `ICUCC_SITE_ID`

## License

MIT
