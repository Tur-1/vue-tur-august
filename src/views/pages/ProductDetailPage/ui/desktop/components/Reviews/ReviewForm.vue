<template>
  <form class="review-form">
    <div class="mb-3 d-flex flex-row align-items-start">
      <img
        src="https://tur-august.herokuapp.com/assets/images/avatars/avatar_male.png"
        alt=""
        width="40"
        class="rounded-circle"
      />
      <div class="form-floating w-100">
        <textarea
          class="form-control form-control-sm w-100"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style="resize: none; margin-left: 6px"
        ></textarea
        ><label for="floatingTextarea">Comment</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-sm">submit</button>
  </form>
</template>
<script setup>
// import { useForm } from "@inertiajs/inertia-vue3";

// const props = defineProps(["productSlug"]);
// let reviewForm = useForm({
//   comment: "",
// });

// const sendComment = () => {
//   reviewForm.post(route("sendComment", { product_slug: props.productSlug }), {
//     onSuccess: (page) => {
//       reviewForm.reset();
//     },
//   });
// };
</script>
