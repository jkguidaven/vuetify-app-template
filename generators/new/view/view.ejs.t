---
to: "src/views/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const titleName = h.changeCase.title(name)
%><template>
  <Layout>
    <%= titleName %>
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue';

export default {
  page: {
    title: '<%= titleName %>',
    meta: [{
      name: 'description',
      content: 'The <%= titleName %> page.'
    }]
  },

  components: {
    Layout
  }
};
</script>
<%

if (useStyles) { %>
<style lang="scss" scoped>
@import '@design';
</style>
<% } %>
