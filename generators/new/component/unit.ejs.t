---
to: "src/components/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.unit.js"
---
<%
  let fileName = h.resolver(name).name
  const importName = h.changeCase.pascal(fileName)
  if (fileName.slice(0, 5) === 'base-') {
    fileName = '_' + fileName
  }
%>import <%= importName %> from './<%= fileName %>.vue';

describe('@components/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent();
  });
});
