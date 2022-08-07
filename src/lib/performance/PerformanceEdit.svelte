<script lang="ts">
  import {
    AddPerformance,
    type AddPerformanceInput,
    SavePerformance,
    GetPerformance,
  } from "$lib/graphql/types";

  import { onDestroy } from "svelte";

  export let id: string;

  const editPerformance = id
    ? GetPerformance({ variables: { id } })
    : undefined;

  const showInput: AddPerformanceInput = {
    title: undefined,
    subtitle: undefined,
    opening: undefined,
    closing: undefined,
  };

  if ($editPerformance) {
    const sub = editPerformance.subscribe((res) => {
      const edit = res?.data?.getPerformance;
      if (!edit) {
        return;
      }
      showInput.title = edit.title;
      showInput.subtitle = edit.subtitle;
      showInput.opening = edit.opening;
      showInput.closing = edit.closing;
    });

    onDestroy(() => {
      sub();
    });
  }

  function handleOnSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (id) {
      SavePerformance({
        variables: { input: { filter: { id: [id] }, set: showInput } },
      });
    } else {
      AddPerformance({
        variables: { input: showInput },
      }).then((res) => {
        console.log(res);
      });
    }
    window.location.pathname = "/performances";
  }
</script>

<div class="container">
  <form on:submit={handleOnSubmit}>
    <div class="form-group">
      <label for="title" class="required">Title:</label>
      <input
        type="text"
        class="form-control"
        id="title"
        bind:value={showInput.title}
        placeholder={$editPerformance?.data?.getPerformance?.title}
        required={true}
      />
    </div>

    <div class="form-group">
      <label for="sutitle"> Subtitle: </label>
      <input
        type="text"
        id="subtitle"
        class="form-control"
        bind:value={showInput.subtitle}
        placeholder={$editPerformance?.data?.getPerformance?.subtitle}
      />
    </div>
    <div class="row">
      <div class="form-group col-md-6 pr-md-5">
        <label for="opening"> Opening: </label>
        <input
          type="date"
          id="opening"
          class="form-control"
          bind:value={showInput.opening}
          placeholder={$editPerformance?.data?.getPerformance?.opening}
        />
      </div>
      <div class="form-group col-md-6 pl-md-5">
        <label for="closing"> Closing: </label>
        <input
          type="date"
          id="closing"
          class="form-control"
          bind:value={showInput.closing}
          placeholder={$editPerformance?.data?.getPerformance?.closing}
        />
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="submit">Save</button>
    </div>
  </form>
</div>
