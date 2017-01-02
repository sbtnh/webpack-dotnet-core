export default (dataset = 'js') => {
  const nodes = document.querySelectorAll(`[data-${dataset}]`);
  // transform NodeList in Array => https://davidwalsh.name/nodelist-array
  const nodesArray = [].slice.call(nodes);
  // get distinct value => http://stackoverflow.com/a/35092559
  const unique = [...new Set(nodesArray.map(node => node.dataset[dataset].trim()))];

  // dynamic import js component => http://survivejs.com/webpack/advanced-techniques/understanding-chunks/
  unique.map(node => {
    const components = node.split(' ');
    return components.map(component => {
      return component.length ? Promise.all([
        import(`../${component}`)
      ]) : null;
    });
  });
};
