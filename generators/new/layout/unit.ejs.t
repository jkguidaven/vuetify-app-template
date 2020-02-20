---
to: "src/layouts/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.unit.js"
---
<%
  const fileName = h.resolver(name).name
  const importName = h.changeCase.pascal(fileName) + 'Layout'
%>import <%= importName %> from './<%= fileName %>.vue';

describe('@layouts/<%= fileName %>', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const {element} = shallowMount(<%= importName %>, {
      slots: {
        default: slotContent
      }
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
