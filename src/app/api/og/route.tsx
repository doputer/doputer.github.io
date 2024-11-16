import { ImageResponse } from 'next/og';

const OGOptions = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          padding: '50px 200px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: 'black',
          backgroundColor: 'white',
          fontSize: 128,
          textAlign: 'center',
        }}
      >
        🏷️
      </div>
    ),
    OGOptions
  );
}
