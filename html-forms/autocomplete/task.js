class Autocomplete {
  constructor( container ) {
    this.container = container;
    this.input = container.querySelector( '.autocomplete__input' );
    this.searchInput = container.querySelector( '.autocomplete__search' );
    this.list = container.querySelector( '.autocomplete__list' );
    this.valueContainer = container.querySelector( '.autocomplete__value' );
    this.valueElement = container.querySelector( '.autocomplete__text-content' );

    this.registerEvents();
  }

  registerEvents() {
    this.valueContainer.addEventListener( 'click', e => {
      this.searchInput.classList.add( 'autocomplete__search_active' );
      this.list.classList.add( 'autocomplete__list_active' );
      this.searchInput.value = this.valueElement.textContent.trim();
      this.searchInput.focus();

      this.onSearch();
    });


    this.searchInput.addEventListener( 'input', e => this.onSearch());

    this.list.addEventListener( 'click', e => {
      const { target } = e;
      if ( !target.matches( '.autocomplete__item' )) {
        return;
      }

      const { textContent: text } = target,
        { id: value, index } = target.dataset;

      this.onSelect({
        index,
        text,
        value
      });
    });
  }

  onSelect( item ) {
    this.input.selectedIndex = item.index;
    this.valueElement.textContent = item.text;

    this.searchInput.classList.remove( 'autocomplete__search_active' );
    this.list.classList.remove( 'autocomplete__list_active' );
  }

  onSearch() {
    const matches = this.getMatches( this.searchInput.value );

    this.renderMatches( matches );
  }

  renderMatches( matches ) {
    const html = matches.map( item => `
    	<li>
        <span class="autocomplete__item"
        	data-index="${item.index}"
          data-id="${item.value}"
        >${item.text}</span>
      </li>
    `);

    this.list.innerHTML = html.join('');
  }

  // Задание

  getMatches(text) {
    const matches = [];

    //this.input.options = пункты списка select (в виде HTMLCollection)

    Array.from(this.input.options).forEach((elm) => {
      let simbolsText = Array.from(elm.text);

      const isSame = (inputSimbol, i) => {return inputSimbol === simbolsText[i]};
      
      if (Array.from(text).every(isSame)) {
        matches.push({
          text: elm.text, 
          value: elm.value
        })
      };
    }) 

    return matches;
  };

/*
    //Вариант через цикл for

    const matches = [];

    let selectOps = this.input.options;

    for (let i = 0; i < selectOps.length; i++) {
      let selectedText = Array.from(selectOps[i].text);

      const isSame = (inputText, index) => {return inputText === selectedText[index]};
      
      if (Array.from(text).every(isSame)) {
        matches.push({
          text: selectOps[i].text, 
          value: selectOps[i].value
        })
      };
    };

    return matches;
  }
*/
};


new Autocomplete( document.querySelector( '.autocomplete' ));
