<script>
  import BasicFields from "./basic.svelte";
  import ContentFields from "./content.svelte";
  import ExtraFields from "./extra.svelte";
  import FormButtons from "../../../../components/forms/buttons.svelte";

  export let category = {};
  export let submitText = "";
  export let disableAction = false;
</script>

<div class="">
  <form class="p-4" ref="form" on:submit|preventDefault>
    <BasicFields {category} />
    <ContentFields {category} />
    <ExtraFields {category} />
    <FormButtons cancelButton={false} {submitText} isLoading={disableAction} />
  </form>
</div>
