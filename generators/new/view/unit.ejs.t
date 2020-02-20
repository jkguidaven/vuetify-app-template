---
to: "src/views/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.unit.js"
---
<%
  const fileName = h.resolver(name).name
  const importName = h.changeCase.pascal(fileName)
%>import <%= importName %> from './<%= fileName %>.vue';

describe('@views/<%= fileName %>', () => {
  it('is a valid view', () => {
    expect(<%= importName %>).toBeAViewComponent();
  });
});
