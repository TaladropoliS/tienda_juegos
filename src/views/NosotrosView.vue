<template>
  <div class="nosotros p-3">
    <h3>Nosotros</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquam aliquid beatae blanditiis consequatur cum
      dolore dolorum, eaque, excepturi fugiat impedit incidunt itaque iure modi natus nobis obcaecati odit quae quam quod
      rerum saepe sint tenetur vitae voluptate voluptatum. Ab accusantium aperiam commodi dolore dolorum et maiores. At
      commodi consequatur, cumque doloremque dolores magnam nobis quod. Accusantium assumenda delectus dignissimos hic
      itaque, libero nobis possimus provident quisquam quos rem, rerum, sed totam. Animi at delectus deserunt enim fugit
      ipsum itaque quia quibusdam recusandae suscipit. Accusantium aliquam est laboriosam maiores, minima mollitia rem sint
      vitae voluptate voluptates? Aliquam beatae distinctio earum facilis illo non nulla officiis, optio perferendis
      perspiciatis quo tenetur ullam? Deleniti, dolor doloremque error nobis officiis reiciendis velit vitae. Architecto at
      cupiditate eligendi est explicabo hic minus, mollitia nisi nostrum odio odit quaerat, quia quos repellat sequi tenetur
      unde voluptatum? Dolore doloremque eveniet facere fugiat in inventore itaque laboriosam laborum libero molestias
      nesciunt nostrum odit placeat provident quas quod quos recusandae reiciendis reprehenderit sapiente similique suscipit,
      tenetur totam. Accusamus aperiam autem delectus ducimus enim, est facilis fugit labore maiores maxime non pariatur quas
      repudiandae. Accusamus aut cum, modi nam natus quibusdam veniam voluptates! Ex fuga neque reprehenderit. Qui.</p>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'Nosotros',
    computed: {
      ...mapState(['titulo'])
    }
  }
</script>
