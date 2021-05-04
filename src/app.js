function addSounds(hit){
  res = ``;
  for (const element of hit.sounds){
    fileList = element.filePath.split("/");
    fileName = fileList[fileList.length - 1]
    res += `
      <div class="sound-item">
        <div class="sound-left">
          <div class="sound-detail">
            ${element.id}
          </div>
          <div class="sound-detail">
            ${fileName}
          </div>
        </div>
        <div class="sound-right">
          <div class="sound-detail">
            ${element.expansion}
          </div>
          <div class="sound-detail">
            ${element.location}
          </div>
          <audio class="sound-player" controls preload="none">
            <source src="../BossTalk/${element.filePath}" type="audio/ogg">
          </audio>
        </div>
      </div>
    `
  }
  return res
}

const search = instantsearch({
    indexName: 'creatures_bosstalk',
    searchClient: algoliasearch('834NFOMXJB', 'bb368f15d86816f435ce20d0b2880511'),
  });
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item(hit){
          let res = `
            <div class="hit-title" data-toggle="collapse" data-target="#creature-${hit.__hitIndex}">
              <div class="primary-attribute hit-creatureName">
                  ${instantsearch.highlight({ attribute: 'creatureName', hit:hit})}
              </div>
              <div class="secondary-attribute">
                  ${hit.positions[0].expansion}
              </div>            
              <div class="secondary-attribute">
                ${hit.positions[0].location}
              </div>
          
            </div>
            <div id="creature-${hit.__hitIndex}" class="collapse" data-parent="#hits-parent">
              ${addSounds(hit)}
            </div>   
          `
          return res;
        }
      },
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
    }),
  ]);
  
search.start();

/*
  item: `
  <div class="hit-title" data-toggle="collapse" data-target="#creature-{{ __hitIndex}}">
    <div class="primary-attribute hit-creatureName">
        {{#helpers.highlight}}{ "attribute": "creatureName" }{{/helpers.highlight}}
    </div>
    <div class="secondary-attribute">
        {{#helpers.highlight}}{"attribute":"positions"}{{/helpers.highlight}}
    </div>            
    <div class="secondary-attribute">
        {{#helpers.highlight}}{ "attribute": "expansion" }{{/helpers.highlight}}
    </div>

  </div>
  <div id="creature-{{ __hitIndex}}" class="collapse" data-parent="#hits-parent">
    <div class="sound_item">
      hello
    </div>
  </div>
  
`,*/
