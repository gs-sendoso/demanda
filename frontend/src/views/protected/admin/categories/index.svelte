<script>
  import { Navigate } from "svelte-router-spa";

  import PageHeader from "../../../components/protected/page_header.svelte";
  import ListCategories from "./list/index.svelte";
</script>

<PageHeader title="Categories">
  <Navigate to="/admin/categories/new" styles="btn-primary">
    <svg viewBox="0 0 20 20" fill="currentColor" class="plus w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clip-rule="evenodd" />
    </svg>
    Add category
  </Navigate>
</PageHeader>

<ListCategories />
