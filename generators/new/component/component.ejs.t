---
to: "src/components/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.vue"
---
<%
if (blocks.indexOf('template') !== -1) {
%><template>
  <div></div>
</template>
<%
}

if (blocks.indexOf('script') !== -1) {
%>
<script>
export default {
  <% if (blocks.indexOf('template') === -1) {
  %>render(h) {
    return <div/>
  }<% } %>
};
</script>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" scoped>
@import '@design';
</style><%
}
%>
