export function getVoterData() {
    const apiUrl = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id';
    return fetch(apiUrl).then((res) => res.json()).then((response) => {
      return response.rows;
    });
  }
