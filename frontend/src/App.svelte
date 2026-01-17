<script lang="ts">
    import StatusCard from "./lib/StatusCard.svelte";

    let apiState: "idle" | "loading" | "ok" | "error" = "idle";
</script>

<h1>Pixelcrate</h1>

<StatusCard title="Backend" status={apiState} message="Not connected yet." />
