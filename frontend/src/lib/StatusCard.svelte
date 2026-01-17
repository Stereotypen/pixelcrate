<script lang="ts">
    export let title: string;
    export let status: "idle" | "loading" | "ok" | "error" = "idle";
    export let message: string = "";
</script>

<section class="card" data-status={status}>
    <h2>{title}</h2>
    {#if status === "loading"}
        <p class="muted">Loading...</p>
    {:else if status === "ok"}
        <p class="ok">{message || "All good."}</p>
    {:else if status === "error"}
        <p class="error">{message || "Something went wrong."}</p>
    {:else}
        <p class="muted">{message || "Idle."}</p>
    {/if}
</section>

<style>
    .card {
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 12px;
    }

    .muted {
        opacity: 0.7;
    }

    .ok {
        font-weight: 600;
    }

    .error {
        font-weight: 600;
    }
</style>