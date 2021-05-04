const search = instantsearch({
    indexName: 'sounds_bosstalk',
    searchClient: algoliasearch('834NFOMXJB', 'bb368f15d86816f435ce20d0b2880511'),
  });
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: `
          <div class="hit-title">
            <div class="primary-attribute hit-creatureName">
                {{#helpers.highlight}}{ "attribute": "creatureName" }{{/helpers.highlight}}
            </div>
            <div class="secondary-attribute">
                {{#helpers.highlight}}{ "attribute": "expansion" }{{/helpers.highlight}}
            </div>            
            <div class="secondary-attribute">
                {{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}
            </div>

          </div>
          
        `,
      },
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
    }),
  ]);
  
  search.start();
  