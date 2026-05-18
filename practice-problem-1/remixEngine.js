const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) return [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let track = arr[i][j];
      result.push({
        ...track,
        source: [i, j],
      });
    }
  }
  console.log("Flattened:", result);
  return result;
}

function scoreTracks(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let track = arr[i];
    let score = track.votes * 10 - Math.abs(track.bpm - 120);
    result.push({
      ...track,
      score: score,
    });
  }
  console.log("Scored:", result);
  return result;
}

function dedupeTracks(arr) {
  let result = [];
  let seenId = [];
  for (let i = 0; i < arr.length; i++) {
    let track = arr[i];
    if (!seenId.includes(track.trackId)) {
      seenId.push(track.trackId);
      result.push(track);
    }
  }
  console.log("Dedupe:", result);
  return result;
}

function enforceArtistQuota(arr, aprNum) {
  let result = [];
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let track = arr[i];
    let artist = track.artist;
    if (!counts[artist]) {
      counts[artist] = 0;
    }

    if (counts[artist] < aprNum) {
      result.push(track);
      counts[artist]++;
    }
  }
  console.log("Quota:", result);
  return result;
}

function buildSchedule(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let track = arr[i];
    result.push({
      slot: i + 1,
      trackId: track.trackId,
    });
  }
  console.log("Scheduled:", result);
  return result;
}

function remixPlaylist(arr, aprNum) {
  let flat = flattenPlaylists(arr);
  let scored = scoreTracks(flat);
  let deduped = dedupeTracks(scored);
  let quota = enforceArtistQuota(deduped, aprNum);
  let schedule = buildSchedule(quota);
  return schedule;
}

console.log(remixPlaylist(playlists, 1));
